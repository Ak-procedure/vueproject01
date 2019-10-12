<template>
    <div id="mine_z">
      <div class="myde_z">
      <router-link :to="{}" class="pointLeft_z"><</router-link>
      <span class="text_z">我的</span>
      </div>
      <div class="xian_z"></div>
      <div id="headImg_z">
        <router-link :to="{path:'/mima_z',query: {msg:'密码登录'}}">
          <p class="bgcImg"></p>
          <span class="putIn01_z">{{2342}}</span>
          <span class="putIn02_z">暂无绑定手机号</span>
          <span class="pointRight_z">></span>
        </router-link>
      </div>
      <div class="zero_z">
        <router-link :to="{path:'/myYue_z',query: {msg:'我的余额'}}" class="balance_z">
          <span class="num01_z">{{0.00}}</span>元
          <p>我的余额</p>
        </router-link>

           <router-link :to="{path:'/myYouhui_z',query: {msg:'我的优惠'}}" class="preferential_z">
          <span class="num02_z">{{0}}</span>个
          <p>我的优惠</p>
        </router-link>

          <router-link :to="{path:'/myJifen_z',query: {msg:'我的积分'}}" class="integral_z">
          <span class="num03_z">{{0}}</span>元
          <p>我的积分</p>
        </router-link>

      </div>

      <div class="dingdan_z">
        <router-link :to="{}">
          <p class="hr_z">
            <span>我的订单</span>
            <span class="you_z">></span>
          </p>
        </router-link>

        <router-link :to="{}">
          <p class="hr_z">
            <span>积分商城</span>
            <span class="you_z">></span>
          </p>
        </router-link>

        <router-link :to="{path:'/Myhuiyuan_z'}">
          <p class="hr_z">
            <span >饿了么会员卡</span>
            <span class="you_z">></span>
          </p>
        </router-link>

      </div>
      <div class="dingdan_z">
        <router-link :to="{path:'/ServerCenter'}">
          <p class="hr_z">
            <span>服务中心</span>
            <span class="you_z">></span>
          </p>
        </router-link>
        <router-link :to="{path:'/DownLoad'}">
          <p class="hr_z">
            <span>下载饿了么APP</span>
            <span class="you_z">></span>
          </p>
        </router-link>
      </div>

    </div>

</template>

<script>
    export default {
        name: "my2342_z"
    }
</script>

<style scoped>

  #mine_z {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .myde_z {
    width: 100%;
    height: 8%;
    background: cornflowerblue;
    color: white;
    font-size: 20px;
  }
  .pointLeft_z {
    color: white;
    margin-left: 3%;
    margin-top: 0;
    font-size: 35px;
  }
  .text_z {
    margin-left: 35%;
  }
  .xian_z {
    border-bottom: 1px solid #f1f1f1;

  }
  #headImg_z {
    background: cornflowerblue;
    color: white;
    width: 100%;
    height: 100px;
    position: relative;
  }
  #headImg_z>a,.zero_z>a {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .putIn01_z {
    font-weight: 700;
    font-size: .8rem;
    color: #fff;
    position: absolute;
    left: 30%;
    top: 20%;
  }
  .putIn02_z {
    display: inline-block;
    font-size: .57333rem;
    color: #fff;
    position: absolute;
    left: 30%;
    top: 60%;
  }
  .bgcImg {
    height: 70px;
    width:70px ;
    border-radius: 50%;
    background-color: beige;
    position: absolute;
    left: 15px;
    top: 15px;
  }
  .pointRight_z {
    position: absolute;
    top: 25%;
    right: 0;
    font-size: 40px;
    color: white;
  }
  .zero_z {
    width: 100%;
    background:white;
    display: flex;
  }
  .zero_z>a{
    width: 33%;
    height: 80px;
    text-align: center;
    padding-top: 20px;
    border-right: 1px solid #f2f2f2;
  }
  .num01_z {
    font-size: 30px;
    font-weight: 700;
    color: #f90;
  }
  .num02_z {
    font-size: 30px;
    font-weight: 700;
    color: #ff5f3e;
  }
  .num03_z {
    font-size: 30px;
    font-weight: 700;
    color: #6ac20b;
  }
  .dingdan_z {
    background: white;
    margin-top: 10px;
  }
  .hr_z {
    font-size:20px;
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;
  }
  .you_z {
    float: right;
    font-size: 25px;
    color: #999;
  }
</style>
