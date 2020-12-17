import Button from '@lin-ui-vue/button'
import { App } from 'vue'
const components = [
  Button
]

const install = function (Vue: App) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  Button
}

export default {
  install
}