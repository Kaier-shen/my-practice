import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import axios from 'axios';
import plTable from 'pl-table';

import 'element-ui/lib/theme-chalk/index.css';
import 'pl-table/themes/index.css'; // 引入样式（必须引入)，vuecli3.0不需要配置，cli2.0请查看webpack是否配置了url-loader对woff，ttf文件的引用,不配置会报错哦
import 'pl-table/themes/plTableStyle.css'; // 默认表格样式很丑 引入这个样式就可以好看啦（如果你不喜欢这个样式，就不要引入，不引入就跟ele表格样式一样）
import '@/assets/styles/reset.scss';
import '@/assets/styles/common.scss';
import '@/assets/styles/ui.scss';
import '@/assets/iconfont/iconfont.css';
import '@/assets/iconfont/iconfont.js';

Vue.use(ElementUI);
Vue.use(plTable);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
