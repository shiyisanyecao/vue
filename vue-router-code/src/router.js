import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home'
import Foo from '@/views/Foo'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },{
            path: '/foo',
            component: Foo
        }
    ]
})
