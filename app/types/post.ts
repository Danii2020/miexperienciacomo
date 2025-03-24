import { Database } from "./supabase"

export type Post = {
    id?: string,
    title: string
    content: string,
    slug: string,
    summary: string
}

export type PostDatabase = Database["public"]["Tables"]["posts"]["Row"] & {
    user_id: {
        professional_role: string
        experience_time: string
        name: string
    }
}