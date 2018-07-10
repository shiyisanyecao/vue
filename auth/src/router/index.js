import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth.js'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
Vue.use(Router)
const outAuth = (to,from,next) => {
  if(auth.loggedIn()) {
    next({
      path: '/logout',
      query: {
        redirect: to.fullPath
      }
    })
  }
}
const inAuth = (to,from,next) => {
  if(!auth.loggedIn()){
    next({
      path:'/login',
      query: {
        redirect: from.fullPath
      }
    })
  }
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/about'
    },{
      path: '/about',
      component: About
    },{
      path: '/dashboard',
      component: Dashboard
    },{
      path: '/login',
      component: Login,
      afterEnter: outAuth
    },{
      path: '/logout',
      component: Logout,
      // beforeEnter: inAuth
    }
  ]
})
