import { supabase } from '@/shared/services/supabase'

/* Собранные воедино параметры для полного поста */
export const baseRequest = () => supabase.from('post').select(`*, comments (*)`)
