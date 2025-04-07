import { Database } from '../types/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { User } from '../types/user';

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
