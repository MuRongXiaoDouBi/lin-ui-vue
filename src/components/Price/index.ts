import Price from './src/index'
import { defineComponent, App } from 'vue'
const component = defineComponent(Price)
/* istanbul ignore next */
component.install = function (app: App) {
  app.component(component.name, component)
}

export default component
