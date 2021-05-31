import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import axios from 'axios';

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/reset.scss';
import '@/assets/styles/common.scss';
import '@/assets/styles/ui.scss';
import '@/assets/iconfont/iconfont.css';
import '@/assets/iconfont/iconfont.js';

Vue.use(ElementUI);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
