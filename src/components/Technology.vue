<template>
  <el-container style="min-height: 600px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-submenu :index="index" v-for="(item,index) in items" :key="index">
          <template #title><i class="el-icon-message"></i>{{ item.text }}</template>
          <el-menu-item-group>
            <el-menu-item :index="index +'-'+ indexIn" @click="changePage(indexIn+1)" v-for="(subItem,indexIn) in item.items" :key="indexIn">
              {{ subItem.title }}
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu :index="index +'-'+ indexIn +'-'+ indexIn" v-for="(type,indexIn) in item.subItem" :key="indexIn">
            <template #title>{{ type.title }}</template>
            <el-menu-item :index="index +'-'+ indexIn +'-'+ indexPaper" v-for="(subType,indexPaper) in type.paper" :key="indexPaper">{{ subType.title }} </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main style="overflow: hidden; overflow-y: auto;">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Technology',
  data () {
    const items = [
      {
        backgroundColor: '#D24D57',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/git-logo.png',
        text: 'Git',
        subItem: [
          {
            title: '并发',
            paper: [
              {
                headerUrl: 'http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640',
                title: 'test1',
                author: 'William',
                date: '2019-09-20 11:50',
                tag: { 框架: '#82c8a0' },
                src: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/java/spring%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC%E5%92%8C%E5%88%87%E9%9D%A2.md'
              },
              {
                headerUrl: 'http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640',
                title: 'test2',
                author: 'William',
                date: '2019-10-03 9:10',
                tag: { 并发: '#D24D57' },
                src: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/java/%E9%AB%98%E5%B9%B6%E5%8F%91%E6%9E%B6%E6%9E%84%E6%96%B9%E6%A1%88.md'
              }
            ]
          }
        ],
        items: [
          {
            headerUrl: 'http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640',
            title: 'spring控制反转和切面',
            author: 'William',
            date: '2019-09-20 11:50',
            tag: { 框架: '#82c8a0' },
            src: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/java/spring%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC%E5%92%8C%E5%88%87%E9%9D%A2.md'
          },
          {
            headerUrl: 'http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640',
            title: '高并发架构方案',
            author: 'William',
            date: '2019-10-03 9:10',
            tag: { 并发: '#D24D57' },
            src: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/java/%E9%AB%98%E5%B9%B6%E5%8F%91%E6%9E%B6%E6%9E%84%E6%96%B9%E6%A1%88.md'
          }
        ]
      },
      {
        backgroundColor: '#A0EEE1',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/java-logo.jpeg',
        text: 'Java'
      },
      {
        backgroundColor: '#3390FF',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/mysql-logo.jpeg',
        text: 'Mysql'
      },
      {
        backgroundColor: '#b0c4de',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/redis-logo.jpeg',
        text: 'Redis'
      },
      {
        backgroundColor: '#fa5a5a',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/elasticsearch-logo.jpg',
        text: 'Elasticsearch'
      },
      {
        backgroundColor: '#f0d264',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/kafka-logo.png',
        text: 'Kafka'
      },
      {
        backgroundColor: '#82c8a0',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/linux-logo.png',
        text: 'Linux'
      },
      {
        backgroundColor: '#7fccde',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/weChat-logo.jpg',
        text: 'WeChat'
      },
      {
        backgroundColor: '#6698cb',
        logoImg: 'https://wefight-1301775995.cos.ap-nanjing.myqcloud.com/kibana-logo.jpeg',
        text: 'Kibana'
      }
    ]
    return {
      items: items
    }
  },
  methods: {
    changePage (id) {
      this.$router.push(`/paper/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
