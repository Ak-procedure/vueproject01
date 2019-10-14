<template>
    <div>
      <div class="address">
        <router-link :to="{path:'/mima_z'}">
          <i class="iconfont icon-fanhuijiantou"></i>
        </router-link>
        <span>编辑地址</span>
        <span>编辑</span>
      </div>
<div class="hid">
  <p>{{p1}}</p>
  <p>{{p2}}</p>
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
            p1:"",
            p2:""
          }
      },
      methods: {
        onClickLeft() {
          Toast('返回');
        },
        onClickRight() {
          Toast('按钮');
        }
      },
      created(){
          this.p1=this.$route.query.id;
          this.p2=this.$route.query.contact
        // console.log(this.$route.query.contact)
         this.p1 =b
        c = this.p2

      },
      destroyed(){
this.p1 = b;
this.p2 =c;
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
  .address>a{
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
  }
  .newa>i{
    position: absolute;
    right: 0.9rem;
  }
  .hid{
    /*padding: 0.5rem;*/
    background-color: orange;
    margin-bottom: 0.2rem;
  }
  p{
    margin: 0.2rem;
  }
</style>
