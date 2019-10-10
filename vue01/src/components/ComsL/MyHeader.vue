<template>
  <div id="MyHeader">
    <router-link :to="{path:'/zj1'}">组件1</router-link>
    <router-link :to="{path:'/zj2'}">组件2</router-link>
    <router-link :to="{path:'/zj3'}">组件3</router-link>
  </div>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style scoped>
  #MyHeader {
    width: 100%;
    height: 15%;
    line-height: 100px;
    background: rgba(0, 0, 0, 0.7);
  }

  a {
    font-size: 30px;
    color: white;
  }
</style>
