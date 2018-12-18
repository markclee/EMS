// 此文件是 入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import MyAxios from '@/assets/js/myaxios.js'
import '@/assets/css/reset.css'

// 引入elementui
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// Vue.prototype.axios = axios
// 将axios作为vue的插件使用
Vue.use(MyAxios)
// 关闭生产环境中的警告和提示
Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建了一个vue的实例
new Vue({
  el: '#app',
  router, // 注册路由
  components: { // 注册子组件
    App
  },
  template: '<App/>' // 使用了组件,单标签形式使用,将App里边的内容渲染
})
