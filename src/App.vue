<template>
  <!-- 要缓存城市组件和电影组件，keep-alive就要加在两组件的父组件（包裹组件）上 -->
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import '@/assets/styles/reset.styl'
//根组件引入过滤器，全局既可以用
import 'utils/filter'

export default {
}
</script>
