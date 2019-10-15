<template>
  <div class="reF">
    <div class="res">
      <router-link :to="{path:'/mima_z'}">
        <i class="iconfont icon-fanhuijiantou"></i>
      </router-link>
      <p>重置密码</p>
    </div>
    <div class="reI">
      <input type="text" placeholder="用户名"><br>
      <input type="text" placeholder="旧密码"><br>
      <input type="text" placeholder="新密码"><br>
      <input type="text" placeholder="确认密码"><br>
      <input type="text" placeholder="验证码">
      <div class="img">
        <img :src="arr" alt=""><br>
      </div>
    </div>
    <div class="see">
      <span>看不清</span>
      <span style="color: blue" @click="yan">换一张</span>
    </div>
    <button class="btn">确认修改</button>
  </div>
</template>

<script>
  // import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  export default {
    name: "test",
    data(){
      return{
        arr:''
      }
    },
    methods:{
      yan(){
        this.axios.post("https://elm.cangdu.org/v1/captchas").then((response) => {
          console.log(response.data.code);
          this.arr = response.data.code
        })
      }
    },
    created(){
      this.yan()
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1455672_tvaaydyxb5.css";

  .res{
    line-height: 3rem;
    background-color: #3190e8;
    text-align: center;
  }
  p{
    line-height: 3rem;
    font-size: 1rem;
    color: white;
  }
  a{
    text-decoration: none;
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.3rem;
  }
  input{
    padding: 1rem 0 1rem 0;
    margin: 0.05rem 0;
    width: 100%;
    border: none;
    height: 1.8rem;
    padding-left: 1rem;
  }
  .btn{
    width: 20rem;
    color: white;
    font-size: 1.4rem;
    background-color: #4cd964;
    margin-left: 2rem;
    margin-top: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
  }
  .reI{
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: white;
  }
  .img{
    position: absolute;
    top:17rem;
    right: 5rem;
  }
  .see{
    margin-top: 1rem;
  }
  .reI input{
    border-bottom: 0.05rem solid #e2e2e2;
  }
</style>
