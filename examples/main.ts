import { createApp } from 'vue';
import router from './router'
import './assets/css/reset.css'
import App from './App.vue';
import LinUI from '../src/index'
const app = createApp(App)
app.use(LinUI)
app.use(router)
app.mount('#app');
//# sourceMappingURL=main.js.map
