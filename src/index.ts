import Button from './components/Button/index'
import { App } from 'vue'
const components = [
    Button
]

const install = function (Vue: App, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

export {
    Button
}

export default {
    install
}