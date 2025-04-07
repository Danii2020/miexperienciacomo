import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export async function DELETE() {
  try {
    const supabase = createClient()
    const {
        data: { user },
      } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid token' },
        { status: 401 }
      );
    }
    const userId = user.id;

    const { error: postsError } = await supabaseAdmin
      .from('posts')
      .delete()
      .eq('user_id', userId);
    if (postsError) {
      throw postsError;
    }

    const { error: publicUserError } = await supabaseAdmin
      .from('users')
      .delete()
      .eq('id', userId);
    if (publicUserError) {
      throw publicUserError;
    }

    const { error: authUserError } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (authUserError) {
      throw authUserError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting user account:', error);
    return NextResponse.json(
      { error: 'Failed to delete user account' },
      { status: 500 }
    );
  }
}
