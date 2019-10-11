import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import City from  '../components/ComsL/Citys'
import j1 from '../components/ComsL/J1L'
import Foods from '../components/ComsL/Foods'
import Shangjia from '../components/ComsL/Shangjia'
import Test from  '../components/ComlJ/test'
export default new Router({
  routes: [
    {path: '/', component: City},
    {path: '/jump', component: j1},
    {path:'/foods',component:Foods},
    {path:'/shangjia',component:Shangjia},
    {path:'/test',component:Test},
  ]
})
