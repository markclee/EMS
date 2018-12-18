// 注册路由文件
import Vue from 'vue'
import Router from 'vue-router'
import UseElement from '@/components/useElement/useElement.vue'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: { name : 'home' }},
    {path: '/useElement', component: UseElement},
    {name: 'login', path: '/login', component: Login},
    {name: 'home', path: '/home', component: Home, children: [
      {name:'users', path: '/users', component : Users}
    ]}
  ]
})
