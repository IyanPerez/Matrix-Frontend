import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeerDetails from '../views/BeerDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/beer/:id',
      name: 'beerDetails',
      component: BeerDetails,
      props: true
    }
  ]
})

export default router
