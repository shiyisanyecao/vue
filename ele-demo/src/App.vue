<template>
  <div id="app">
    <!-- vue内置组件 transition keep-alive -->
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
// name + enter 进入的那一瞬间
@import './style/common'
// .router-fade-enter 
// .router-fade-enter-active 会在进入的整个过程里 完全进入之后会移除这个类名
.router-fade-enter-active,.router-fade-leave-active {
  transition: opacity .3s
}
.router-fade-enter,.router-fade-leave-active {
  opacity: 0
}
</style>
