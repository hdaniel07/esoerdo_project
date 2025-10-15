import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import QuizLayout from '../layouts/QuizLayout.vue'

const routes = [
  { path: '/', name: 'home', component: MainLayout },
  { path: '/quiz', name: 'quiz', component: QuizLayout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
