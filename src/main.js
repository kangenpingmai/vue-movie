import Vue from 'vue'
import App from './App.vue'

import router from './router'

import VueProgressBar from 'vue-progressbar'

import store from './store/'

const options = {
  color: '#faaf22',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '.5s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
