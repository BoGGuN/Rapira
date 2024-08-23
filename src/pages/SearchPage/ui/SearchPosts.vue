<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import { useBlogStore } from '@/entities/blog'
import { SearchPost } from '@/widgets/SearchPage'
import { SearchPageNoContentDisplay } from '@/widgets/SearchPage'
import type { Post } from '@/shared/types/services'
import DetailModal from './DetailModal'

const blogStore = useBlogStore()
const { items, isLoading } = storeToRefs(blogStore)

const isNoData = computed(() => !isLoading.value && !items.value.length)
const isFirstLoading = computed(() => isLoading.value && !items.value.length)
const isLoadingWithData = computed(
   () => isLoading.value && !!items.value.length,
)

const {
   open: openDetailModal,
   close: closeDetailModal,
   patchOptions,
} = useModal({
   component: DetailModal,
   attrs: {
      onClose() {
         closeDetailModal()
      },
   },
})

function handleOpenDetailModal(post: Post) {
   patchOptions({
      attrs: {
         post,
      },
   })
   openDetailModal()
}

function handleRedirect(post: Post) {
   console.log('redirect', post)
}

onMounted(async () => {
   await blogStore.getAll()
})
</script>

<template>
   <ElScrollbar class="size-full" wrap-class="pt-[10px] lg:pt-[20px] pb-[30px]">
      <div class="flex size-full justify-center">
         <div
            class="sm::w-[355px] h-fit rounded-[12px] bg-white p-[15px] md:w-[780px] lg:w-[1300px] lg:p-[30px]"
         >
            <div
               v-loading="isLoadingWithData"
               class="grid gap-x-[20px] sm:grid-cols-1 sm:gap-y-[20px] md:grid-cols-2 md:gap-y-[25px] lg:grid-cols-3 lg:gap-y-[40px]"
            >
               <SearchPost
                  v-for="item in items"
                  v-bind="item"
                  :key="item.id"
                  @open-detail-modal="handleOpenDetailModal"
                  @redirect="handleRedirect"
               />
            </div>
            <div
               v-if="isFirstLoading"
               v-loading="isFirstLoading"
               class="h-[122px] w-full"
            />
            <SearchPageNoContentDisplay v-if="isNoData" />
         </div>
      </div>
   </ElScrollbar>
</template>
