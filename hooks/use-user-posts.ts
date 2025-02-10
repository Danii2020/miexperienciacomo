import { useEffect, useState } from "react"
import { PostgrestError } from "@supabase/supabase-js"
import { getPostsByUserId } from "@/app/services/postService" // Import the function to get posts by user ID

import { createClient } from "@/lib/supabase/client"
import { PostDatabase } from "@/app/types/post"

export function useUserPosts(userId: string) {
  const [userPosts, setUserPosts] = useState<PostDatabase[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<PostgrestError | null>(null)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const data = await getPostsByUserId(supabase, userId)
        setUserPosts(data as unknown as PostDatabase[])
      } catch (error) {
        setError(error as PostgrestError)
      } finally {
        setLoading(false)
      }
    }

    if (userId) {
      fetchPosts()
    }
  }, [userId, supabase])

  return { loading, error, userPosts }
}
