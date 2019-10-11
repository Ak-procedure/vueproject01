<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
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
