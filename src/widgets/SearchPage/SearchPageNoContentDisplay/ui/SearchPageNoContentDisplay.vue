<script setup lang="ts">
import SearchListIcon from '@/assets/icons/SearchListIcon.vue'
</script>

<template>
   <div class="flex size-full items-center justify-center">
      <div class="flex w-[287px] flex-col items-center justify-center">
         <ElIcon size="46" color="#D8D8E5">
            <SearchListIcon />
         </ElIcon>
         <span class="mb-2 mt-2 text-center text-sm text-text_gray">
            Поиск не дал результатов
         </span>
         <span class="text-center text-[12px]/[20px] text-text_light_gray">
            Повторите поиск или используйте фильтр для структуризации контента
         </span>
      </div>
   </div>
</template>

<style lang="scss" scoped></style>
