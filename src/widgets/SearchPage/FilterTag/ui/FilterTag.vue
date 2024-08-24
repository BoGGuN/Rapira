<script setup lang="ts">
import PlusIcon from '@/assets/icons/PlusIcon.vue'
import CheckIcon from '@/assets/icons/CheckIcon.vue'

const props = defineProps<{
   tag: string
   isSelected: boolean
}>()
</script>

<template>
   <ElTag
      size="large"
      round
      :effect="props.isSelected ? 'dark' : 'light'"
      class="cursor-pointer select-none sm:!h-[28px] md:!h-[32px]"
   >
      <div class="flex items-center gap-[6px]">
         <span class="text-[16px] font-medium">
            {{ tag }}
         </span>
         <ElIcon size="12" :color="props.isSelected ? '#FFFFFF' : '#2884EF'">
            <CheckIcon v-if="props.isSelected" />
            <PlusIcon v-else />
         </ElIcon>
      </div>
   </ElTag>
</template>

<style lang="scss" scoped>
.el-tag {
   transition: all ease-in-out 300ms;
}
</style>
