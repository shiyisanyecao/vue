<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list/>
    <hr>
    <shopping-cart></shopping-cart>
    <!-- <ele-alert title="成功提示的方案" type="success" v-if="hasErr" @close="doAlertClose"></ele-alert> -->
    <!-- <article-table></article-table> -->
    <!-- <comment></comment> -->
    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="女"></ele-radio>
      <ele-radio label="男"></ele-radio>
    </ele-radio-group> -->
    <!-- <login /> -->
    <!-- <p v-html="content"></p> -->
    <!-- <jsonEditor-demo></jsonEditor-demo> -->
    <!-- <markdown-demo></markdown-demo> -->
  </div>
</template>

<script>
// @ 表示alias 地址短连接 在哪里都指向src 让地址引入更轻松
import EleAlert from '@/components/EleAlert'
import ArticleTable from '@/views/ArticleTable'
import Comment from '@/components/Comment'
import Login from '@/views/Login'
import EleRadioGroup from '@/components/EleRadioGroup'
import EleRadio from '@/components/EleRadio'
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'

// import JsonEditorDemo from '@/views/components-demo/jsonEditor'
// import MarkdownDemo from '@/views/components-demo/markdown'
export default {
  name: 'App',
  data () {
    return {
      sex: 0,
      content: '<span>美团挂了 还有UC</span>',
      hasErr: false
    }
  },
  methods: {
    getList () {
      
    },
    doAlertClose() {
      console.log('close')
    }
  },
  mounted () {
    setTimeout(() => {
      this.hasErr = true
    },2000)
    
  },
  created () {
    
  },
  components: {
    // Login,
    // EleRadioGroup,
    // EleRadio,
    // Comment,
    // EleAlert,

    ProductList,
    ShoppingCart
    // ArticleTable
    // JsonEditorDemo,
    // MarkdownDemo
  }
}
</script>

<style lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

