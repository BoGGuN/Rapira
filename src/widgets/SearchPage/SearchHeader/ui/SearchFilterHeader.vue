<script setup lang="ts">
import _ from 'lodash'
import SearchFilterInput from './SearchFilterInput.vue'
import SearchFilterTags from './SearchFilterTags.vue'
import { useBlogStore } from '@/entities/blog'

const blogStore = useBlogStore()
const { params } = storeToRefs(blogStore)
const showTags = ref(false)

function handleToggleTags(flag: boolean) {
   showTags.value = flag
}

const searchRequest = _.debounce(async () => {
   await blogStore.getAll(params.value)
}, 500)

watch(params.value, () => {
   searchRequest()
})
</script>

<template>
   <div
      class="z-[3] h-min max-h-[152px] min-h-[80px] w-full bg-white px-[95px] py-[20px]"
   >
      <SearchFilterInput
         v-model="params.term"
         :show-tags="showTags"
         @toggle-tags="handleToggleTags"
      />
      <Transition name="tags">
         <div v-if="showTags">
            <ElDivider class="!my-[20px]" />
            <SearchFilterTags v-model="params.tags" />
         </div>
      </Transition>
   </div>
</template>
<style lang="scss" scoped>
.tags-enter-active,
.tags-leave-active {
   transition: all 200ms ease-in-out;
}

.tags-enter-from,
.tags-leave-to {
   transform: translateY(-200px);
   opacity: 0;
}

.tags-enter-to,
.tags-leave-from {
   transform: translateY(0);
   opacity: 1;
}
</style>
