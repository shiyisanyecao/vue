<template>
  <div>
    <comment-form @addComment="addComment" />
    <comment-list :list="list"/>
    <pagination :totalCount="totalCount" :currentPage="currentPage" 
        :pagesize="pagesize" @turnPage="turnPage"/>
  </div>
</template>
<script>
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Pagination from './Pagination'
export default {
  data () {
    return {
      list: [],
      pagesize: 3,
      totalData: [],
      totalCount: 0,
      currentPage: 1
    }
  },
  components: {
    CommentList,
    CommentForm,
    Pagination
  },
  methods: {
    turnPage (curr) {
        console.log(curr);
        this.currentPage = curr;
        this.list = this.totalData.slice(this.pagesize*(curr-1),this.pagesize*curr);
    },
    addComment (msg) {
      console.log(msg)
      this.totalData.unshift( {text:msg} )
      this.totalCount = this.totalData.length;
      if (this.totalCount <= this.pagesize) {
        this.list = this.totalData
      }else {
        this.list = this.totalData.slice(this.totalCount-this.pagesize)
      }
      this.currentPage = 1;
      // this.list.reverse();
    }
  }
}
</script>
<style>

</style>


