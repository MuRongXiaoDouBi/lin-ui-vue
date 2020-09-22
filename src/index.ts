import Button from './components/Button/index'
import Price from './components/Price/index'

import { App } from 'vue'
const components = [
  Button,
  Price
]

const install = function (Vue: App) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  Button,
  Price
}

export default {
  install
}