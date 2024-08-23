<script setup lang="ts">
import LogoIcon from '@/assets/icons/LogoIcon.vue'
import GeneralIcon from '@/assets/icons/GeneralIcon.vue'
</script>

<template>
   <div
      class="z-[4] flex h-[78px] w-full items-center gap-20 bg-black pl-[22px] lg:h-[62px] lg:pl-[56px]"
   >
      <div class="flex items-center gap-[15px]">
         <ElIcon size="20" color="#FFFFFF" class="lg:!hidden">
            <GeneralIcon />
         </ElIcon>
         <ElIcon size="150" color="#FFFFFF">
            <LogoIcon />
         </ElIcon>
      </div>
      <div class="hidden gap-[20px] lg:flex">
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
