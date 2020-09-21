import { createRouter, createWebHashHistory } from 'vue-router'
import button from '../pages/button/index'

const routes = [
  {
    path: '/button',
    component: button
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
