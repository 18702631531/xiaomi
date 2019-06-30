import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import Sort from '@/pages/Sort/sort'
import Car from '@/pages/Car/car'
import Mine from '@/pages/Mine/mine'

import homeBiyeJi from '@/components/homeBiyeJi'
import homeCompute from '@/components/homeCompute'
import homeJiadian from '@/components/homeJiadian'
import homePhone from '@/components/homePhone'
import homeShenghuo from '@/components/homeShenghuo'
import homeTuijian from '@/components/homeTuijian'
import homeTV from '@/components/homeTV'
import homeZhineng from '@/components/homeZhineng'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Home
    },
    {path:'/Home',name:'Home',component:Home,children:[
    		{path:'homeBiyeJi',name:'homeBiyeJi',component:homeBiyeJi},
    		{path:'homeCompute',name:'homeCompute',component:homeCompute},
    		{path:'homeJiadian',name:'homeJiadian',component:homeJiadian},
    		{path:'homePhone',name:'homePhone',component:homePhone},
    		{path:'homeShenghuo',name:'homeShenghuo',component:homeShenghuo},
    		{path:'homeTuijian',name:'homeTuijian',component:homeTuijian},
    		{path:'homeTV',name:'homeTV',component:homeTV},
    		{path:'homeZhineng',name:'homeZhineng',component:homeZhineng}
    ]},
    {path:'/Sort',name:'Sort',component:Sort },
    {path:'/Car',name:'Car',component:Car },
    {path:'/Mine',name:'Mine',component:Mine }
  ]
})
