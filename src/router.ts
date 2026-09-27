import OpenLetter from '@/components/OpenLetter.vue'
import Signors from '@/components/Signors.vue'
import Actions from '@/components/Actions.vue'
import PressReleases from '@/components/PressReleases.vue'
import Page404 from '@/components/Page404.vue'
import Home from '@/components/Home.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/open-letter', component: OpenLetter },
  { path: '/endorsing-organizations/', component: Signors },
  { path: '/actions/', component: Actions },
  { path: '/press-releases/', component: PressReleases },
  { path: '/:pathMatch(.*)', component: Page404 },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})