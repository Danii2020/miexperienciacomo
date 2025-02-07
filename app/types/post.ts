import { Database } from "./supabase"

export type Post = {
    title: string
    content: string,
    slug: string,
}

export type PostDatabase = Database["public"]["Tables"]["posts"]["Row"] & {
    user_id: {
        professional_role: string
        experience_time: string
    }
}