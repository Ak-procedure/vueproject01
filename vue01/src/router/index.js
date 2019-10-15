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
import TuiJian from '../components/zhang/TuiJianYouJiang'
import ShangpinXQ from  '../components/ComsL/shangpinxiangqig'
import ProAddress from '../components/ComJ/ProAddress'
import Add from '../components/ComJ/NewAddress'
import SearchAddress from '../components/ComJ/SearchAddress'
import NoLogin from '../components/ComsL/NoLogin'
import Lishihongbao from  '../components/zhang/LiShihongbao'
import UserName from '../components/ComJ/UserName'
import Reset from  '../components/ComJ/ResetPassword'
import Duihuanhongbao from  '../components/ComsL/DuiHuanHB'
import Qrdingdan from  '../components/zhang/QRdingdan_z'
import Tianjiad from '../components/ComsL/Tianjiadizhi'
import Xinzengdz from  '../components/ComsL/xinzengdz'
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
    {path:'/duihuanhuiyuan',component:Duihuanhuiyuan},
    {path:'/tuijian',component:TuiJian},
    {path:'/shangpinXQ',component:ShangpinXQ},
    {path:'/ProAddress',component:ProAddress},
    {path:'/Add',component:Add},
    {path:'/searchAddress',component:SearchAddress},
    {path:'/noLogin',component:NoLogin},
    {path:'/lishihongbao',component:Lishihongbao},
    {path:'/UserName',component:UserName},
    {path:'/reset',component:Reset},
    {path:'/duihuanhongbao',component:Duihuanhongbao},
    {path:'/qrdingdan',component:Qrdingdan},
    {path:'/tianjiad',component:Tianjiad},
    {path:'/xinzengdz',component:Xinzengdz}
  ]
})
