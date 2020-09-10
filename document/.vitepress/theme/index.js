import './styles/vars.css';
import './styles/layout.css';
import './styles/code.css';
import './styles/custom-blocks.css';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
const theme = {
  Layout,
  NotFound,
  enhanceApp({
    app,
    router,
    siteData
  }) {
  }

};
export default theme;