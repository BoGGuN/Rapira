<script setup lang="ts">
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import { useBlogStore } from '@/entities/blog'

const modelValue = defineModel<string>()

const emits = defineEmits(['toggleTags'])
const props = defineProps<{ showTags: boolean }>()

const blogStore = useBlogStore()
const canClear = computed(
   () => blogStore.params.tags.length || blogStore.params.term,
)
</script>

<template>
   <div class="relative flex justify-between">
      <div
         class="flex gap-[40px] sm:w-full sm:flex-col sm:items-start md:flex-row md:items-center"
      >
         <span class="text-[32px] font-bold leading-none">Блог</span>
         <ElInput
            v-model="modelValue"
            :prefix-icon="SearchIcon"
            size="large"
            class="sm:!w-full md:!w-[400px]"
         />
      </div>
      <div
         class="flex items-center gap-2.5 sm:absolute sm:right-0 sm:top-[10px] md:static"
      >
         <ElButton
            v-if="canClear"
            type="primary"
            class="!px-1"
            text
            @click="blogStore.clearParams"
         >
            Очистить
         </ElButton>
         <ElButton
            class="!px-1"
            text
            @click="emits('toggleTags', !props.showTags)"
         >
            <div class="flex items-center gap-1">
               <span class="text-[14px] leading-none">Фильтры</span>
               <ElIcon size="16" color="#A1A5B7">
                  <ArrowDown v-if="!props.showTags" />
                  <ArrowUp v-else />
               </ElIcon>
            </div>
         </ElButton>
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
