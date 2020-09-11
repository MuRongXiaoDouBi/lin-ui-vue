import { createApp } from 'vue';
import App from './App.vue';
import LinUI from '../src/index'
const app = createApp(App)
for (let key in LinUI) {
    app.use(LinUI[key])
}
app.mount('#app');
//# sourceMappingURL=main.js.map