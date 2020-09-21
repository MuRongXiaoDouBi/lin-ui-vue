import Button from './src/index';
import { defineComponent } from "vue";
import { App } from 'vue'
const component = defineComponent(Button)
/* istanbul ignore next */
component.install = function (app: App) {
    app.component(component.name, component);
};

export default component;
