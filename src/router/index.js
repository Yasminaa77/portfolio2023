import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue')
    },

  ]
})

export default router
