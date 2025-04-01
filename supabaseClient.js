import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vgvlzkmizgkkboekdshj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndmx6a21pemdra2JvZWtkc2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjQ3NzQsImV4cCI6MjA1ODUwMDc3NH0.shjD8AZJPbm745M-laZViQlRVv1zul3umaXdOW7f-is';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
