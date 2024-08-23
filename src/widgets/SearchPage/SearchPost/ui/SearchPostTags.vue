<script setup lang="ts">
const props = defineProps<{
   tags: string[]
}>()
</script>

<template>
   <div class="flex gap-2.5">
      <ElTag
         v-for="tag in props.tags"
         class="!h-[26px] !text-[14px] font-medium"
         round
      >
         {{ tag }}
      </ElTag>
   </div>
</template>
