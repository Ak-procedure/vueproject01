<template>
  <div id="mine_z">
    <div class="myde_z">
      <router-link :to="{path:'/'}" class="pointLeft_z"><</router-link>
      <span class="text_z">{{msg}}</span>
    </div>

    <form class="search_form">
      <input type="search"  placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" class="search_submit">
    </form>


  </div>
</template>

<script>
    export default {
        name: "soushuo_z",
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

  .search_form {
    background-color: #fff;
    padding: .73rem;
    display: flex;
  }
  input {
    height: 2.19rem;
    border-radius: .182rem;
    font-size: .95rem;
    font-weight: 700;
    padding: 0 .365rem;
  }
  .search_input{
    width: 80%;
    border: .03rem solid #e4e4e4;
    color: #333;
    background-color: #f2f2f2;
  }
  .search_submit {
    width: 20%;
    border: .03rem solid #3190e8;
    margin-left: .3rem;
    color: #fff;
    background-color: #3190e8;

  }

</style>
