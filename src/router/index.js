import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import Sort from '@/pages/Sort/sort'
import Car from '@/pages/Car/car'
import Mine from '@/pages/Mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/Home',name:'Home',component:Home,children:[
    		
    ]},
    {path:'/Sort',name:'Sort',component:Sort },
    {path:'/Car',name:'Car',component:Car },
    {path:'/Mine',name:'Mine',component:Mine }
  ]
})
