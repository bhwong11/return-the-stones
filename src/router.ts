import Home from '@/components/Home.vue'
import SignOn from '@/components/SignOn.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => Home },
  { path: '/about', component: () => SignOn },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})