import { baseRequest } from '@/shared/services/baseRequest'
import type { Post } from '@/shared/types/services'
import type { RequestParams } from '../types'

export const useBlogStore = defineStore('blog-store', () => {
   const error = ref<any>(null)
   const isLoading = ref(false)
   const items = ref<Post[]>([])
   const params = ref<RequestParams>({
      term: '',
      tags: [],
   })

   async function getAll(params?: RequestParams) {
      error.value = null
      isLoading.value = true

      const isEmptyLoading = !params || (!params?.tags?.length && !params?.term)
      const isTagsLoading = !!params?.tags?.length
      const isTermLoading = !!params?.term

      try {
         let response

         if (isEmptyLoading) {
            response = await baseRequest()
         } else {
            if (isTagsLoading && isTermLoading) {
               response = await baseRequest()
                  .like('title', `%${params.term.trim()}%`)
                  .contains('tags', JSON.stringify(params.tags))
            } else if (isTermLoading) {
               response = await baseRequest().like(
                  'title',
                  `%${params.term.trim()}%`,
               )
            } else if (isTagsLoading) {
               response = await baseRequest().contains(
                  'tags',
                  JSON.stringify(params.tags),
               )
            }
         }

         items.value = response?.data ?? []
      } catch (e) {
         error.value = e
      }

      isLoading.value = false
   }

   function clearParams() {
      params.value.term = ''
      params.value.tags = []
   }

   function reset() {
      error.value = null
      isLoading.value = false
      items.value = []
      params.value.term = ''
      params.value.tags = []
   }
   return {
      error,
      isLoading,
      items,
      params,
      getAll,
      clearParams,
      reset,
   }
})
