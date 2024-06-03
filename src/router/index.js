import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Certificate from '../views/certificate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/certificate',
      name:'certificate',
      component:Certificate
    }
  ]
})

export default router
