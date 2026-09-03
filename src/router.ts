import Home from '@/components/Home.vue'
import SignOn from '@/components/SignOn.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/return-the-stones/', component: () => Home },
  { path: '/return-the-stones/sign-on/', component: () => SignOn },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})