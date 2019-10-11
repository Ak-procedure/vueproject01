<template>
  <div id="Citys">

    <div id="CityHeader">
    <span class="left_z">ele.me</span>
    <router-link :to="{path:'/test'}" class="right_z">登录|注册</router-link>
    <div class="empty"></div>
    </div>
    <div id="Dwcity">
      <span class="left01_z">当前定位城市</span>
      <span class="right01_z">定位不准时，请在城市列表中选择</span>
      <div class="empty"></div>
    </div>
      <hr>
      <h3 class="rightPiont_z">></h3>
    <div id="HotCity">
      <span>热门城市</span>
      <hr>
      <ul class="ul1">
        <li>
          <router-link  v-for="(a,b) in arr3" :key="b" :to="{path:'/jump',query:a}">{{a.name}}</router-link>
        </li>
      </ul>
    </div>

    <ul>
      <li v-for="(v,i) in arr2" :key="i">
        <p>{{v}}</p>
        <router-link v-for="(x,y) in arr1[v]" :to="{path:'/jump',query:x}" :key="y">
          {{x.name}}
        </router-link>
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
    name: "Citys",
    data() {
      return {
        arr1: [],
        arr2: [],
        arr3: []
      }
    },
    created(){
        this.axios.get('http://elm.cangdu.org/v1/cities?type=hot').then((res)=>{
        this.arr3 = res.data;
        }).then(()=>{
          this.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res) => {
            let arr2 = [];
            this.arr1 = res.data;
            for (let v in res.data) {
              arr2.push(v)
            }
            arr2.sort();
            this.arr2 = arr2;
          })
        })
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  html,body {
    width: 100%;
    height: 100%;
  }
  p{
    border: 0.1px solid black;
    padding: 3px;
  }
a{
  box-sizing: border-box;
  display: block;
  width:24.5%;
  /*font-size: 10px;*/
  text-align: center;
  border: 0.5px solid black;
  margin: 0.5px;
  padding:5px 0;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  text-decoration: none;
}
#Dwcity {
  line-height: 40px;
}

#CityHeader {
  background: blue;
  color: white;
  width: 100%;
  height: 35px;
}
  .left_z,.left01_z {
  float: left;
}
  .right_z,.right01_z {
  float: right;
}
  .rightPiont_z {
  margin-left: 45px;
}
  .empty{
    clear: both;
  }

  li{
    overflow: hidden;
  }
  .ul1>li a{
    color: cornflowerblue;
  }
</style>
