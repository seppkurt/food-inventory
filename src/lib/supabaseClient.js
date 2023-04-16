import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hvbrdaxkvqzugjzjtnqx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2YnJkYXhrdnF6dWdqemp0bnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1OTA3MTMsImV4cCI6MTk5NzE2NjcxM30.ioQnia1rJ_Nx9dPMneYJG6WbFLNkgEXqO1S9RD6_FkY')