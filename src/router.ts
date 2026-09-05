import OpenLetter from '@/components/OpenLetter.vue'
import SignOn from '@/components/SignOn.vue'
import Page404 from '@/components/Page404.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: OpenLetter },
  { path: '/sign-on/', component: SignOn },
  { path: '/:pathMatch(.*)', component: Page404 },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})