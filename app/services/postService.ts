import { Database } from '../types/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { Post } from '../types/post';

const postUserQuery = `
        *,
        user_id (
            professional_role,
            experience_time
        )
    `

export const savePost = async (
    supabase: SupabaseClient<Database>,
    userId: string,
    postData: Post
) => {
    const { error } = await supabase
        .from('posts')
        .insert({
            title: postData.title,
            content: postData.content,
            slug: postData.slug,
            summary: postData.summary,
            user_id: userId,
        });
    if (error) {
        throw error;
    }
    return { success: true };
};

const getPost = async (
    supabase: SupabaseClient<Database>,
    column: string,
    columnValue: string
) => {
    const { data, error } = await supabase
        .from('posts')
        .select(postUserQuery)
        .eq(column, columnValue)
        .single();

    if (error) {
        throw error;
    }
    return data;
};

export const getPostBySlug = async (
    supabase: SupabaseClient<Database>,
    slug: string,
) => {
    return getPost(supabase, "slug", slug)
};

export const getPosts = async (
    supabase: SupabaseClient<Database>,
) => {
    const { data, error } = await supabase
        .from('posts')
        .select(postUserQuery)
    if (error) {
        throw error;
    }
    return data;
};

export const getPostsByUserId = async (
    supabase: SupabaseClient<Database>,
    userId: string
) => {
    const { data, error } = await supabase
        .from('posts')
        .select(postUserQuery)
        .eq("user_id", userId)
    if (error) {
        throw error;
    }
    return data;
}

