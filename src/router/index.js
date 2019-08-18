import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Goods from '@/pages/goods/Goods'
import Foods from '@/pages/foods/Foods'
import Login from '@/pages/login/Login'
import List from '@/pages/list/List'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goods/:id',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/foods/:id',
      name: 'Foods',
      component: Foods
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list/:keyword',
      name: 'List',
      component: List
    }
  ]
})
