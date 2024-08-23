<script setup lang="ts">
import { TAGS } from '@/shared/config/tags'
import { FilterTag } from '@/widgets/SearchPage'

const modelValue = defineModel()

function handleChangeTag(tag: string) {
   if (modelValue.value.includes(tag)) {
      const index = modelValue.value.findIndex((el: string) => el === tag)
      if (index > -1) modelValue.value.splice(index, 1)
   } else modelValue.value.push(tag)
}
</script>

<template>
   <div class="flex gap-2">
      <FilterTag
         v-for="tag in TAGS"
         :key="tag"
         :tag="tag"
         :is-selected="modelValue.includes(tag)"
         @click="handleChangeTag(tag)"
      />
   </div>
</template>
