import Home from '@/components/Home.vue'
import SignOn from '@/components/SignOn.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => Home },
  { path: '/sign-on', component: () => SignOn },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})