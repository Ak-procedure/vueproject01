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
      <!--展示搜索历史  localStorage-->
      <ul>
        <li v-if="!shows" class="lef">搜索历史</li>
        <li v-if="shows" v-for="(v,i) in msgs" :key="i" class="lists">
          <div @click="addLocal(v)">
            <p>{{v.name}}</p>
            <p>{{v.address}}</p>
          </div>
        </li>
        <li v-if="!shows"  v-for="(v,i) in historySearcharr" :key="i" class="lists">
          <div @click="addLocal(v)">
            <p>{{v.name}}</p>
            <p>{{v.address}}</p>
          </div>
        </li>
        <li v-if="!shows" class="clearli" @click="removeh()">
          <span>清空所有</span>
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
        //从本地获取存储的城市信息
        city1: '',
        msgs: '',
        historySearcharr:[],
        shows:false
      }
    },
    created() {
      var storage=window.localStorage;
      this.$store.state.showOrNot=false;
      this.city1 =  JSON.parse(storage.getItem('CitysHis'));
      this.historySearcharr=JSON.parse(storage.getItem('data'));
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      serchCity(id) {
        let input1V = document.getElementById('input1');
        let val= input1V.value.replace(/\s*/g,"");

        if(val==''){
          return
        }
        this.shows=true;
        //根据城市id和关键词 发起请求 返回值存储并展示
        this.axios.get('https://elm.cangdu.org/v1/pois?city_id=' + id + '&keyword=' + input1V.value + '&type=search').then((res) => {
          this.msgs = res.data
        })
      },
      //添加到本地存储
      addLocal(e){
        var storage=window.localStorage;
        storage.setItem('hhhh',JSON.stringify(e));
        var data={
          name:e.name,
          address:e.address
        };
        //声明空数组 存储原来的本地存储
        var arr=[];
        let getL= JSON.parse(storage.getItem('data'));

          for (let v in getL) {
            //遍历  通过name、属性匹配 如果相同说明有历史记录 跳过
           if(getL[v].address==undefined) {
             return
            if(getL[v].name==e.name&&getL[v].address==e.address){
              continue
            }else {
              arr.push(getL[v]);
            }
          }
      }
        arr.push(data);
        var d=JSON.stringify(arr);
        //更新本地存储
        storage.setItem("data",d);
        this.$router.push({path:'/foods'})
      },
      removeh(){
        //清除数据源 并移除本地
        var storage=window.localStorage;
        this.historySearcharr=null;
        storage.removeItem('data');
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
 .lists>div>p:nth-child(1) {
   margin: 0 auto .35rem;
    width: 90%;
    font-size: .65rem;
    color: #333;
 }

  .lists>div>p:nth-child(2){
    width: 90%;
    margin: 0 auto .55rem;
    font-size: .45rem;
    color: #999;
  }
  .clearli{
    text-align: center;
    background: white;
    line-height: 3rem;
    color: #666;
    font-size: 1.2rem;
  }
.lef{
  margin-left: 0.6rem;
}
</style>
