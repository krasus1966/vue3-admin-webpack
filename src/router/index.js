import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '@/layout'
import notFoundPage from '@/layout/notfound/404.vue'
import test from '@/views/test.vue'
import loginPage from '@/views/login/router'

const publicRoutes = [
  {
    path: '/',
    // redirect: '/',
    name: 'index',
    component: layout,
    children: [
      {
        path: '/404',
        name: 'notFoundPage',
        component: notFoundPage,
        hidden: true
      },
      {
        path: '/chooseIcon',
        name: 'te',
        component: test,
        hidden: true
      }
    ]
  },
  loginPage
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
