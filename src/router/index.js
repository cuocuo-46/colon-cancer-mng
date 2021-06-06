import { createRouter, createWebHashHistory } from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/medical-records/list'
    },
    {
      path: '/medical-records',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'list',
          name: 'MedicalRecords',
          component: () => import('@/views/medical-record-database/list.vue')
        },
        {
          path: 'add',
          name: 'AddRecord',
          component: () => import('@/views/medical-record-database/add.vue')
        },
      ]
    }
  ]
})

export default router