import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

export const saveContactData = async (
    supabase: SupabaseClient<Database>,
    data: {
        email: string,
        name: string,
        comment: string
    }
) => {
    const { error } = await supabase
        .from('contacts')
        .insert({
            email: data.email,
            name: data.name,
            comment: data.comment
        });
    if (error) {
        throw error;
    }
    return { success: true };
};