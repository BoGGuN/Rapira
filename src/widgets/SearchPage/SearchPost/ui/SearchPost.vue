<script setup lang="ts">
import PostInfo from '@/shared/ui/PostInfo.vue'
import type { Post } from '@/shared/types/services'
import SearchPostPicture from './SearchPostPicture.vue'
import SearchPostTags from './SearchPostTags.vue'

const emits = defineEmits(['openDetailModal', 'redirect'])

const props = defineProps<Post>()
</script>

<template>
   <div
      class="flex h-[408px] w-[400px] flex-col gap-2.5"
      @click="emits('redirect', props)"
   >
      <SearchPostPicture
         :picture="props.picture"
         @open-detail-modal="emits('openDetailModal', props)"
      />
      <PostInfo :date="props.created_at" :comments="props.comments.length" />
      <span class="truncate text-[22px] font-semibold leading-none">
         {{ props.title }}
      </span>
      <div class="h-[50px] overflow-hidden">
         <span class="font-medium leading-[25px]">
            {{ props.description }}
         </span>
      </div>
      <SearchPostTags :tags="props.tags" />
   </div>
</template>
