<template>
    <div class="Sv">
      <div class="super">
        <router-link :to="{path:'/test'}"><</router-link>
        <p>{{title}}</p>
      </div>
      <div class="msg">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "Ques",
      data(){
        return {
          title:'',
          msg:''
        }
      },
      created(){
          this.title = this.$route.query.des1
          this.msg=this.$route.query.msg1
      }
    }
</script>

<style scoped>
  .Sv{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .super{
    width: 100%;
    height: 3rem;
    background-color: #3190e8;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
  }
  .super>a{
    font-size: 1.5rem;
    position: absolute;
    left: 0.3rem;
    top:0.5rem;
    color: white;
    text-decoration: none;

  }
  .super>p{
    font-size: 1rem;
    color: white;
    line-height: 3rem;
  }
  .msg{
    font-size: 1.3rem;
    padding: 0 0.7rem;
  }
</style>
