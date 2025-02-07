import { useEffect, useState } from "react"
import { PostgrestError } from "@supabase/supabase-js"
import { getPost } from "@/app/services/postService"
 
import { createClient } from "@/lib/supabase/client"
import { PostDatabase } from "@/app/types/post"

export function usePost(slug:string) {
  const [post, setPost] = useState<PostDatabase | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<PostgrestError | null>(null)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPost(slug:string) {
      try {
        const data = await getPost(supabase, slug)
        if (data.user_id?.error) {
          throw new Error('Failed to load user data')
        }
        setPost(data as unknown as PostDatabase)
      } catch (error) {
        setError(error as PostgrestError)
      } finally {
        setLoading(false)
      }
    }
    fetchPost(slug)
  }, [slug, supabase])

  return { loading, error, post }
}