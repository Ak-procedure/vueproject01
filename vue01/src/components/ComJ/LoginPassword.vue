<template>
    <div class="wai">
      <div class="login">
        <span @click="back">返回</span>
        <p>密码登录</p>
      </div>
      <div class="ins">
        <input type="text" placeholder="账号" v-model="IV1">
        <input type="password" placeholder="密码" v-model="IV2" v-if="show1">
        <input type="text" placeholder="密码"v-else v-model="IV2">
        <input type="text" placeholder="验证码" v-model="IV3">
      </div>
      <p class="word">温馨提示:未注册过的账号，登录时将自动注册</p>
      <p class="word">注册过的用户可凭账号密码登录</p>
      <button @click="postqq" class="btn">登录</button>
      <div class="yzm">
        <img :src="arr" alt="">
        <div class="see">
          <p>看不清</p>
          <p @click="yan">换一张</p>
        </div>
      </div>
      <div class="eng" @click="show1=!show1">
        <van-switch v-model="checked" />
      </div>
    </div>
</template>

<script>
    export default {
        name: "LoginPassword",
      data(){
          return{
            arr:'',
            show1:false,
            checked: true,
            IV1:'',
            IV2:'',
            IV3:'',
          }
      },
      methods:{
          back(){
            this.$router.go(-1)
          },
        yan(){
            this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
              this.arr = res.data.code
            })
        },
        postqq(){
            this.axios.post('https://elm.cangdu.org/v2/login',{username:this.IV1,password:this.IV2,captcha_code:this.IV3}).then((res)=>{
              console.log(res.data);
              if (res.data.type){
                alert(res.data.message);
              }else {
                this.$router.push({path:'/mine'})
              }
            })
        }
      },

      created(){
          this.yan();
      }
    }
</script>

<style scoped>
  .wai{
    position: relative;
    overflow: hidden;
  }
  .login{
    line-height:3rem;
    background-color: #3190e8;
    text-align: center;
    font-size: 1.1rem;
    color: white;
    position: relative;
  }
  .login>span:nth-child(1){
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.1rem;
    /*top: 0.5rem;*/
  }
 .ins{
   margin-top: 1rem;
 }
  .ins>input{
    margin-bottom: 0.1rem;
    width: 100%;
    box-sizing: border-box;
    line-height: 3rem;
    background-color: white;
    border: none;
    padding-left: 1rem;
  }
  .word{
    font-size: 0.7rem;
    color: red;
    margin-left: 0.8rem;
    margin-top: 0.8rem;
  }
  .btn{
    padding: 0.7rem 9rem;
    border: none;
    background-color: #4cd964;
    color: white;
    font-size: 1.1rem;
    margin-left: 1.6rem;
    margin-top: 1rem;
  }
  .yzm{
    /*background-color: red;*/
    overflow: hidden;
    width: 9rem;
    position: absolute;
    right: 1rem;
    top: 10.5rem;
  }
  .yzm>img{
    float: left;
  }
  .see{
    float: left;
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }
  .see>p:nth-child(2){
    color: #3b95e9;
  }
  /*.abc{*/
    /*display: block;*/
    /*width: 2.8rem;*/
    /*line-height: 1.2rem;*/
    /*background-color: #ccc;*/
    /*border-radius: 1.4rem;*/
    /*text-align: center;*/
/*font-size: 0.5rem;*/
    /*color: white;*/
  /*}*/
  .eng{
    position: relative;
    /*margin-top: 2rem;*/
    top: -13rem;
    left: 19rem;
  }
  /*.circle{*/
    /*width: 1.5rem;*/
    /*height: 1.5rem;*/
    /*border-radius: 50%;*/
    /*background-color: #f1f1f1;*/
    /*position: absolute;*/
    /*top: -0.2rem;*/
    /*left: 0.03rem;*/
  /*}*/

</style>
