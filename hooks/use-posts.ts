import { useEffect, useState } from "react"
import { AuthError, Session, User } from "@supabase/supabase-js"
import { jwtDecode } from "jwt-decode"
import type { JwtPayload } from "jwt-decode"
import { getPost } from "@/app/services/postService"
 
import { createClient } from "@/lib/supabase/client"
import { Post } from "@/app/types/post"
 
type SupabaseJwtPayload = JwtPayload & {
  app_metadata: {
    role: string
  }
}
 
export function usePost(slug:string) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null>(null)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPost(slug:string) {
      try {
        const data = await getPost(supabase, slug)
        setPost(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost(slug)
  }, [slug, supabase])
 
  return { loading, error, session, user, role }
}