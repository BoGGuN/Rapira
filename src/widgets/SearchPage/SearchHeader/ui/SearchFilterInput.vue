<script setup lang="ts">
import SearchIcon from '@/assets/icons/SearchIcon.vue'

const modelValue = defineModel<string>()

const emits = defineEmits(['toggleTags'])
const props = defineProps<{ showTags: boolean }>()

const toggleTagsLabel = computed(() =>
   props.showTags ? 'Скрыть фильтры' : 'Фильтры',
)
</script>

<template>
   <div class="flex justify-between">
      <div class="flex items-center gap-[40px]">
         <span class="text-[32px] font-bold leading-none">Блог</span>
         <ElInput
            v-model="modelValue"
            :prefix-icon="SearchIcon"
            size="large"
            class="!w-[400px]"
         />
      </div>
      <div
         class="flex cursor-pointer items-center justify-center gap-1"
         @click="emits('toggleTags', !props.showTags)"
      >
         <span class="leading-none text-text_light_gray">
            {{ toggleTagsLabel }}
         </span>
         <ElIcon size="16" color="#A1A5B7">
            <ArrowDown v-if="!props.showTags" />
            <ArrowUp v-else />
         </ElIcon>
      </div>
   </div>
</template>

<style lang="scss" scoped>
:deep(.is-focus) {
   background-color: white !important;
}
:deep(.el-input__wrapper) {
   background-color: #f9f9f9;
   transition: all ease-in-out 300ms;
}
</style>
