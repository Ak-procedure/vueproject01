<template>
  <div id="foods">
    <div id="nav">
      <!--向左箭头-->
      <router-link :to="{}">返回</router-link>
      <span>{{getCityRes.address}}</span>
      <router-link :to="{path:'/mine'}">登录/注册</router-link>
    </div>
    <div id="tit">
      <van-swipe class="lbt" indicator-color="white">
        <van-swipe-item>
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(v,i) in foods1"
              :icon="'//fuss10.elemecdn.com'+v.image_url"
              :text="v.title"
              :to="{path:'/fclass',query: v}"
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
              :to="{path:'/fclass',query: v}"
              :key="i"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div id="food">
      <div class="fjsj">附近商家</div>
      <router-link v-for="(v,k) in food" :to="{path:'/shangjia',query:v}" :key="k">
        <van-card
          :thumb="'//elm.cangdu.org/img/'+v.image_path"
       class="spzujian" >
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
    <div id="footer">
      <!--底部导航组件-->
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
        //传递的地址信息
        getCityRes: ''
      }
    },
    created() {
      this.getCityRes = this.$route.query;
      // console.log(this.$route.query);
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

  .foote {
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

  /*顶部*/
  #tit {
    margin-top: 2rem;
  }

  #nav {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    overflow: hidden;
    text-align: center;
    color: white;
  }

  #nav > a:nth-child(1) {
    color: white;
    float: left;
    margin-left: .5rem;
  }

  #nav > span:nth-child(2) {
    display: inline-block;
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #nav > a:nth-child(3) {
    color: white;
    margin-right: .5rem;
    float: right;
  }

  .fjsj {
    margin-top: .5rem;
    background: white;
    padding-left: 1rem;
  }
  .spzujian{
    background: white;
    border-bottom: 1px solid #eeeeee;
  }
</style>
