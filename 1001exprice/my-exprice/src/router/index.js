import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyHome from '@/components/MyHome'
import Home from '@/components/Home'
import Detail from '@/components/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myhome',
      name: 'MyHome',
      component: MyHome
    },

    {
      path: '/home',
      component: Home,
      meta: {
        title: '商品主页'
      }
    },
    {
      path: '/detail',
      component: Detail,
      children: [
      ]
    }

  ]
})
