import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    props: true
  },
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/contact',
    name: 'ContactUsPage',
    component: () => import('../views/ContactUsPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
