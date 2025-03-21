import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const token = localStorage.getItem('access_token')
  if (requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
