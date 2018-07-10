<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import header from '@/components/header'
const response = require('./common/data/seller.json')
const ERR_OK = 0;
export default {
  name: 'App',
  data () {
    return {
      seller: {
        id: (()=>{
          let queryParam = urlParse();
          return queryParam.id;
        })()
      }
    }
  },
  created() {
    if(response.errno == ERR_OK) {
      this.seller = Object.assign({},this.seller,response.data);
    }
  },
  components: {
    'v-header':header
  }
}
</script>

<style>

</style>
