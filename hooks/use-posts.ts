import { useEffect, useState } from "react"
import { PostgrestError } from "@supabase/supabase-js"
import { getPostBySlug } from "@/app/services/postService"
 
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
        const data = await getPostBySlug(supabase, slug)
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