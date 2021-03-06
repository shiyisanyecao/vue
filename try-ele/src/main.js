// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import seller from '@/components/seller'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
const routes = [
  {
    path: '/',
    comonent: goods
  },{
    path: '/goods',
    component: goods
  },{
    path: '/ratings',
    component: ratings
  },{
    path: '/seller',
    component: seller
  }
];
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
