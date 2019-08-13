import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Goods from '@/pages/goods/Goods'
import Foods from '@/pages/foods/Foods'

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
      path: '/foods',
      name: 'Foods',
      component: Foods
    }
  ]
})
