<template>
    <div id="foodsClass">
      <div id="title">
      <a href="###">返回</a>
     <span>{{title.title}}</span>
      </div>
      <div id="filters">
        <van-dropdown-menu>
          <van-dropdown-item  :title="tit1" ref="item">
            <van-sidebar v-model="activeKey" id="lis1">
              <van-sidebar-item @click="fenl(v)" class="lists1" v-for="(v,i) in foods1" :key="i" :title="v.title" />
            </van-sidebar>
<div class="listRight">111111111</div>
          </van-dropdown-item>
          <van-dropdown-item  title="排序" ref="item">
            <div>排序</div>
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
            tit1:'分类'
          }
      },
      created(){
          this.title=this.$route.query;
        this.axios.get('https://elm.cangdu.org/v2/index_entry').then((res)=>{
          this.foods1 = FunData(res.data)[0];
          // console.log(res.data);
        }).then(this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762').then((res)=>{
          // console.log(res.data);
          this.food=res.data;
        }))
      },
      methods:{
        fenl(v){
          this.tit1=v.title;
          console.log(v);
        }
      }
    }
    let FunData = (e) => {
      let proportion = 8; //按照比例切割
      let num = 0;
      let _data = [];
      for (let i = 0; i < e.length; i++) {
        if (i % proportion == 0 && i != 0) {
          _data.push(e.slice(num, i));
          num = i;
        }
        if ((i + 1) == e.length) {
          _data.push(e.slice(num, (i + 1)));
        }
      }
      return _data;
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
  #title>a{
    float: left;
    color:white;
    margin-left: .5rem;
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

  /*分类的列表  侧边栏*/
 .listRight{
   width: 60%;
   background: red;
   float: left;
 }
 .lists1{
   line-height: 1rem;
 }
  #lis1{
    width: 40%;
    float: left;
  }

</style>
