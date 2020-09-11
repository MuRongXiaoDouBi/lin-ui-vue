import LButton from './src/index';
import { App } from 'vue'
/* istanbul ignore next */
LButton.install = function (app: App) {
    app.component(LButton.name, LButton);
};

export default LButton;
