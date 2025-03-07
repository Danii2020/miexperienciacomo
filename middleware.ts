import { type NextRequest } from "next/server"
 
import { updateSession } from "@/lib/supabase/middleware"
 
export async function middleware(request: NextRequest) {
  return await updateSession(request)
}
 
export const config = {
  matcher: ["/me", "/me/onboarding", "/me/posts/:path*", "/create-post"],
}