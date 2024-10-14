import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aofdwijmbvsajzhlpcnq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZmR3aWptYnZzYWp6aGxwY25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDU1NDAsImV4cCI6MjA0NDEyMTU0MH0.uMch4vP-p1DtZnkJeDoPHo2tdsUPCQX61OqrP_AhKGc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
