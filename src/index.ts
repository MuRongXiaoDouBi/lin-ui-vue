import LButton from './components/Button'
import { App } from 'vue'
const components = [
    LButton
]

const install = function (Vue: App, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};
// @ts-ignore: Unreachable code error
if (typeof window !== 'undefined' && window.Vue) {
    // @ts-ignore: Unreachable code error
    install(window.Vue);
}

export default {
    LButton
}