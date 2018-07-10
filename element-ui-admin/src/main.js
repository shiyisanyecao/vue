// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import {currency} from './currency'
// webpack 让css也可以像js一样被引入 让一切静态资源皆可引入
import App from './App'
Vue.use(ElementUI)
// import './mock'
Vue.filter('currency',currency)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
