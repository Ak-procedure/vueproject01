<template>
  <div id="foods">
    <div id="nav">
      <!--向左箭头-->
      <span @click="back">返回</span>
      <router-link :to="{path:'/jump'}">{{getCityRes.address}}</router-link>
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
        <!--<van-card-->
        <!--:thumb="'//elm.cangdu.org/img/'+v.image_path"-->
        <!--class="spzujian" >-->
        <div class="spzujian">
          <div>
            <img :src="'//elm.cangdu.org/img/'+v.image_path" alt=""></div>
          <div class="cards">
            <ul>
              <li>
                <span class="bigtitle">
                  <span>品牌</span>
                  {{v.name}}</span>
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
              <li class="threeLis">
                <span>
                ￥{{v.float_minimum_order_amount}}起送/{{v.piecewise_agent_fee.tips}}
                </span>
                <span>
                  <span>{{v.distance}}</span>
                  <span>/{{v.order_lead_time}}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <!--</van-card>-->
      </router-link>
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
      this.$store.state.showOrNot = true;
      this.getCityRes = this.$route.query;
      // console.log(this.$route.query);
      this.axios.get('https://elm.cangdu.org/v2/index_entry').then((res) => {
        // console.log(FunData(res.data));
        this.foods1 = FunData(res.data)[0];
        this.foods2 = FunData(res.data)[1];
      }).then(() => {
        this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762').then((res) => {
          console.log(res.data);
          this.food = res.data
        })
      })
    },
    methods: {
      back() {
        this.$router.go(-1)
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
  #foods {
    background: #f2f2f2;
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

  .bigtitle > span {
    content: "\54C1\724C";
    display: inline-block;
    font-size: .5rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }

  .cards ul li {
    overflow: hidden;
    line-height: 1.8rem;
    padding-right: .3rem;
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
    font-family: Microsoft Yahei;
    font-size: .4rem;
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
  }

  /*准时达*/
  .zsd {
    font-family: Microsoft Yahei;
    font-size: .4rem;
    color: #3190e8;
    border: .05rem solid #3190e8;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
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

  #nav > span:nth-child(1) {
    color: white;
    float: left;
    margin-left: .5rem;
  }

  #nav > a:nth-child(2) {
    display: inline-block;
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
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

  .spzujian {
    background: white;
    border-bottom: 1px solid #eeeeee;
    display: flex;
  }

  .spzujian > div:nth-child(1) {
    width: 20%;
  }

  .spzujian > div:nth-child(2) {
    width: 80%;
  }

  .spzujian > div:nth-child(1) > img {
    margin-top: .6rem;
    margin-left: .3rem;
    width: 4rem;
    height: 4rem;
  }

  .threeLis {
    font-size: .5rem;
    color: #666;
    overflow: hidden;
  }

  .threeLis > span:nth-child(2) {
    float: right;
  }

  .threeLis > span:nth-child(2) > span:nth-child(2) {
    color: #3190e8;
  }
</style>
