import Price from './src/index'
import { App } from 'vue'
/* istanbul ignore next */
Price.install = function (app: App) {
  app.component(Price.name, Price)
}

export default Price
