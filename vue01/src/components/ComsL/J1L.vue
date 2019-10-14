<template>
  <div id="J1L">
      <div class="title">
        <!--向左箭头-->
        <span @click="back">返回</span>
        <span>{{city1.name}}</span>
        <router-link :to="{path:'/'}">切换城市</router-link>
      </div>
    <div class="one">

    <div class="div1">
        <input placeholder="输入学校,商务楼,地址" type="search" id="input1">
      </div>
      <div class="div2">
        <input type="submit" class="btn1" @click="serchCity(city1.id)" value="提交">
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(v,i) in msgs" :key="i" class="lists">
          <router-link :to="{path:'foods',query:v}">
            <p>{{v.name}}</p>
            <p>{{v.address}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "J1L",
    data() {
      return {
        city1: '',
        msgs: ''
      }
    },
    created() {
      this.$store.state.showOrNot=false;
      this.city1 = this.$route.query
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      serchCity(id) {
        let input1V = document.getElementById('input1');
        // console.log(input1V.value);
        this.axios.get('https://elm.cangdu.org/v1/pois?city_id=' + id + '&keyword=' + input1V.value + '&type=search').then((res) => {
          // console.log(res.data);
          this.msgs = res.data
        })
      }
    }
  }
</script>

<style scoped>

  .one {
    margin-top: .6rem;
    text-align: center;
    background: white;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: .4rem;
  }

  .one p {
    text-align: center;
    background: cornflowerblue;
    color: white;
  }

  #input1 {
    box-sizing: border-box;
    width: 100%;
    line-height: 2rem;
    margin: 5px 0;
    border: 1px solid #e4e4e4;
    padding-left: .5rem;
    font-size: .65rem;
    color: #333;
    outline: none;
  }

  .btn1 {
    line-height: 30px;
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    border-radius: .1rem;
    margin-bottom: .4rem;
    width: 100%;
    outline: none;
    border: none;
  }
.div2,.div1{
  width: 90%;
  margin: 0 auto;
}
  .title {
    text-align: center;
    background-color: #3190e8;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    overflow: hidden;
    color: white;
  }

  .title>span:nth-child(1){
    color: white;
    float: left;
    margin-left: .5rem;
  }
  .title>span:nth-child(2){
    font-size: 1.2rem;
    display: inline-block;
    width: 10rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title>a:nth-child(3){
    color: white;
    margin-right: .5rem;
    float:right;
  }
  .lists{
    margin: 0 auto;
    padding-top: .65rem;
    border-bottom: 1px solid #e4e4e4;
    background: white;
  }
 .lists>a>p:nth-child(1) {
   margin: 0 auto .35rem;
    width: 90%;
    font-size: .65rem;
    color: #333;
 }

  .lists>a>p:nth-child(2){
    width: 90%;
    margin: 0 auto .55rem;
    font-size: .45rem;
    color: #999;
  }
</style>
