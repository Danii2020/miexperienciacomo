import { NextResponse, type NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { getUserRole } from "@/lib/get-user-role"
import { getUserProfile } from "@/app/services/userService"

export async function updateSession(request: NextRequest) {
  const supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
        //   supabaseResponse = NextResponse.next({
        //     request,
        //   })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const role = await getUserRole()

  if (
    user &&
    role !== "admin" &&
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    const url = request.nextUrl.clone()
    url.pathname = "/"
    return NextResponse.redirect(url)
  }

  // Redirect unauthenticated users to sign-in page
  if (
    !user &&
    !request.nextUrl.pathname.startsWith("/signin") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    const url = request.nextUrl.clone()
    url.pathname = "/"
    return NextResponse.redirect(url)
  }

  if (user) {
    const userData = await getUserProfile(supabase, user.id)
    const isProfileIncomplete = !userData || 
                               !userData.professional_role || 
                               !userData.experience_time
    if (isProfileIncomplete && !request.nextUrl.pathname.startsWith('/me/onboarding')) {
        const url = request.nextUrl.clone()
        url.pathname = "/me/onboarding"
        return NextResponse.redirect(url)
    }
    if (!isProfileIncomplete && request.nextUrl.pathname.startsWith('/me/onboarding')) {
        const url = request.nextUrl.clone()
        url.pathname = "/me"
        return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}