import { Database } from '../types/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { User } from '../types/user';
import { supabaseAdmin } from '@/lib/supabase/admin';

export const updateUserProfile = async (
    supabase: SupabaseClient<Database>,
    userId: string | undefined,
    profileData: User
) => {
    const { error } = await supabase
        .from('users')
        .update({
            professional_role: profileData.professionalRole,
            experience_time: profileData.experienceTime,
            show_name: profileData.showName,
            show_photo: profileData.showPhoto
        })
        .eq('id', userId || "");

    if (error) {
        throw error;
    }

    return { success: true };
};

export const getUserProfile = async (supabase: SupabaseClient<Database>, userId: string) => {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId || "")
        .single();

    if (error) {
        throw error;
    }

    return data;
};

export const deleteUserAccount = async (
    supabase: SupabaseClient<Database>,
    userId: string
  ) => {
    
    // 1. Delete posts from the 'posts' table
    const { error: postsError } = await supabase
      .from('posts')
      .delete()
      .eq('user_id', userId);
    if (postsError) {
      throw postsError;
    }

    // 2. Delete user from the 'public.users' table
    const { error: publicUserError } = await supabase
      .from('users')
      .delete()
      .eq('id', userId);
    if (publicUserError) {
      throw publicUserError;
    }

    // 3. Delete user from the 'auth.users' table using the Auth Admin API
    const { error: authUserError } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (authUserError) {
      throw authUserError;
    }

    return { success: true };
  };
