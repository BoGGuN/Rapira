<script setup lang="ts">
import moment from 'moment'
import type { PostComment } from '@/shared/types/services'

const props = defineProps<{ comment: PostComment }>()
const comment = computed(() => props.comment)

function defineDateLabel(date: string) {
   return moment(date).format('D.MM.YYYY в HH:mm')
}
</script>

<template>
   <div class="flex w-full items-start gap-[12px] px-[12px]">
      <ElAvatar :src="comment.picture" :size="38" />
      <div class="flex flex-col gap-[6px]">
         <span class="text-[16px] font-semibold leading-none">{{
            comment.user
         }}</span>
         <span
            class="max-w-[526px] text-ellipsis text-wrap text-[14px] leading-none"
         >
            {{ comment.text }}
         </span>
         <span class="text-[12px] font-medium leading-none text-text_gray">
            {{ defineDateLabel(comment.created_at) }}
         </span>
      </div>
   </div>
</template>
