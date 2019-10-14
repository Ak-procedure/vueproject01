<template>
    <div id="foodsClass">
      <div id="title">
      <span @click="back">返回</span>
     <span>{{title.title}}</span>
        <router-link :to="{path:'/mine'}">登录/注册</router-link>
      </div>
      <div id="filters">
        <van-dropdown-menu>
          <van-dropdown-item  :title="tit1" ref="item">
            <!--分类 左侧-->
            <ul class="lists1">
              <li class="flexs" @click="fenl(v)" v-for="(v,i) in foods1" :key="i">
                <div>
              <img :src="'https://fuss10.elemecdn.com/'+v.image_url+'.png'" alt=""></div>
                <div class="text_r">
                  <span>{{v.name}}</span>
                  <span>
                    <span>
                    {{v.count}}</span>
                    <span>></span></span>

                </div>
              </li>
      </ul>
<div class="listRight">
  <!--右侧具体分类-->

  <ul  class="flexs" >
    <li v-for="(x,y) in showRight" :key="y">
      <span>{{x.name}}</span><span>{{x.count}}</span>
    </li>
  </ul>

</div>
          </van-dropdown-item>
          <van-dropdown-item  title="排序" ref="item">
            <div>
            </div>
          </van-dropdown-item>
          <van-dropdown-item  title="筛选" ref="item">
          <div>筛选</div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
      <div id="food">
        <router-link v-for="(v,k) in food" :to="{path:'/shangjia',query:v}" :key="k">
          <van-card
            class="spzujian"
            :thumb="'//elm.cangdu.org/img/'+v.image_path"
          >
            <div slot="tags" class="cards">
              <ul>
                <li>
                  <span class="bigtitle">{{v.name}}</span>
                  <span class="bzp">
         <span v-for="(x,y) in v.supports" :key="y">{{x.icon_name}}</span>
       </span>
                </li>
                <li>
                <span class="ys">
<van-rate
  v-model="v.rating"
  allow-half
  size="6"
  gutter="1"
  color="orange"
  void-icon="star"
  void-color="#eee"
/>
                  <span>{{v.rating}}</span>
                  月售{{v.recent_order_num}}单</span>
                  <span class="fnzsd">
                <span class="fn">{{v.delivery_mode.text}}</span>
                <span class="zsd"> {{v.supports[1].name}}</span>
                </span>
                </li>
                <li>￥{{v.float_minimum_order_amount}}起送/{{v.piecewise_agent_fee.tips}}</li>
              </ul>
            </div>
          </van-card>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "foodsClass",
      data(){
          return{
            //分类的食品信息
            foods1:'',
            //所有要展示的食品
            food:'',
            //传递的标题
            title:'',
            switch1: false,
            switch2: false,
            activeKey:0,
            tit1:'分类',
            //右侧具体分类
            showRight:''
          }
      },
      created(){
          this.title=this.$route.query;
        this.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category').then((res)=>{
          console.log(res.data);
          this.foods1 = res.data;
        }).then(this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762').then((res)=>{
          // console.log(res.data);
          this.food=res.data;
        }))
      },
      methods:{
          back(){
            this.$router.go(-1)
          },
        fenl(v){
          this.showRight=v.sub_categories
          console.log(v);
        },
        checkok(x){
          console.log(x);
          this.tit1=x.name;
        }
      }
    }

</script>

<style scoped>
#title{
  text-align: center;
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  color:white;
  overflow: hidden;
}
  #title>span:nth-child(1){
    float: left;
    color:white;
    margin-left: .5rem;
  }
#title>a:nth-child(3){
  color: white;
  margin-right: .5rem;
  float: right;
}
  #filters{
    margin-top: 2rem;
  }

/*商品卡片*/
.bigtitle {
  width: 8.5rem;
  color: #333;
  padding-top: .01rem;
  font: .65rem/.65rem PingFangSC-Regular;
  font-weight: 700;
}

.cards ul li {
  overflow: hidden;
  line-height: 1.8rem;
}

.bzp {
  float: right;
}

.bzp > span {
  font-size: .5rem;
  color: #999;
  border: .025rem solid #f1f1f1;
  padding: 0 .04rem;
  border-radius: .08rem;
  margin-left: .05rem;
}

/*月售*/
.ys {
  font-size: .4rem;
  color: #666;
}

/*蜂鸟*/
.fn {
  color: #fff;
  background-color: #3190e8;
  border: .025rem solid #3190e8;
}

/*准时达*/
.zsd {
  color: #3190e8;
  border: .025rem solid #3190e8;
}

.fnzsd {
  float: right;
}

.spzujian{
  background: white;
  border-bottom: 1px solid #eeeeee;
}

  /*分类的列表  右侧*/
 .listRight{
   width: 50%;
   overflow: auto;
   float: left;
   height: 27.6rem;
   text-overflow: ellipsis;
   white-space: nowrap;
 }
 /*左侧*/
 .lists1{
   width: 50%;
   overflow: hidden;
   float: left;
   height: 27.6rem;
   /*border-right: 1px solid red;*/
 }
 .lists1>li div img{
   width: 1.5rem;
   height: 1.5rem;
   margin-top: .5rem;
   margin-left: .5rem;
 }
.lists1>li{
  display: flex;
  border-bottom: 1px solid white;
  line-height: 2.5rem;
  height: 3rem;
}
.lists1>li div{
  overflow: hidden;
}
.lists1>li div span{
  display: inline-block;
  margin-top: .3rem;
  font-size: .8rem;
  color: #666;
}
.lists1>li div span:nth-child(2){
  float: right;
}
.lists1>li div span:nth-child(2)>span:nth-child(1){
  background-color: #ccc;
  font-size: .4rem;
  color: #fff;
  padding: 0 0.3rem;
  line-height: 1.2rem;
  border: .025rem solid #ccc;
  border-radius: .5rem;
  margin-right: .5rem;
  margin-top:.7rem;
}
.lists1>li div span:nth-child(2)>span:nth-child(2){
  font-size: 1.2rem;
  margin-right: .5rem;
}

.lists1>li>div:nth-child(1){
  width: 20%;
}
.lists1>li>div:nth-child(2){
  width: 80%;
}
/*右侧*/
.flexs{
 font-size: 0.8rem;
}
.flexs>li{
line-height: 3.7rem;
  border-bottom: .05rem solid #e2e2e2;
  height: 3rem;

}
</style>
