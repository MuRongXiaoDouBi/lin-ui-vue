import { createRouter, createWebHashHistory } from 'vue-router'
import button from '../pages/button/index'
import icon from '../pages/icon/index'

const routes = [
  {
    path: '/button',
    component: button
  },
  {
    path: '/icon',
    component: icon
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
