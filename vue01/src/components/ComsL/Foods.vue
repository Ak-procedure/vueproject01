<template>
  <div id="foods">
    <div id="nav">
      <van-nav-bar class="van1"  title="文峰区" left-arrow>
        <van-icon name="search" slot="left" />
      </van-nav-bar>
    </div>
    <div id="tit">
      <van-swipe class="lbt" indicator-color="white">
        <van-swipe-item>
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(v,i) in foods1"
              :icon="'//fuss10.elemecdn.com'+v.image_url"
              :text="v.title"
              :to="{path:'/jump2'}"
              :key="i"
            />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(v,i) in foods2"
              :icon="'//fuss10.elemecdn.com'+v.image_url"
              :text="v.title"
              :to="{path:'/jump2'}"
              :key="i"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div id="food">
      <router-link v-for="(v,k) in food" :to="{path:'/shangjia',query:v}" :key="k">
        <van-card
          :thumb="'//elm.cangdu.org/img/'+v.image_path"
        >
          <div slot="tags" class="cards">
            <ul>
              <li><span class="bigtitle">{{v.name}}</span>
                <span class="bzp">
         <span v-for="(x,y) in v.supports" :key="y">{{x.icon_name}}</span>
       </span>
              </li>
              <li>
                <span class="ys">{{v.rating}}月售{{v.recent_order_num}}单</span>
                <span class="fnzsd">
                <span class="fn">{{v.delivery_mode.text}}</span>
                <span class="zsd"> {{v.supports[1].name}}</span>
                </span>
              </li>
              <li>{{v.float_minimum_order_amount}}起送/{{v.piecewise_agent_fee.tips}}</li>
            </ul>
          </div>
        </van-card>
      </router-link>
    </div>
    <div id="footer">
      <van-tabbar class="foote" v-model="active">
        <van-tabbar-item icon="home-o">外卖</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="setting-o">订单</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Foods",
    data() {
      return {
        foods1: '',
        foods2: '',
        food: '',
        active:0
      }
    },
    created() {
      this.axios.get('https://elm.cangdu.org/v2/index_entry').then((res) => {
        // console.log(FunData(res.data));
        this.foods1 = FunData(res.data)[0];
        this.foods2 = FunData(res.data)[1];
      }).then(() => {
        this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762').then((res) => {
          // console.log(res.data);
          this.food = res.data
        })
      })
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
  #foods {
    background: #f2f2f2;
    height: 100%;
  }
.foote{
  border-top: 0.1px solid #e2e2e2;
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
  }

  .bzp {
    float: right;
  }
  .bzp>span{
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;
  }

  /*月售*/
  .ys{
    font-size: .4rem;
    color: #666;
  }
  /*蜂鸟*/
  .fn{
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
  }
  /*准时达*/
  .zsd{
    color: #3190e8;
    border: .025rem solid #3190e8;
  }
  .fnzsd{
    float: right;
  }
.van1{
  background: #3190e8;
}
 
</style>
