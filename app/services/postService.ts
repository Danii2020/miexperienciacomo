import { Database } from '../types/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { Post } from '../types/post';

const postUserQuery = `
        *,
        user_id (
            professional_role,
            experience_time,
            name
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

export const updatePost = async (
    supabase: SupabaseClient<Database>,
    postData: Post
) => {
    const { error } = await supabase
        .from('posts')
        .update({
            title: postData.title,
            content: postData.content,
            slug: postData.slug,
            summary: postData.summary,
        })
        .eq("id", postData?.id || "");
    if (error) {
        throw error;
    }
    return { success: true };
};

export const deletePost = async (
    supabase: SupabaseClient<Database>,
    postId: string
) => {
    const { error } = await supabase
        .from('posts')
        .delete()
        .eq("id", postId);
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

export const saveLikes = async (
    supabase: SupabaseClient<Database>,
    likes: number,
    postId: string
) => {
    const { error } = await supabase
    .from('posts')
    .update({
        likes
    })
    .eq("id", postId || "");
    if (error) {
        throw error;
    }
    return { success: true };
}

