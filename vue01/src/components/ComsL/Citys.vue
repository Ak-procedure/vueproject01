<template>
  <div id="Citys">
    <div id="CityHeader">
    <span class="left_z">ele.me</span>
    <router-link :to="{path:'/mine'}" class="right_z">登录|注册</router-link>
    <div class="empty"></div>
    </div>
    <div id="Dwcity">
      <span class="left01_z">当前定位城市</span>
      <span class="right01_z">定位不准时，请在城市列表中选择</span>
      <div class="empty"></div>
    </div>
    <div class="Piont">
      <a href="###" class="rightPiont_z">
        <span>></span></a>
    </div>
    <div id="HotCity">
      <div>热门城市</div>
      <ul class="ul1">
        <li>
          <router-link  v-for="(a,b) in arr3" :key="b" :to="{path:'/jump',query:a}">{{a.name}}</router-link>
        </li>
      </ul>
    </div>
<!--所有城市-->
    <ul class="ul2">
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
  /*热门城市*/
  .ul1 a{
    background-color: white;
    border-right: none;
    float: left;
    box-sizing: border-box;
    text-align: center;
    color: #3190e8;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: .9rem/1.75rem Microsoft YaHei;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

#Dwcity {
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  line-height: 1.45rem;
  padding: 0 .45rem;
  font-size: .55rem;
  color: #666;
  background: white;
  line-height: 2.5rem;
  border-bottom: .025rem solid #e4e4e4;
}

#CityHeader {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
  color:white;
}
  .left_z {
    left: .4rem;
    font-weight: 400;
    font-size: .7rem;
    color: #fff;
    width: 2.3rem;
    height: .7rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
  .right_z{
    right: .55rem;
    font-size: .65rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .right_z,.right01_z {
  float: right;
}
.Piont{
  margin-bottom: .5rem;
  background: white;
}
  .rightPiont_z {
    display: block;
    width: 100%;
    line-height: 2.5rem;
    overflow: hidden;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 0.5rem;
}
  .rightPiont_z span{
    float: right;
  }
  .empty{
    clear: both;
  }
  /*所有动态创建的li标签*/
  li{
    overflow: hidden;
    background-color: white;
    margin-bottom: .4rem;
    border-bottom: 1px solid #e4e4e4;
  }
  /*城市首字母*/
 p{
   height: 1.6rem;
   line-height: 1.6rem;
   color: #666;
   font-weight: 400;
   text-indent: .45rem;
   border-top: 2px solid #e4e4e4;
   border-bottom: 1px solid #e4e4e4;
   font: .75rem/1.45rem Helvetica Neue;
 }
  /*所有城市*/
  .ul2 a{
    border-right: none;
    float: left;
    box-sizing: border-box;
    text-align: center;
    color: #666;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 2.5rem;
    font: .9rem/1.75rem Microsoft YaHei;
    /*font-size: .6rem;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5rem;
  }
  #HotCity >div {
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    background: white;
  }

</style>
