<template>
  <div id="app">
    <router-view></router-view>
    <BottomCom v-if="this.$store.state.showOrNot"></BottomCom>
    <ShopCar v-if="this.$store.state.shopcar"></ShopCar>
  </div>
</template>

<script>
  import  Vue from 'vue'
  import { Lazyload } from 'vant';
  Vue.use(Lazyload, {
    lazyComponent: true
  });

  import BottomCom from "./components/ComsL/BottomCom";
  import ShopCar from "./components/ComsL/ShopCar";
  export default {
    name: 'App',
    components: {ShopCar, BottomCom},
    created(){
      this.$store.state.showOrNot=false;
      this.$store.state.shopcar=false;
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
html,body{
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
  #app{
    width: 100%;
    height: 100%;
    /*font-size: 20px;*/
  }
</style>
