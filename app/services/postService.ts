import { Database } from '../types/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { Post } from '../types/post';

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
            user_id: userId,
        });
    if (error) {
        throw error;
    }
    return { success: true };
};

export const getPost = async (
    supabase: SupabaseClient<Database>,
    slug: string
  ) => {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        user_id (
            professional_role,
            experience_time
        )
    `)
      .eq('slug', slug)
      .single();
  
    if (error) {
      throw error;
    }
  
    return data;
  };
  

  export const getPosts = async (
    supabase: SupabaseClient<Database>,
  ) => {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        user_id (
            professional_role,
            experience_time
        )
    `)
  
    if (error) {
      throw error;
    }
  
    return data;
  };

