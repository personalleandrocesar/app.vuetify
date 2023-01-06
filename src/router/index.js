import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Login.vue'
import TimeLine from '@/layouts/default/Default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      redirect: '/',
    },
    {
      path: '/',
      name: 'login',
      alias: '/login',
      component: Index
    },
    {
      path: '/recuperar',
      name: 'recuperar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/recuperar.vue')
    },
    {
      path: '/leandro-cesar',
      name: 'leandroCesar',
      component: TimeLine,
      meta: { requiresAuth: true },
    }
    
  ]
})

export default router
