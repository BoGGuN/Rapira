<script setup lang="ts">
import type { Post } from '@/shared/types/services'
import { VueFinalModal } from 'vue-final-modal'
import PostInfo from '@/shared/ui/PostInfo.vue'
import {
   SearchPostTags,
   DetailComment,
   DetailInput,
} from '@/widgets/SearchPage'

const emits = defineEmits(['close'])
const props = defineProps<{ post?: Post }>() as { post: Post }

const post = computed(() => props.post)
</script>

<template>
   <VueFinalModal
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
      class="flex items-center justify-center"
   >
      <div class="max-h-[867px] w-[630px] rounded-[12px] bg-white py-[15px]">
         <div class="mb-2.5 flex flex-col gap-2.5 px-[15px]">
            <div class="flex items-center justify-between">
               <span class="text-[24px] font-semibold leading-none">
                  Вдохновение в каждом шаге
               </span>
               <ElButton
                  class="!size-min !border-none !p-0"
                  plain
                  @click="emits('close')"
               >
                  <ElIcon size="20">
                     <Close />
                  </ElIcon>
               </ElButton>
            </div>
            <PostInfo
               :date="post.created_at"
               :comments="post.comments.length"
            />
         </div>
         <ElScrollbar wrap-class="pl-[15px]" :max-height="657">
            <div class="flex w-full flex-col gap-[15px] pr-[15px]">
               <ElImage
                  :src="post?.picture"
                  fit="cover"
                  class="h-[343px] w-[600px] rounded-[12px]"
               >
                  <template #error>
                     <div
                        ref="isError"
                        class="flex size-full items-center justify-center bg-bg_light_gray"
                     >
                        <ElIcon size="96" color="#f3f1f1">
                           <Close />
                        </ElIcon>
                     </div>
                  </template>
               </ElImage>
               <span class="overflow-hidden whitespace-pre text-wrap">
                  {{ post.post_text }}
               </span>
               <SearchPostTags :tags="post?.tags" />
               <div class="flex flex-col gap-2.5">
                  <div class="flex items-end gap-1">
                     <span
                        class="text-text_dark_gray text-[16px] font-semibold leading-none"
                     >
                        Комментариев
                     </span>
                     <span
                        class="text-[16px] font-semibold leading-none text-text_gray"
                     >
                        {{ post.comments.length }}
                     </span>
                  </div>
                  <DetailInput />
                  <DetailComment
                     v-for="comment in post.comments"
                     :key="comment.id"
                     :comment="comment"
                  />
               </div>
            </div>
         </ElScrollbar>
      </div>
   </VueFinalModal>
</template>

<style lang="scss" scoped></style>
