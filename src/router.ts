import OpenLetter from '@/components/OpenLetter.vue'
import Signor from '@/components/Signors.vue'
import Page404 from '@/components/Page404.vue'
import Home from '@/components/Home.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/open-letter', component: OpenLetter },
  { path: '/endorsing-organizations/', component: Signor },
  { path: '/:pathMatch(.*)', component: Page404 },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})