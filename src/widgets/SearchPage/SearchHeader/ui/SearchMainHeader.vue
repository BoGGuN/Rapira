<script setup lang="ts">
import LogoIcon from '@/assets/icons/LogoIcon.vue'
</script>

<template>
   <div
      class="z-[4] flex h-[62px] w-full items-center gap-20 bg-black pl-[56px]"
   >
      <ElIcon size="150" color="#FFFFFF">
         <LogoIcon />
      </ElIcon>
      <div class="flex gap-[20px]">
         <div
            class="rounded-[6px] px-[14px] py-2 text-[16px] font-semibold leading-none text-white"
         >
            Главная
         </div>
         <div
            class="rounded-[6px] px-[14px] py-2 text-[16px] font-semibold leading-none"
            :class="{ 'bg-[#FFFFFF1A]': true, 'text-[#3E97FF]': true }"
         >
            Блог
         </div>
      </div>
   </div>
</template>
