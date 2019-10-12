<template>
  <div id="Shangjia">
    <div id="header">
      <router-link :to="{}">
          <div class="cards">
            <img :src="'//elm.cangdu.org/img/'+getS.image_path">
            <ul>
              <li><h3>{{getS.name}}</h3></li>
              <li class="clear">商家配送/分钟送达/{{getS.piecewise_agent_fee.tips}}<span class="flr">></span></li>
              <li>公告:{{getS.promotion_info}}</li>
              <li>{{getS.activities[0]?getS.activities[0].description:null}}
              <span class="flr">1个活动></span></li>
            </ul>
          </div>
      </router-link>
    </div>
    <div>
      <van-tabs v-model="active">

        <van-tab title="商品">
          <div class="flexFood">
            <div id="left">
              <van-sidebar v-model="activeKey">
                <van-sidebar-item @click="showfoods(v)" v-for="(v,i) in shangpin" :key="i" :title="v.name"/>
              </van-sidebar>
            </div>
            <div id="right">
              <div class="fenlei clear">
                <span class="titBig">{{showF.name}}</span>
                {{showF.description}}
                <span>···</span>
              </div>
              <van-card
                class="right_c"
                v-for="(v,i) in showF.foods"
                :key="i"
                :desc="v.description"
                :thumb="'//elm.cangdu.org/img/'+v.image_path">
                <div class="resBig" slot="title">{{v.name}}</div>
                <div slot="tags" class="allP">
                  <p>{{v.tips}}</p>
                  <p class="price">￥
                    <span>{{v.specfoods[0].price}}</span>
                    起</p>
                </div>
                <div slot="footer">
                  <span>+</span>
                </div>
              </van-card>
            </div>
          </div>
        </van-tab>
        <van-tab title="评价">
          <div class="pingfen">
            <div class="pf_left">
              <p>{{getS.rating}}</p>
              <p>综合评分</p>
              <p>高于周边商家76.9%</p>
            </div>
            <div class="pf_right">
              <div><span>服务态度</span><span>
                <van-rate
                  v-model="starV.overall_score"
                  allow-half
                  void-icon="star"
                  void-color="#eee"
                />
              </span></div>
              <div><span>菜品评价</span><span>
                  <van-rate
                    v-model="starV.food_score"
                    allow-half
                    void-icon="star"
                    void-color="#eee"
                  />
              </span></div>
              <div><span>送达时间</span><span>{{starV.deliver_time}}分钟</span></div>
            </div>
          </div>
          <!--词条-->
          <div class="pingluns">
            <span href="###" v-for="(v,i) in pingjia" :key="i">{{v.name}}({{v.count}})</span>
          </div>
          <!--评论详情-->
          <div class="pinglunxq">
            <div class="pl1" v-for="(v,i) in yhpj" :key="i">
              <div class="pjleft"></div>
              <ul class="pjright">
                <li>
                  <span>{{v.username}}</span>
                  <span>{{v.rated_at}}</span>
                </li>
                <li>{{v.time_spent_desc}}</li>
              </ul>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Shangjia",
    data() {
      return {
        shangpin: '',
        //获取的商品
        getS: '',
        activeKey: 0,
        active: 0,
        //展示的商品
        showF: '',
        //评价的标签
        pingjia: '',
        //用户评价
        yhpj: '',
        //星星
        starV:5
      }
    },
    created() {
      console.log(this.$route.query);
      this.getS = this.$route.query;
      //获取评分  星星
      this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/3269/ratings/scores').then((res)=>{
        this.starV=res.data;
        // console.log(res.data);
      });
      //通过id搜索商家
      this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.$route.query.id).then((res) => {
        // console.log(res.data);
        this.shangpin = res.data;
      }).then(()=>{
        this.showfoods(this.shangpin[0])
      })
      //获取评价
        .then(() => {
          this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then((res) => {
            this.pingjia = res.data;
            // console.log(res.data);
          })
        })
        //获取具体评价信息
        .then(() => {
          this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10').then((res) => {
            this.yhpj = res.data;
            // console.log(res.data);
          })
        })
    },
    methods: {
      showfoods(e) {
        // console.log(e);
        this.showF = e
      }
    }
  }

</script>

<style scoped>
  #Shangjia {
    width: 100%;
    height: 100%;
  }

  .titBig {
    font-size: 1.5rem;
    font-weight: bold;
  }

  #header {
    background-color: rgba(119, 103, 137, .43);
  }

  .flr {
    float: right;
    margin-right: .5rem;
  }

  .clear {
    overflow: hidden;
  }

  .flexFood {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #left {
    width: 20%;
    height: 34.87rem;
    overflow: auto;
  }

  #right {
    overflow: auto;
    width: 80%;
    height: 34.87rem;
  }

  .price {
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
  }

  .price > span {
    font-size: 1rem;
  }

  .allP p {
    margin-top: .5rem;
  }

  .right_c {
    overflow: hidden;
  }

  .resBig {
    font-size: 1rem;
    font-weight: bold;
  }

  /*评分*/
  .pingfen {
    display: flex;
    width: 100%;
    height: 7rem;
    margin-top: .05rem;
    background: white;
  }

  .pf_left {
    width: 40%;
    text-align: center;
  }

  .pf_left > p {
    margin: .5rem 0;
  }

  .pf_left > p:nth-child(1) {
    font-size: 2rem;
    color: #f60;
  }

  .pf_left > p:nth-child(2) {
    font-size: .65rem;
    color: #666;
    margin-bottom: .1rem;
  }

  .pf_left > p:nth-child(3) {
    font-size: .4rem;
    color: #999;
  }

  .pf_right {
    width: 60%;
    padding-top: .8rem;
    /*background: greenyellow;*/
  }

  .pf_right > div {
    margin: .5rem 0;
  }

  .pf_right > div > span:nth-child(1) {
    color: #666;
    margin-right: .5rem;
  }

  /*评论*/
  .pingluns {
    margin-top: .5rem;
    background-color: #fff;
    padding: .5rem;
    /*height: 8rem;*/
    overflow: hidden;
  }

  .pingluns > span {
    /*font-size: .6rem;*/
    float: left;
    color: #6d7885;
    padding: .3rem;
    background-color: #ebf5ff;
    border-radius: .2rem;
    border: 1px;
    margin: 0 .4rem .2rem 0;
  }

  /*评论详情*/
  .pinglunxq {
    background: white;
    width: 100%;
    /*height: 8rem;*/
  }

  .pl1 {
    width: 90%;
    margin: 0 auto;
    height: 5rem;
    border-top: .5px solid rgba(0, 0, 0, 0.1);
  }

  .cards > ul > li {
    line-height: 2rem;
    color: #fff;
    font-size: .5rem;
  }

  .cards > ul > li:nth-child(1) {
    margin-top: .5rem;
    font-size: 1.2rem;
  }
  .cards > ul > li:nth-child(3) {
    margin-bottom: 1.3rem;
  }
  .cards > ul > li:nth-child(4) {
    margin-left: 1rem;
  }
  .cards{
    overflow: hidden;
  }
.cards img{
  width: 6rem;
  height: 6rem;
  float: left;
  margin: 1rem .5rem 0rem ;
}
  /*购物车组件*/
</style>
