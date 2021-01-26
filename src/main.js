import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import axios from 'axios';

import * as fundebug from 'fundebug-javascript';
import fundebugVue from 'fundebug-vue';
import 'fundebug-revideo';
fundebug.init({
  apikey: '5509fcaedaee0ab5fe0a2941619f18c15b6a75b7270da24eec090658bb7eaf84'
});
fundebugVue(fundebug, Vue);

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/reset.scss';
import '@/assets/styles/common.scss';
import '@/assets/styles/ui.scss';

Vue.use(ElementUI);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
