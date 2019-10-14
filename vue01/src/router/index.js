import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import City from  '../components/ComsL/Citys'
import j1 from '../components/ComsL/J1L'
import Foods from '../components/ComsL/Foods'
import Shangjia from '../components/ComsL/Shangjia'
import FoodClass from  '../components/ComsL/foodsClass'
import Mine from '../components/zhang/my2342_z'
import zhanghuxinxi from '../components/zhang/zhanghuxinxi_z'
import MyYe from '../components/zhang/myYue_z'
import MyYouhui_z from  '../components/zhang/myYouhui_z'
import MyJifen_z from  '../components/zhang/myJifen_z'
import Myhuiyuan_z from  '../components/zhang/myHuiyuan_z'
import ServerCenter from '../components/ComJ/ServerCenter'
import  DownLoad from  '../components/ComJ/ElmDownloading'
import SuperDes from  '../components/ComJ/SuperDes'
import SearchFood from '../components/ComsL/search'
import Duihuanhuiyuan from  '../components/zhang/duihuanhuiyuan'
export default new Router({
  routes: [
    {path: '/', component: City},
    {path: '/jump', component: j1},
    {path:'/foods',component:Foods},
    {path:'/shangjia',component:Shangjia},
    {path:'/fclass',component:FoodClass},
    {path:'/mine',component:Mine},
    {path:'/mima_z',component:zhanghuxinxi},
    {path:'/myYue_z',component:MyYe},
    {path:'/myYouhui_z',component:MyYouhui_z},
    {path:'/myJifen_z',component:MyJifen_z},
    {path:'/Myhuiyuan_z',component:Myhuiyuan_z},
    {path:'/ServerCenter',component:ServerCenter},
    {path:'/DownLoad',component:DownLoad},
    {path:'/super',component:SuperDes},
    {path:'/search',component:SearchFood},
    {path:'/duihuanhuiyuan',component:Duihuanhuiyuan}
  ]
})
