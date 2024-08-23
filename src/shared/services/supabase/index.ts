import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
   'https://kbszrtjfysmkqszkrqaw.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtic3pydGpmeXNta3FzemtycWF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDI2MTA3OCwiZXhwIjoyMDM5ODM3MDc4fQ.IUZaGA2KDLvJ_DdEZEW5ttifFSrxqkoXg7RBZU40ZMg',
)
