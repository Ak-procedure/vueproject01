<template>
  <div id="mine_z">
    <div class="myde_z">
      <router-link :to="{path:'/'}" class="pointLeft_z"><</router-link>
      <span class="text_z">{{msg}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myDingdan_z",
      data(){
        return{
          msg:''
        }
      },
      created(){
        this.msg=this.$route.query.msg
      }
    }
</script>

<style scoped>
  #mine_z {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .myde_z {
    width: 100%;
    height: 8%;
    background: cornflowerblue;
    color: white;
    font-size: 20px;
  }
  .pointLeft_z {
    color: white;
    margin-left: 3%;
    margin-top: 0;
    font-size: 35px;
  }
  .text_z {
    margin-left: 30%;
  }
</style>
