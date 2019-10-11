
<template>
  <div class="reF">
    <div class="res">
      <router-link :to="{}"><</router-link>
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
      <div class="see">
        <span>看不清</span>
        <span style="color: blue" @click="yan">换一张</span>
      </div>

      <button class="btn">确认修改</button>
    </div>
  </div>
</template>

<script>
  import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
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
  .reF{
    height: 100%;
    background-color: #f0f0f0;
  }
  .res{
    height: 5rem;
    background-color: #3190e8;
    /*font-size: 1rem;*/
    text-align: center;
  }
  p{
    line-height: 5rem;
    font-size: 1.5rem;
    color: white;
  }
  a{
    text-decoration: none;
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: white;
    font-size: 2.3rem;
  }
  input{
    padding: 2.5rem;
    margin: 0.05rem 0;
    width: 100%;
    border: none;
    height: 2rem;
  }
  .btn{
    width: 32rem;
    color: white;
    font-size: 2rem;
    background-color: #4cd964;
    margin-left: 3rem;
    margin-top: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  .reI{
    position: relative;
  }
  .img{
    position: absolute;
    top:21.5rem;
    right: 5rem;
  }
  .see{
    margin-left: 25rem;
    margin-top: 1rem;
  }
</style>
