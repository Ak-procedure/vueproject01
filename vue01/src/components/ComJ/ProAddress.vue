<template>
    <div>
      <div class="address">
        <span @click="back">
          <i class="iconfont icon-fanhuijiantou"></i>
        </span>
        <span>编辑地址</span>
        <span>编辑</span>
      </div>
<div class="hid" v-for="(v,i) in this.$store.state.address">
  <p>{{v.id}}</p>
  <p>{{v.contact}}</p>
</div>
      <router-link :to="{path:'/Add'}" class="newa">
        <span>新增地址</span>
        <i class="iconfont icon-aright"></i>
      </router-link>
    </div>
</template>

<script>
  let b = ""
  let c =""
    export default {
        name: "ProAddress",
      data(){
          return{

          }
      },
      methods: {
        onClickLeft() {
          Toast('返回');
        },
        onClickRight() {
          Toast('按钮');
        },
        back(){
          this.$router.go(-1)
        }
      },
      created(){
        console.log(this.$store.state.address);
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1455672_t3enchgxuia.css";
  @import "//at.alicdn.com/t/font_1455672_36h6nrrzkpx.css";
.address{
  background-color: #3190e8;
  line-height: 3rem;
  text-align: center;
  position: relative;
  color: white;
}
  .address>span:nth-child(1){
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.1rem;
    /*top: 0.5rem;*/
  }
  .address>span:nth-child(3){
    position: absolute;
    font-size: 0.9rem;
    right: 0.8rem;
    /*top: 0.8rem;*/
  }
  .newa{
    display: block;
    line-height: 3rem ;
     background-color: white;
    padding-left: 1rem;
    color: black;
    position: relative;
    margin-top: 1rem;
    border-top: 0.05rem solid #e2e2e2;
    border-bottom: 0.05rem solid #e2e2e2;

  }
  .newa>i{
    position: absolute;
    right: 0.9rem;
  }
  .hid{
    /*padding: 0.5rem;*/
    background-color: #fff8c3;
    margin-top: .6rem;
    margin-bottom: -.3rem;
    border-top: 0.05rem solid #e2e2e2;
    border-bottom: 0.05rem solid #e2e2e2;
    padding-left: .5rem;
  }
  p{
    margin: 0.2rem;
  }
</style>
