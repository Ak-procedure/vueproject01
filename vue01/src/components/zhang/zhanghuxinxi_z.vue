<template>
  <div id="mine_z">
    <div class="myde_z">
      <span @click="back" class="pointLeft_z"><</span>
      <span class="text_z">账户信息</span>
    </div>

    <div class="profile-info">

      <router-link :to="{}"  class="info-router">
        <div class="headportrait">
          <input type="file" class="profileinfopanel-upload">
          <h2>头像</h2>
          <div class="headportrait-div">
          <span class="pointR_z">
            <img src="//elm.cangdu.org/img/default.jpg" class="headportrait-div-top">></span>
          </div>
        </div>
      </router-link>

      <router-link :to="{path:'/UserName'}"  class="info-router">
        <div class="headportrait">
          <h2>用户名</h2>
          <div class="headportrait-div">
            <span class="pointR_z"> <p>2432</p> ></span>
          </div>
        </div>
      </router-link>
      <router-link :to="{path:'/ProAddress'}"  class="info-router">
        <div class="headportrait ">
          <h2>收货地址</h2>
          <div class="headportrait-div">
            <span class="pointR_z">></span>
          </div>
        </div>
      </router-link>

      <div  class="bind-phone">账号绑定</div>

      <router-link :to="{}" @click.native="changeS" class="info-router">
        <div  class="headportrait">
          <h2>
            <img src="data:image/png;base64,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"  style="display: inline-block; margin-right: 0.4rem;">手机</h2>
          <div class="headportrait-div">
            <p></p>
            <span class="pointR_z">></span>
          </div>
        </div>
      </router-link>

      <div class="bind-phone">安全设置</div>

      <router-link :to="{path:'/reset'}"  class="info-router">
        <div  class="headportrait">
          <h2>登录密码</h2>
          <div class="headportrait-div">
            <p>修改</p>
            <span class="pointR_z">></span>
          </div>
        </div>
      </router-link>

      <div class="exitlogin">退出登录</div>

    </div>

    <!--弹窗-->
    <div class="tip_text_container" v-if="nnn">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">请在手机APP中设置</p>
      <div class="confrim" @click="Sure">确认</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "zhanghuxinxi_z",
    data(){
      return{
        msg:'',
        nnn:false
      }
    },
    created(){
      this.msg=this.$route.query.msg
    },
    methods:{
      back() {
        this.$router.go(-1)
      },
      changeS(){
        this.nnn= !this.nnn;
      },
      Sure(){
        this.nnn= !this.nnn;
      }
    }
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
    background: #3190e8;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 3rem;
    color:#fff;
  }
  .pointLeft_z {
    color:#fff;
    margin-left: 3%;
    /*margin-top: 0.3rem;*/
    font-size: 1.7rem;
    font-weight: 100;
  }
  .text_z {
    margin-left: 30%;
  }

  .profile-info {
    width: 100%;
    margin-top: .5rem;
  }
  .bind-phone{
    padding: .5rem;
    font-size: .73rem;
    color: #666;
  }
  .headportrait {
    margin-top: .05rem;
    padding: .5rem .45rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    background: #fff;
  }
  .profileinfopanel-upload {
    display: block;
    position: absolute;
    opacity: 0;
    top: 3.431rem;
    left: 0;
    width: 100%;
    height: 4.526rem;
  }
  .headportrait h2 {
    font-size: .88rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .pointR_z img {
    width: 2.92rem;
    height: 2.92rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .info-router {
    display: block;
    border-bottom: 1px solid #ddd;
  }

  .headportrait h2 {
    font-size: .88rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .headportrait-div {
    display: flex;
    justify-content: left;
  }
  .headportrait-div p{
    text-align: left;
    line-height: 2rem;
    font-size: 1rem;
    color: #999;
    margin-right: .3rem;
    font-weight: 100;
    font-family: Arial;
    display: inline-block;
  }

  .exitlogin{
    width: 96%;
    margin: 1.9rem auto 0;
    line-height: 2.2rem;
    border-radius: 5px;
    text-align: center;
    background: #d8584a;
    font-size: .88rem;
    color: #fff;
  }
  .pointR_z {
    font-size: 1.5rem;
    color: rgb(216, 216, 216);
  }

  /*弹窗*/
  .tip_text_container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -8.8rem;
    margin-left: -8.8rem;
    width: 17.5rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .88rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .35rem;
  }
  .tip_icon {
    width: 4.4rem;
    height: 4.4rem;
    border: .23rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .tip_icon span:first-of-type {
    width: .18rem;
    height: 2.2rem;
    background-color: #f8cb86;
  }
  .tip_icon span:nth-of-type(2) {
    width: .3rem;
    height: .3rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .3rem;
    background-color: #f8cb86;
  }
  .tip_text {
    font-size: 1rem;
    color: #333;
    line-height: 1.3rem;
    text-align: center;
    margin-top: 1.15rem;
    padding: 0 .6rem;
  }
  .confrim{
    font-size: 1.15rem;
    color: #fff;
    font-weight: 700;
    margin-top: 1.15rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 2.6rem;
    border: 1px;
    border-bottom-left-radius: .37rem;
    border-bottom-right-radius: .37rem;
  }
</style>
