import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAMES } from '@/shared/routes'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: ROUTE_NAMES.SEARCH,
         component: () => import('@/pages/SearchPage'),
      },
   ],
})

export default router
