import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/AdminView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },

  {
    path: '/product/:prodID',
    name: 'product',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleProductView.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
