import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Calc1View from '../views/Calc1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calc1',
      name: 'calculator1',
      component: Calc1View
    },
    {
      path: '/calc2',
      name: 'calculator2',
      component: HomeView
    }
  ]
})

export default router
