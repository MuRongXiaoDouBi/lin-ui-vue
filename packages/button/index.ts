import Button from './src/index.vue'
import { App } from 'vue'
/* istanbul ignore next */
Button.install = function (app: App) {
  app.component(Button.name, Button)
}

export default Button
