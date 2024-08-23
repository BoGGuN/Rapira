<script setup lang="ts">
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance | null>(null)
const formModel = ref<{ comment: string }>({ comment: '' })
function validateComment(rule: any, value: any, callback: any) {
   if (value.length > 250)
      callback(new Error('Текст превышает допустимое значение'))
   else callback()
}
</script>

<template>
   <ElForm ref="formRef" :model="formModel">
      <ElFormItem
         :rules="[{ validator: validateComment, trigger: 'change' }]"
         prop="comment"
         class="relative"
      >
         <ElInput
            v-model="formModel.comment"
            autosize
            clearable
            type="textarea"
            class="!w-full"
            :input-style="{ padding: '15px' }"
            placeholder="Введите комментарий"
         />
         <template v-if="formModel.comment">
            <ElButton
               class="absolute right-2.5 top-2.5 !size-min !border-none !p-0"
               round
               plain
               @click="formRef?.resetFields()"
            >
               <ElIcon size="20" class="opacity-50">
                  <Close />
               </ElIcon>
            </ElButton>
            <div class="absolute bottom-[-15px] right-0 flex gap-1">
               <span
                  class="text-[12px] leading-none text-text_gray"
                  :class="{
                     'text-text_danger': formModel.comment.length > 250,
                  }"
                  >{{ formModel.comment.length }}</span
               >
               <span class="text-[12px] leading-none text-text_gray"
                  >из 250 символов</span
               >
            </div>
         </template>
      </ElFormItem>
   </ElForm>
</template>

<style lang="scss" scoped></style>
