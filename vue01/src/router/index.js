import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import City from  '../components/ComsL/Citys' //城市
import j1 from '../components/ComsL/J1L' //根据选择城市搜索关键字
import Foods from '../components/ComsL/Foods' //商品首页
import Shangjia from '../components/ComsL/Shangjia' //商家首页
import FoodClass from  '../components/ComsL/foodsClass' //商品分类
//登录后 个人中心
import Mine from '../components/zhang/my2342_z' //个人中心 登录后
import zhanghuxinxi from '../components/zhang/zhanghuxinxi_z' //账户信息
import MyYe from '../components/zhang/myYue_z' //余额
import MyYouhui_z from  '../components/zhang/myYouhui_z' //优惠券
import MyJifen_z from  '../components/zhang/myJifen_z' //积分
import Myhuiyuan_z from  '../components/zhang/myHuiyuan_z' //会员
import ServerCenter from '../components/ComJ/ServerCenter' //服务中心
import DownLoad from  '../components/ComJ/ElmDownloading' //下载
import SuperDes from  '../components/ComJ/SuperDes' //会员描述
import SearchFood from '../components/ComsL/search' //搜索美食
import Duihuanhuiyuan from  '../components/zhang/duihuanhuiyuan' //兑换会员
import TuiJian from '../components/zhang/TuiJianYouJiang' //推荐有奖
import ShangpinXQ from  '../components/ComsL/shangpinxiangqig' //商品详情
import ProAddress from '../components/ComJ/ProAddress' //新增地址
import Add from '../components/ComJ/NewAddress' //添加新增地址
import SearchAddress from '../components/ComJ/SearchAddress' //搜索地址
import NoLogin from '../components/ComJ/LoginPassword' //未登录时跳转登录注册页面
import Lishihongbao from  '../components/zhang/LiShihongbao' //历史红包
import UserName from '../components/ComJ/UserName' //修改用户名
import Reset from  '../components/ComJ/ResetPassword' //修改密码
import Duihuanhongbao from  '../components/ComsL/DuiHuanHB'//兑换红包
import Qrdingdan from  '../components/zhang/QRdingdan_z' //确认订单
import Tianjiad from '../components/ComsL/Tianjiadizhi' //支付时添加地址
import Xinzengdz from  '../components/ComsL/xinzengdz' //添加地址
import ShopDetail from '../components/ComJ/ShopDetail'
import Foodsafe from  '../components/ComJ/FoodSafe' //视频安全
import Buyhy from '../components/ComJ/Pay'  //支付倒计时
 export default new Router({
  routes: [
    {path: '/', component: City},    //城市定位以及选择
    {path: '/jump', component: j1},  //选择城市后跳转至首页
    {path:'/foods',component:Foods}, //商品首页
    {path:'/shangjia',component:Shangjia}, // 商家
    {path:'/fclass',component:FoodClass},//商品分类
    {path:'/mine',component:Mine}, //我的中心
    {path:'/zhanghuxinxi',component:zhanghuxinxi},//账户信息
    {path:'/myYue_z',component:MyYe},//余额
    {path:'/myYouhui_z',component:MyYouhui_z},//优惠
    {path:'/myJifen_z',component:MyJifen_z},//积分
    {path:'/Myhuiyuan_z',component:Myhuiyuan_z},//会员
    {path:'/ServerCenter',component:ServerCenter},//个人中心
    {path:'/DownLoad',component:DownLoad},//下载
    {path:'/super',component:SuperDes},//会员描述
    {path:'/search',component:SearchFood},//搜索商品
    {path:'/duihuanhuiyuan',component:Duihuanhuiyuan},//兑换会员
    {path:'/tuijian',component:TuiJian},//推荐有奖
    {path:'/shangpinXQ',component:ShangpinXQ},//商品详情
    {path:'/ProAddress',component:ProAddress},//地址
    {path:'/Add',component:Add}, //添加地址
    {path:'/searchAddress',component:SearchAddress},//搜索地址
    {path:'/noLogin',component:NoLogin},//登录界面
    {path:'/lishihongbao',component:Lishihongbao},//历史红包
    {path:'/UserName',component:UserName},//用户名
    {path:'/reset',component:Reset}, //重置用户名
    {path:'/duihuanhongbao',component:Duihuanhongbao},//兑换红包
    {path:'/qrdingdan',component:Qrdingdan},//确认订单
    {path:'/tianjiad',component:Tianjiad}, //添加地址
    {path:'/xinzengdz',component:Xinzengdz},//新增地址
    {path:'/ShopDetail',component:ShopDetail},//
    {path:'/foodsafe',component:Foodsafe},//食品安全
    {path:'/buyhy',component:Buyhy}//支付计时
  ]
})
