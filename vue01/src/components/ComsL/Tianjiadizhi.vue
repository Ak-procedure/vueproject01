<template>
    <div id="tianjiad">
      <div id="nav">
        <!--向左箭头-->
        <span @click="back">返回</span>
       <span>添加地址</span>
      </div>
      <router-link :to="{path:'/xinzengdz'}">+新增收货地址</router-link>
    </div>
</template>

<script>
    export default {
        name: "Tianjiadizhi",
      methods:{
        back(){
          this.$router.go(-1);
        }
      },
      created(){
        this.$store.state.shopcar=false;
        this.$store.state.showOrNot = false;
      }
    }
</script>

<style scoped>
  #nav{
    width: 100%;
    background: #3190e8;
    height: 3rem;
    overflow: hidden;
    line-height: 3rem;
    color: white;
  }
  #nav > span:nth-child(1) {
    float: left;
    margin-left: .5rem;
  }

  #nav > span:nth-child(2) {
    margin-left: 7rem;
    float: left;
   font-size: 1.4rem;
    font-weight: 600;
  }
  #tianjiad{
    width: 100%;
    height: 100%;
    background: white;
    position: relative;
    text-align: center;
  }
#tianjiad>a{
  font-size: 1.3rem;
  position: absolute;
  bottom: .5rem;
  left: 0;
  right: 0;
  color: #3190e8;
}
</style>
