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
      class="group flex flex-col gap-2.5 sm:h-[383px] sm:w-[325px] md:h-[378px] md:w-[365px] lg:h-[408px] lg:w-[400px]"
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
