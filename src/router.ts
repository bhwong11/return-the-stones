import Home from '@/components/Home.vue'
import SignOn from '@/components/SignOn.vue'
import Page404 from '@/components/Page404.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/sign-on/', component: SignOn },
  { path: '/:pathMatch(.*)', component: Page404 },
]

export const router = createRouter({
  history: createWebHistory("/return-the-stones/"),
  routes,
})