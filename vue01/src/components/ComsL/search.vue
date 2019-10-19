<template>
  <div id="search">
    <div class="myde_z">
     <span @click="back" class="pointLeft_z">返回</span>
      <span class="text_z">搜索</span>
    </div>
    <form class="search_form">
      <input id="input1" type="search"  placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" @click="searchByKey" class="search_submit">
    </form>
    <!--展示-->
   <ul >
     <li v-if="show">商家</li>
     <li v-if="show">
       <div  class="flexs"  @click="tiaoshangjia(v)" v-for="(v,i) in arr1" :key="i">
       <div class="imgDiv">
       <img :src="'//elm.cangdu.org/img/'+v.image_path" alt=""></div>
       <div class="resDiv">
         <p>{{v.name}}</p>
         <p>月售{{v.recent_order_num}}单</p>
         <p>{{v.float_minimum_order_amount}}起送/距离{{v.distance}}</p>
       </div>
       </div>
     </li>
     <li v-if="!show">搜索历史</li>
     <li  v-if="!show" v-for="(v,i) in hInputV" :key="i">
       <router-link :to="{}" class="showI">
         <span @click="sousuo(i)">{{v.inputtext}}</span>
         <span @click="removeHistory(i)">x</span>
       </router-link>
     </li>
     <li v-if="!show" class="clears">
       <input @click="qingkong" type="submit" value="清空搜索历史">
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
      //  输入历史数组
        hInputV:[],
        show:false
      }
    },
    created(){
      this.$store.state.shopcar=false;
      this.$store.state.showOrNot=true;
      var storage=window.localStorage;
      let getL= JSON.parse(storage.getItem('data2'));
      this.hInputV=getL;
    },
    methods:{
      searchByKey(){
        let input1V = document.getElementById('input1');
       let val= input1V.value.replace(/\s*/g,"");
        if(val==''){
          return
        }
        this.axios.get('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword='+input1V.value).then((res) => {
          // console.log(res.data);
          this.arr1=res.data;
        });
        this.addLocal(input1V.value);
        input1V.value='';
        this.show=true;
      },
      addLocal(e){
        var storage=window.localStorage;
        var data2={
          inputtext:e
        };
        var arr=[];
        let getL= JSON.parse(storage.getItem('data2'));
        for (let v in getL) {
          arr.push(getL[v]);
        }
        arr.push(data2);
        var d=JSON.stringify(arr);
        storage.setItem("data2",d);
      },
      qingkong(){
        this.hInputV=[];
        var storage=window.localStorage;
        storage.setItem("data2",null);
      },
      removeHistory(i){
        this.hInputV.splice(i,1);
        var storage=window.localStorage;
        var d= JSON.stringify(this.hInputV);
        storage.setItem("data2",d);
      },
      back(){
        this.$router.go(-1);
      },
      sousuo(e){
        this.show=true;
        this.axios.get('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword='+this.hInputV[e].inputtext).then((res) => {
          this.arr1=res.data;
        });
      },
      tiaoshangjia(v){
        let jsons= JSON.stringify(v);
        window.localStorage.setItem('shangJXX',jsons);
        this.$router.push({path:'/shangjia'})
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
    height: 3rem;
    line-height: 3rem;
    background: cornflowerblue;
    color: white;
    font-size: 1.2rem;
  }
  .pointLeft_z {
    color: white;
    margin-left: .3rem;
    /*margin-top: .3rem;*/
    font-size: 1.2rem;
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
  /*展示历史记录*/
  .showI{
    display: flex;
    border-bottom: 0.03rem solid #e2e2e2;
    line-height:3rem ;
    background: white;
    color: #333;

  }
  .showI>span:nth-child(1){
    box-sizing: border-box;
    padding-left: 1rem;
    width: 90%;
  }
  .showI>span:nth-child(2){
    width: 10%;
    text-align: center;
  }
  .clears>input{
    width: 100%;
    border: none;
    background: white;
    font-size: 1.2rem;
    color: #3190e8;
    font-weight: 600;
  }
</style>

