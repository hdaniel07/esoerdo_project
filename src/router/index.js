import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import WildlifeLayout from '../layouts/WildlifeLayout.vue'
import QuizLayout from '../layouts/QuizLayout.vue'
import MapLayout from '../layouts/MapLayout.vue'
import TipsLayout from '../layouts/TipsLayout.vue'

const routes = [
  { path: '/', name: 'home', component: MainLayout },
  { path: '/wildlife', name: 'wildlife', component: WildlifeLayout },
  { path: '/quiz', name: 'quiz', component: QuizLayout },
  { path: '/maps', name: 'maps', component: MapLayout },
  { path: '/tips', name: 'tips', component: TipsLayout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router