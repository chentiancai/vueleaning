/*

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

*/

import Vue from 'vue'
import VueRouter from 'vue-router'

/*引入资源请求插件*/
import VueResource from 'vue-resource';

/*
import Home from '../pages/home'
*/
import Detail from '../pages/goodsDetail'



/*使用VueResource插件*/
Vue.use(VueResource);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/detail',
    component: Detail,
    children: [
    ]
  }
]
export default new VueRouter({
  routes
})
