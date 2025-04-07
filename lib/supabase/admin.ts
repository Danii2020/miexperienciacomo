import "server-only"

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY;

export const supabaseAdmin = createClient(supabaseUrl || "", serviceRoleKey || "");
