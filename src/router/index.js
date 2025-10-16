import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import QuizLayout from '../layouts/QuizLayout.vue'
import MapLayout from '../layouts/MapLayout.vue'

const routes = [
  { path: '/', name: 'home', component: MainLayout },
  { path: '/quiz', name: 'quiz', component: QuizLayout },
  { path: '/maps', name: 'maps', component: MapLayout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router