// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入axios
import Axios from 'axios'
//引入路由
import VueRouter from 'vue-router'



//使用样式
Vue.use(ElementUI);
//修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
// Axios.defaults.withCredentials = true;
Vue.prototype.$axios = Axios
//使用路由
Vue.use(VueRouter)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
