<template>
    <div>111111111111
      <p>{{msg3}}</p>
    </div>
</template>

<script>
    export default {
        name: "ScoreQue",
      data(){
          return{
            msg:'',
            msg2:'',
            msg3:''
          }
      },
      created(){
        this.msg=this.$route.query.data2
        this.msg2=this.$route.query.data1
            console.log(this.msg[this.msg2]);
        this.msg3=this.msg[this.msg2];
        console.log(this.msg2);
      }
    }
</script>

<style scoped>

</style>
