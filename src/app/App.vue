<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
import { RouterView } from 'vue-router'
import { AppWrapper } from '@/widgets/App'
</script>

<template>
   <AppWrapper>
      <RouterView />
   </AppWrapper>
   <ModalsContainer />
</template>
