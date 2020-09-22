import { createRouter, createWebHashHistory } from 'vue-router'
import button from '../pages/button/index'
import price from '../pages/price/index'

const routes = [
  {
    path: '/button',
    component: button
  },
  {
    path: '/price',
    component: price
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
