<template>
  <div id="app">
    <router-view></router-view>
    <BottomCom v-if="this.$store.state.showOrNot"></BottomCom>
  </div>
</template>

<script>

  import BottomCom from "./components/ComsL/BottomCom";
  export default {
    name: 'App',
    components: {BottomCom},
    created(){
      this.$store.state.showOrNot=false;
      // console.log(this.$store.state.showOrNot);
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
