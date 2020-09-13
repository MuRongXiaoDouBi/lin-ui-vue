import Icon from './src/index';
import { App } from 'vue'
/* istanbul ignore next */
Icon.install = function (app: App) {
    app.component(Icon.name, Icon);
};

export default Icon;
