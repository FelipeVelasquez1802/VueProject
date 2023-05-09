
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./views/HomeView.vue')
const Products = () => import('./views/ProductsView.vue')

const routes = [
  {
    path: '/',
    redirect: 'Home'
  },
  { 
    path: '/home', 
    name: 'Home', 
    component: Home 
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;