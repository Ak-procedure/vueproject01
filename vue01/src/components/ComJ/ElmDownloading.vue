<template>
    <div class="DP">
      <div class="Download">
        <span @click="back"><</span>
        <p class="dw">下载</p>
      </div>
      <div class="imgs">
        <img src="./elm.png"/>
        <p>下载饿了么APP</p>
      </div>
  <button class="btn" @click="show=true" >下载</button>
<transition name="a">
  <div class="tan" v-if="show">
    <img src="./弹框-警告.png"/>
    <p>下载饿了么APP</p>
    <button @click="show=false" >确定</button>
  </div>
</transition>

    </div>
</template>

<script>
    export default {
        name: "test",
      data(){
          return{
            show:false
          }
      },
      methods:{
          back(){
            this.$router.go(-1)
          }
      },
      created(){
        this.$store.state.shopcar=false;
        this.$store.state.showOrNot = false;
      }
    }
</script>

<style scoped>
  .DP{
    height: 100%;
    background-color: #f0f0f0;
    position: relative;
  }
.Download{
  width: 100%;
  height: 3rem;
  position: relative;
  text-align: center;
  background-color: #3190e8;
}
  .Download>span{
    position: absolute;
    left: 0.2rem;
    top:0.6rem;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
.dw{
    line-height: 3rem;
    font-size: 1rem;
    color:white;
  font-weight: 500;
  }
  .imgs{
    width: 100%;
    height: 15rem;
    /*background-color: darkgreen;*/
    text-align: center;
    margin-top: 2rem;
  }
  .imgs>img{
    width: 12rem;
    height: 12rem;
  }
  .imgs>p{
    font-size: 1.3rem;
  }
  .btn{
    width: 21rem;
    padding: 0.3rem;
    font-size: 1.3rem;
    background-color: #4cd964;
    margin-left: 1.3rem;
    /*border-radius: 0.4rem;*/
    border: none;
    color: white;
    border-radius: 0.4rem;
    margin-top: 1rem;
  }
  .tan{
    position: absolute;
    top: 30%;
    left: 12%;
    width: 18rem;
    height: 12rem;
    text-align: center;
    padding: 1rem 0;
    background-color: white;
    border-color:  white;
    border-radius: 0.4rem;
  }
  .tan>img{
    width: 10rem;
    height: 10rem;
  }
  .tan>p{
    font-size: 1rem;
    margin:0.3rem;
  }
  .tan>button{
    width: 100%;
    padding: 0.5rem 0;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 0.3rem;
    background-color: #4cd964;
  }
  .a-enter-active, .a-leave-active {
    transition: opacity .5s;
  }
  .a-enter, .a-leave-to  {
    opacity: 0;
  }
</style>
