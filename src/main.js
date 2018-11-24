import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
//路由
import VueRouter from 'vue-router'
import router from './assets/js/router.js'

Vue.use(Mint)
Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
