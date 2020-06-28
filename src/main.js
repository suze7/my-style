/*
 * @Author: szx
 * @Date: 2020-03-16 22:42:54
 * @LastEditors: 苏泽雄
 * @LastEditTime: 2020-05-03 15:18:48
 * @Description: main.js
 * @FilePath: \my-style\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/base.css'
import less from 'less';
Vue.use(less);
import './assets/style/style.less';
import commonJS from './js';
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(commonJS);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
