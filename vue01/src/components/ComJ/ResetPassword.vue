<template>
  <div class="reF">
    <div class="res">
      <router-link @click.native="back" :to="{}">
        <i class="iconfont icon-fanhuijiantou"></i>
      </router-link>
      <p>重置密码</p>
    </div>
    <div class="reI">
      <input type="text" placeholder="用户名" v-model="I1"><br>
      <input type="text" placeholder="旧密码" v-model="I2"><br>
      <input type="text" placeholder="新密码" v-model="I3"><br>
      <input type="text" placeholder="确认密码" v-model="I4"><br>
      <input type="text" placeholder="验证码" v-model="I5">
    </div>
    <div class="imgs">
      <img :src="arr" alt="">
      <div class="see">
        <div>看不清</div>
        <div style="color: blue" @click="yan">换一张</div>
      </div>
    </div>
    <button class="btn" @click="chongzhimima">确认修改</button>
  </div>
</template>

<script>
  export default {
    name: "test",
    data(){
      return{
        arr:'',
        I1:'',
        I2:'',
        I3:'',
        I4:'',
        I5:'',
      }
    },
    methods:{
      yan(){
        this.axios.post("https://elm.cangdu.org/v1/captchas").then((response) => {
          // console.log(response.data.code);
          this.arr = response.data.code
        })
      },
      chongzhimima(){
        this.axios.post('https://elm.cangdu.org/v2/changepassword',{username:this.I1,oldpassWord:this.I2,newpassword:this.I3,confirmpassword:this.I4,captcha_code:this.I5}).then((res)=>{
          // console.log(res.data);
          if(res.data.type){
             alert(res.data.message);
          }else {
            alert(res.data.success);

          }
        })
      },
      back(){
        this.$router.go(-1)
      }
    },
    created(){
      this.yan()
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1455672_tvaaydyxb5.css";
  .reF{
    overflow: hidden;
  }
  .res{
    line-height: 3rem;
    background-color: #3190e8;
    text-align: center;
  }
  .res>p{
    line-height: 3rem;
    font-size: 1.2rem;
    color: white;
  }
  .res>a{
    text-decoration: none;
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.3rem;
  }
  input{
    /*box-sizing: border-box;*/
    padding: 1rem 0 1rem 1rem ;
    margin-top: 0.1rem;
    background-color: white;
    width: 100%;
    border: none;
    height: 1.8rem;
  }
  .btn{
    width: 20rem;
    color: white;
    font-size: 1.4rem;
    background-color: #4cd964;
    margin-left: 1.5rem;
    margin-top: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
  }
  .reI{
    position: relative;
  }
  .imgs{
    position: absolute;
    /*background-color: red;*/
    overflow: hidden;
    width: 9rem;
    top:19.5rem;
    right: 2rem;
  }
  .see{
    float: left;
  }
  .imgs>img{
    float: left;
    margin-right: 0.5rem;
  }
</style>
