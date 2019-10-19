<template>
    <div>
<div class="address">
  <span @click="back">
    <i class="iconfont icon-fanhuijiantou"></i>
  </span>
  <p>新增地址</p>
</div>
     <div class="is">
       <input type="text" placeholder="请填写你的姓名" v-model="getres"><br>
       <router-link :to="{path:'/searchAddress',query:getres}">
         <input type="text" placeholder="小区/写字楼/学校等" v-model="id"><br>
       </router-link>
  <input type="text" placeholder="请填写详细送餐地址" v-model="detail"><br>
  <input type="text" placeholder="请填写能够联系到您的手机号" v-model="TL"><br>
       <input type="text" placeholder="备用联系电话">
     </div>
        <button @click="btn">新增地址</button>
    </div>
</template>

<script>
    export default {
        name: "NewAddress",
      data(){
          return{
            id:'',
            detail:"",
            TL:"",
            getres:''
          }
      },
      methods:{
     btn(){
    this.$router.push({path:'/ProAddress'});
    this.$store.state.address.push({id:this.detail,contact:this.TL})
     },
        back(){
            this.$router.go(-1)
        }
      },
      created(){
          let name='';
          for (let v in this.$route.query.res) {
          name+= this.$route.query.res[v];
        }
         if (name.indexOf('object')==-1){
           this.getres=name;
         }else {
           return;
         }
        this.id = this.$route.query.inp;
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1455672_t3enchgxuia.css";
  .address{
    background-color: #3190e8;
    line-height: 3rem;
    text-align: center;
    position: relative;
    color: white;
  }
  .address>span:nth-child(1){
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    /*top: 0.5rem;*/
  }
  .address>p{
    font-size: 1.1rem;
    font-weight: 600;
  }
  .is{
    background-color: white;
    padding: 0.5rem 0;
  }
  .is>a>input{
    color: #333333 ;
  }
input{
 padding-left: 1rem;
  margin: 1rem 0 0 0.7rem;
  height: 2.5rem;
  width: 21rem;
  font-size: 0.9rem;
  background-color: #f2f2f2;
border: 1px solid #ddd;
}
  button{
    width: 22rem;
    background-color: rgb(76,217,100);
    padding: 0.5rem 0;
    border: none;
    border-radius: 0.2rem;
    color: white;
    margin-left: 0.7rem;
    margin-top: 0.8rem;
  }
</style>
