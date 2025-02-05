import { Database } from '../types/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { Post } from '../types/post';

export const savePost = async (
    supabase: SupabaseClient<Database>,
    userId: string | undefined,
    postData: Post
) => {
    const { error } = await supabase
        .from('posts')
        .insert({
            title: postData.title,
            content: postData.content,
            slug: postData.slug,
            user_id: userId,
        });
    if (error) {
        throw error;
    }
    return { success: true };
};

export const getPost = async (supabase: SupabaseClient<Database>, slug: string) => {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        throw error;
    }

    return data;
};