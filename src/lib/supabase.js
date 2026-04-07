import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yxaxbykixofxmozlqwje.supabase.co';
const supabaseAnonKey = 'sb_publishable_xSWEBzDRAwCKdkOAxmL-Vw_EeSer1ym';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);