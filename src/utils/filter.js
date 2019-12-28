import Vue from 'vue'
// 将图片地址中w.h字符串替换制定的尺寸你 格式
Vue.filter('replaceWH', (value, wh) => {
  return value.replace('w.h', wh)
})