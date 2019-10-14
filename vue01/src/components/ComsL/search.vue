<template>
  <div id="search">
    <div class="myde_z">
      <router-link :to="{}" class="pointLeft_z"><</router-link>
      <span class="text_z">搜索</span>
    </div>
    <form class="search_form">
      <input id="input1" type="search"  placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" @click="searchByKey" class="search_submit">
    </form>
    <!--展示-->
   <ul >
     <li>商家</li>
     <li>
       <router-link class="flexs" :to="{path:'/shangjia',query:v}" v-for="(v,i) in arr1" :key="i">
       <div class="imgDiv">
       <img :src="'//elm.cangdu.org/img/'+v.image_path" alt=""></div>
       <div class="resDiv">
         <p>{{v.name}}</p>
         <p>月售{{v.recent_order_num}}单</p>
         <p>{{v.float_minimum_order_amount}}起送/距离{{v.distance}}</p>
       </div>
       </router-link>
     </li>
   </ul>
  </div>
</template>

<script>
  export default {
    name: "search",
    data(){
      return{
       arr1:'',
      }
    },
    methods:{
      searchByKey(){
        let input1V = document.getElementById('input1');
        // console.log(input1V.value);
        this.axios.get('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword='+input1V.value).then((res) => {
          this.arr1=res.data;
          console.log(res.data);
        })
      }
    }
  }
</script>

<style scoped>
  #search {
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

  /*展示*/
  .flexs{
    display: flex;
    width: 100%;
    background: white;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: .8rem;
    color: #333;
  }
  .imgDiv{
    width: 20%;
    height: 100%;
  }
  .imgDiv>img{
    margin-left: .8rem;
    margin-top: .8rem;
    width: 65%;
    height: 65%;
  }
  .resDiv{
    width: 80%;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: .5rem;
  }
  .resDiv p{
    line-height: 1.6rem;
  }
  li:nth-child(1){
    margin-left: 0.8rem;
    font-weight: bold;
    color: #666;
    line-height: 3rem;
  }
  li>a{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

