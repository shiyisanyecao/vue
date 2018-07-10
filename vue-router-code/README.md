Vue 用于开发SPA 路由接管一切

页面 /views 跟 router url 相匹配

router-link 取代a VueRouter提供的组件
Vue.use(VueRouter提供的组件) 全局

route 前端路由 区分由ngnix apache 等配置的后端路由
前端路由解决的是SPA 
url 切换 页面不会重新加载

一 history API pushState() onPopState() 移除之前的组件 更新新的组件
它的格式和后端url是一样的 /foo
缺点：兼容性 

二 hash模式
在url后面加描点 ie8以后就不会刷新页面了 同样可以得到事件
同一个页面 不同的状态(对于url)
