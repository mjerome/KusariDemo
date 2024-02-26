import { createRouter, createWebHistory } from 'vue-router'
import BarView from '../views/BarView.vue'

const LineView = () => import('../views/LineView.vue')
const ChartView = () => import('../views/ChartView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        // the function receives the target route as the argument
        // a relative location doesn't start with `/`
        // or { path: 'profile'}
        name: 'bar'
      }
    },
    {
      path: '/customer/yahoo/bar',
      name: 'bar',
      component: BarView
    },
    {
      path: '/customer/yahoo/line',
      name: 'line',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LineView
    },
    {
      path: '/customer/yahoo/chart',
      name: 'chart', 
      component: ChartView
    }
  ]
})

export default router
