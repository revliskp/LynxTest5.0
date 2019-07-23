import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home/App.vue'
import Login from '@/pages/Login/App.vue'
import Register from '@/pages/Register/App.vue'
import Userlist from '@/pages/Userlist/App.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {title: 'Home'},
      component: Home
    },
    {
      path: '/login',
      name: 'Log in',
      meta: {title: 'Log in'},
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      meta: {title: 'Register'},
      component: Register
    },
    {
      path: '/userlist',
      name: 'Userlist',
      meta: {title: 'Userlist'},
      component: Userlist
    }
  ]
})
