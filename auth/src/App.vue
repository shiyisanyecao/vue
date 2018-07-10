<template>
  <div id="app">
    <router-link to="/">/about</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/dashboard">/dashboard</router-link>
    <router-link to="/login" v-if="auth.ok">/login</router-link>
    <router-link to="/logout" v-if="!auth.ok">/logout</router-link>
    <!-- login 已完成 再来login 跳转到首页 -->
    <!-- logout 退出 清空 -->
    <router-view/>
  </div>
</template>

<script>
import auth from '@/auth.js'
export default {
  name: 'App',
  data () {
    return {
      auth: auth,
      login: true
    }
  },
  computed:{
    isLogin () {
      if(auth.loggedIn()) {
        this.login = false;
      } else {
        this.login = true;
      }
      console.log(this.login)
      return this.login;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
