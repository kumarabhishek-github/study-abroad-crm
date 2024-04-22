import { createClient } from '@supabase/supabase-js';

interface SupabaseConfig {
  projectURL: string;
  projectKey: string
}
const supabaseConfig: SupabaseConfig = {
  projectURL: 'https://doweabwvxuwkgiidbenz.supabase.co' || '',
  projectKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvd2VhYnd2eHV3a2dpaWRiZW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MDA4MDgsImV4cCI6MjAyOTI3NjgwOH0.GI2WWsXcGYc6-WSqiAS7wV8ucFdExGtMLB0R-zVza4I' ||'',
};

// const projectURL =  process.env.SUPABASE_PROJECT
// const projectKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseConfig.projectURL, supabaseConfig.projectKey);

