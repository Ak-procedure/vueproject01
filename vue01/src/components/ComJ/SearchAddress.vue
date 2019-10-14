<template>
    <div>
      <div class="address">
        <router-link :to="{path:'/Add'}">
          <i class="iconfont icon-fanhuijiantou"></i>
        </router-link>
        <p>搜索地址</p>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="inputv">
        <button @click="search">确定</button>

      </div>
      <div class="word">
        为了满足商家的送餐要求，建议您从列表中选择地址
      </div>
      <ul v-if="id">

       <li v-for="(v,i) in arr" :key="i">
         <router-link :to="{path:'/Add',query:{inp:v.name}}">
         <p>{{v.name}}</p>
         <p>{{v.address}}</p>
         </router-link>
       </li>

      </ul>
      <div class="all" v-else>
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址(或门牌号)请稍后输入</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "SearchAddress",
      data(){
          return{
            inputv:'',
            arr:[],
            id:false
          }
      },
      methods:{
          search(){
            if(this.inputv==""){
              return
            }
            this.axios.get("https://elm.cangdu.org/v1/pois?city_id=1&keyword="+this.inputv+"&type=search").then((res)=>{
              console.log(res);
  this.arr = res.data;

       this.id = true
            })
          }
      },

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
  .address>a{
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
  input{
    height: 2.7rem;
    width: 18rem;
    border-radius: 0.4rem;
    border: 1px solid #ddd;
    background-color: #f2f2f2;
    padding-left: 0.2rem;
    margin-left: 0.2rem;
  }
  .search{
    background: white;

    padding: 0.6rem;
  }
  button{
    background-color: #3199e8;
    border: none;
    padding: 0.7rem;
    border-radius: 0.3rem;
    color: white;
  }
  .word{
    font-size: 0.9rem;
    color: #ff883f;
    background-color: #fff6e4;
    text-align: center;
    padding: 0.2rem 0;
  }
  .all{
    text-align: center;
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
  }
  .all>p{
    color: #969696;
    margin-bottom: 0.4rem;
  }
  ul{
    list-style: none;
  }
  li{
    /*height: 3rem;*/
    border-bottom: 1px solid rgb(204,204,204);
    color: #969696;
    padding: 0.5rem;
  }
  li>a>p{
    margin-bottom: 0.4rem;
    color: #333333;
  }
</style>
