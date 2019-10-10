<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/ComsL/MyHeader';
  export default {
    name: 'App',
    components: {
      MyHeader
    },
  }
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
  #app{
    width: 100%;
    height: 100%;
  }
</style>
