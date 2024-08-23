<script setup lang="ts">
import SeparateDotIcon from '@/assets/icons/SeparateDotIcon.vue'
import CommunicationIcon from '@/assets/icons/CommunicationIcon.vue'
import { defineDate } from '@/shared/lib/defineDate'
import { defineDateFrom } from '@/shared/lib/defineDateFrom'
import { defineComments } from '@/shared/lib/defineComments'
import { usePostCreateTime } from '@/shared/lib/composables/usePostCreateTime'

const props = defineProps<{
   date: string
   comments: number
}>()

const { difference } = usePostCreateTime(props.date)

const dateLabel = computed(() => defineDate(props.date))
const dateFromLabel = computed(() => defineDateFrom(difference.value))
const commentsLabel = computed(() => defineComments(props.comments))
</script>

<template>
   <div class="flex items-center gap-2.5">
      <span class="text-sm font-medium text-text_gray">
         {{ dateLabel }}
      </span>
      <ElIcon color="#7E8299" size="6"> <SeparateDotIcon /> </ElIcon>
      <div class="flex items-center gap-1">
         <ElIcon color="#7E8299" size="16">
            <Clock />
         </ElIcon>
         <span class="text-sm font-medium text-text_gray">
            {{ dateFromLabel }}
         </span>
      </div>
      <ElIcon color="#7E8299" size="6"> <SeparateDotIcon /> </ElIcon>
      <div class="flex items-center gap-1">
         <ElIcon color="#7E8299" size="16">
            <CommunicationIcon />
         </ElIcon>
         <span class="text-sm font-medium text-text_gray">
            {{ commentsLabel }}
         </span>
      </div>
   </div>
</template>
