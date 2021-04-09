<template>
  <Magic style="z-index: -1;position: absolute;width: 100%;height: 100%"></Magic>
  <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/Technology">&nbsp;首 页&nbsp;</el-menu-item>
    <el-menu-item index="/Index">&nbsp;登 录&nbsp;</el-menu-item>
    <el-menu-item index="4"><a>订单管理</a></el-menu-item>
    <el-menu-item index="5"><a>订单管理</a></el-menu-item>
    <el-submenu index="2" style="float: right">
      <template #title><el-avatar :size="50" :src="circleUrl"></el-avatar></template>
      <el-menu-item index="2-1">个人信息</el-menu-item>
      <el-menu-item index="2-2">消息中心</el-menu-item>
      <el-menu-item index="2-3">退出</el-menu-item>
      <el-submenu index="2-4">
        <template #title>选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>

  </el-menu>
  <router-view></router-view>
</template>

<script>
import Magic from '@/components/Magic'
export default {
  name: 'App',
  components: { Magic },
  data () {
    const screenHeight = window.innerHeight
    return {
      circleUrl: 'http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640',
      activeIndex: '1',
      screenHeight
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    resize () {
      this.screenHeight = window.innerHeight
      console.log('this.screenHeight: ' + this.screenHeight)
    }
  },
  mounted () {
    addEventListener('resize', this.resize)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style>
html,body{
  cursor: url('./assets/cursor/normal.png'),auto;
}
.el-container {
  height: 100%;
}

.el-header {
  background-color: #A0EEE1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
