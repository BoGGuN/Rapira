<script setup lang="ts">
const emits = defineEmits(['openDetailModal'])

const props = defineProps<{
   picture: string
}>()

const isError = ref<HTMLDivElement | null>(null)
</script>

<template>
   <div class="group relative">
      <div
         v-if="!isError"
         class="segment absolute right-0 top-0 z-[2] flex cursor-pointer justify-end bg-[#000000A0] p-[10px_10px_0_0] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
         @click.stop="emits('openDetailModal')"
      >
         <ElIcon size="20" color="#FFFFFFA0">
            <TopRight />
         </ElIcon>
      </div>
      <ElImage
         :src="props.picture"
         fit="cover"
         class="rounded-[12px] sm:h-[200px] sm:w-[325px] md:h-[220px] md:w-[365px] lg:h-[250px] lg:w-[400px]"
      >
         <template #error>
            <div
               ref="isError"
               class="flex size-full items-center justify-center bg-bg_light_gray"
            >
               <ElIcon size="96" color="#f3f1f1">
                  <Close />
               </ElIcon>
            </div>
         </template>
      </ElImage>
   </div>
</template>

<style lang="scss" scoped>
.segment {
   width: 50px;
   height: 50px;
   border-radius: 0 12px 0 100%;
   clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
