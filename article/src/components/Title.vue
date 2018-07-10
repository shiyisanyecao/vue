<template>
    <div class="detail">
        <div v-for="detail in details" :key="detail.id">
            <div>{{detail.det}}</div>
            <div>{{detail.dec}}</div>
            <div>{{detail.desc}}</div>
            <div>{{detail.time}}小时前</div>
            <div>{{detail.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
        "details": [
        {
            "title": "为何我们要用react来写小程序-Taro诞生记",
            "time": "5",
            "desc": "React.js",
            "dec": "凹凸实验室",
            "det": "专栏"
        },
        {
            "title": "了解一些额外知识 让前端开发锦上添花",
            "time": "14",
            "desc": "HTML",
            "dec": "守候i",
            "det": "专栏"
        },
        {
            "title": "Webpack 4配置最佳实践",
            "time": "12",
            "desc": "webpack",
            "dec": "蚂蚁金服",
            "det": "专栏"
        }
      ]
    } 
  },
//   mounted () {
//       util.request({
//           url: `https://www.easy-mock.com/mock/5b3109d4a682e4291a2701b3/#!method=get`,
//           data: {
//               details: [

//               ]
//           }
//       })
//   }
}
</script>