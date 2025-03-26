import { Database } from "./supabase"
import { UserDataBase } from "./user"

export type Post = {
    id?: string,
    title: string
    content: string,
    slug: string,
    summary: string
}

export type PostDatabase = Database["public"]["Tables"]["posts"]["Row"] & {
    user_id: UserDataBase
}