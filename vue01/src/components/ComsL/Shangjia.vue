<template>
  <div id="SH">
    <div id="Shangjia">
      <div id="header">
        <span class="backS" @click="back">返回</span>
        <!--商家页面的头部描述-->
        <router-link :to="{path:'/ShopDetail',query: getS}">
          <div class="cards">
            <img :src="'//elm.cangdu.org/img/'+getS.image_path">
            <ul>
              <li><h3>{{getS.name}}</h3></li>
              <li class="clear">商家配送/分钟送达/{{getS.piecewise_agent_fee.tips}}<span class="flr">></span></li>
              <li>公告:{{getS.promotion_info}}</li>
              <li>
                {{getS.activities[0]?getS.activities[0].description:null}}
                <span class="flr">1个活动></span></li>
            </ul>
          </div>
        </router-link>
      </div>
      <div>
        <!--vant插件 商品和评价-->
        <van-tabs v-model="active">
          <van-tab>
            <div @click="toshow" slot="title">
              商品
            </div>
            <div class="flexFood">
              <div id="left">
                <van-sidebar v-model="activeKey">
                  <van-sidebar-item @click="showfoods(v)" v-for="(v,i) in shangpin" :key="i" :title="v.name"
                                    :info="v.xs==0?'':v.xs"/>
                </van-sidebar>
              </div>
              <div id="right">
                <div class="fenlei clear">
                  <span class="titBig">{{showF.name}}</span>
                  {{showF.description}}
                  <span>···</span>
                </div>
                <!--具体商品信息-->
                <div v-for="(v,i) in showF.foods" :key="i">
                  <router-link :to="{path:'/shangpinXQ',query:v}" class="right_c">
                    <div>
                      <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="">
                      <!--图片左上角新品标签-->
                      <div class="newFood" v-if="v.attributes[0]?v.attributes[0].icon_name=='新'?true:false:false">
                        <span>新品</span>
                      </div>
                    </div>
                    <div>
                      <div class="resBig">
                        <span>{{v.name}}</span>
                        <!--标题右侧 招牌标签-->
                        <span
                          v-if="v.attributes.length!=0?v.attributes[0]!=null?v.attributes[0].icon_name=='招牌'?true:false:false:false">
                    {{v.attributes[0].icon_name}}
                  </span>
                      </div>
                      <div>{{v.description}}</div>
                      <div class="allP">
                        <p>{{v.tips}}</p>
                        <span
                          :class="v.activity?{orange:true}:{orange:false}">{{v.activity?v.activity.image_text:''}}</span>
                        <p class="price">￥
                          <span>{{v.specfoods[0].price}}</span>
                          起</p>
                      </div>
                    </div>
                  </router-link>
                  <!--下部加号和规格-->
                  <div class="foot">
                    <span v-if="v.specifications.length>=1?true:false" class="xgg" @click="chooseGG(v,i)">选规格</span>
                    <div v-else class="countjia">
                    <span v-if="v.zidingyi==0||v.zidingyi==undefined?false:true" @click="addShopCar3(v,i)"
                          class="spanone">
                      <!--减-->
                    <span>—</span>
                    </span>
                      <span v-if="v.zidingyi==0||v.zidingyi==undefined?false:true" class="spantwo">{{v.zidingyi==undefined?0:v.zidingyi}}</span>
                      <span class="spanthree" :class="arrnm[i]>0?{a:true}:{b:true}" @click="addShopCar2($event,v,i)">
                      <!--加入购物车 ----------------------------------->
                      <span>+</span>
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <!--评价  ---------------------->
          <van-tab>
            <div @click="tonoshow" slot="title">
              评价
            </div>
            <div class="pingfen">
              <div class="pf_left">
                <p>{{getS.rating}}</p>
                <p>综合评分</p>
                <p>高于周边商家76.9%</p>
              </div>
              <div class="pf_right">
                <div><span>服务态度</span><span>
    <van-rate v-model="starV.overall_score" allow-half size="8" void-icon="star" void-color="#eee"/>
              </span></div>
                <div><span>菜品评价</span><span>
   <van-rate v-model="starV.food_score" allow-half size="8" void-icon="star" void-color="#eee"/>
              </span></div>
                <div><span>送达时间</span><span>{{starV.deliver_time}}分钟</span></div>
              </div>
            </div>
            <!--词条-->
            <div class="pingluns">
              <div class="evaluate_classify">
                <div v-for="(v, i) in pingjia" :key="i">
                  <p @click="checkit(i)"
                     :style="{background:index==i?'#3190e8':' #ebf5ff',color:index==i?'#ffffff':' #666'}"
                     :class="(v.name)=='不满意'?{satisfaction:true}:{rest:true}">
                    <span>{{v.name}}</span>
                    <span>({{v.count}})</span>
                  </p>
                </div>
                <div style="clear: both;"></div>
              </div>
            </div>
            <!--评论详情-->
            <div class="pinglunxq">
              <ul class="pllists">
                <li v-for="(v,i) in yhpj" :key="i">
                  <div class="userHeaderImg">
                    <!--头像-->
                    <img
                      :src="v.avatar==''?'//elm.cangdu.org/img/default.jpg':'https://fuss10.elemecdn.com/'+v.avatar+'.jpeg'">
                    <!--<span></span>-->
                  </div>
                  <div class="userpingl">
                    <p>
                      <span>{{v.username}}</span>
                      <span>{{v.rated_at}}</span>
                    </p>
                    <p>
                      <van-rate v-model="starV.food_score" allow-half size="5" gutter="0" void-icon="star"
                                void-color="#eee"/>
                      <span>
        {{v.time_spent_desc}}</span>
                    </p>
                    <p>
                      <img v-for="(n,m) in v.item_ratings" :src="chuli(n)" alt="">
                    </p>
                    <p>
                      <span v-for="(x,y) in v.item_ratings ">{{x.food_name}}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <!--规格弹框-->
      <div id="GG" v-if="GGshow">
        <div>
          <ul class="lists2">
            <li><span>werwer</span>
              <span @click="guanbi()">x</span>
            </li>
            <li>规格</li>
            <li>
              <span :class="{changeToBlue:ind==m?true:false}" class="choseGg" @click="guigeqr(n,m)"
                    v-for="(n,m) in ggarr[0].values" :key="m">{{n}}</span>
            </li>
            <li>￥<span>20</span>
              <span @click="addShopCar">加入购物车</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="GIFS" class="gifDH">
      <img src="../../assets/imgs/gif1.gif">
    </div>
    <div id="ssd" v-if="GIF2">
      <div id="animat"></div>
      <span id="anis"></span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Shangjia",
    data() {
      return {
        //规格
        ggarr: '',
        ggg: false,
        shows: true,
        shangpin: '',
        //获取的商品
        getS: '',
        activeKey: 0,
        active: 0,
        //展示的商品
        showF: [],
        //评价的标签
        pingjia: '',
        //用户评价
        yhpj: '',
        //星星
        starV: 5,
        index: 0,
        GGshow: false,
        //暂存规格
        temporary: '',
        ind: 0,
        chooseTrue: false,
        clickindex: 0,
        arrnm: [],
        guigeobj: '',
        GIFS: false,
        GIF2: false
      }
    },
    created() {
      Math.random() > 0.5 ? this.GIFS = true : this.GIF2 = true;
      this.$store.state.shopcar = true;
      this.$store.state.showOrNot = false;
      this.getS = JSON.parse(window.localStorage.getItem('shangJXX'));
      //获取评分  星星
      this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/3269/ratings/scores').then((res) => {
        this.starV = res.data;
      });
      //通过id搜索商家
      this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.getS.id).then((res) => {
        this.shangpin = res.data;
      }).then(() => {
        //控制动画
        this.GIFS = false;
        this.GIF2 = false;
        if (this.shangpin[0] != undefined) {
          this.showfoods(this.shangpin[0])
        }
        else {
          return
        }
      })
      //获取评价
        .then(() => {
          this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then((res) => {
            this.pingjia = res.data;
          })
        })
        //获取具体评价信息
        .then(() => {
          this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10').then((res) => {
            this.yhpj = res.data;
          })
        });
      //把商家id和经纬度本地存储起来
      if (this.getS == undefined) {
        return
      } else {
        let restaurant_id = this.getS.id;
        let geohash = this.getS.location[1] + ',' + this.getS.location[0];
        window.localStorage.setItem('restaurant_id', restaurant_id);
        window.localStorage.setItem('geohash', geohash);
      }
    },
    methods: {
      checkit(index) {
        this.index = index;
      },
      back() {
        this.$router.go(-1)
      },
      showfoods(e) {
        this.showF = e;
        //  获取local添加过的数量
        let cara = JSON.parse(window.localStorage.getItem('shopcar'));
        for (let in1 in cara) {
          for (let index in this.showF.foods) {
            if (cara[in1].name == this.showF.foods[index].name) {
              this.showF.foods[index] = cara[in1];
            }
          }
        }
        let xs = 0;
        for (let sss in this.showF.foods) {
          if (this.showF.foods[sss].zidingyi === undefined) {
            this.showF.foods[sss].zidingyi = 0
          }
          xs += this.showF.foods[sss].zidingyi
        }
        e.xs = xs;
      },
      chuli(x) {
        let v = x.image_hash;
        let news_0 = v.charAt(0);
        let news_1 = v.charAt(1);
        let news_2 = v.charAt(2);
        news_0 = news_0 + '/';
        let news_3 = news_1 + news_2 + '/';
        return 'https://fuss10.elemecdn.com/' + news_0 + news_3 + v.slice(3) + '.jpeg';
      },
      chooseGG(v, i) {
        this.GGshow = true;
        this.ggarr = v.specifications;
        this.guigeobj = v
      },
      guanbi() {
        this.GGshow = false;
      },
      guigeqr(n, m) {
        this.ind = m;
        this.temporary = n;
      },
      //选择规格并加入购物车
      addShopCar(v, i) {
        Vue.set(this.arrnm, i, 1);
        if (this.guigeobj.zidingyi == undefined) {
          this.guigeobj.zidingyi = 1
        } else {
          this.guigeobj.zidingyi++
        }
        //获取localStorage数据
        let arrays = [];
        let arrs1 = JSON.parse(window.localStorage.getItem('shopcar'));
        for (let is in arrs1) {
          if (arrs1[is].name == this.guigeobj.name) {
            continue
          }
          arrays.push(arrs1[is])
        }
        arrays.push(this.guigeobj);
        let shoparr = JSON.stringify(arrays);
        window.localStorage.setItem('shopcar', shoparr);
        this.GGshow = false;
        this.$parent.pipe();
      },
      //购物车数量减少
      addShopCar3(v, i) {
        Vue.set(this.arrnm, i, 1);
        v.zidingyi--;
        if (v.zidingyi <= 0) {
          v.zidingyi = 0
        }
        //获取localStorage数据
        let arrays = [];
        let arrs1 = JSON.parse(window.localStorage.getItem('shopcar'));
        for (let is in arrs1) {
          if (arrs1[is].name == v.name) {
            continue
          }
          arrays.push(arrs1[is])
        }
        arrays.push(v);
        let shoparr = JSON.stringify(arrays);
        window.localStorage.setItem('shopcar', shoparr);
        this.$parent.pipe();
      },
      //购物车数量增加
      addShopCar2(e, v, i) {
      let cs=  document.getElementsByClassName('spanthree');
     let div1= document.createElement('div');
     div1.innerHTML='+1';
     div1.style.fontSize='0.8rem';
     div1.style.width='30px';
     div1.style.height='30px';
     div1.style.borderRadius='50%';
     div1.style.background='#3190e8';
     div1.style.position='fixed';
     div1.style.zIndex=1000;
     div1.style.top=e.clientY-15+'px';
     div1.style.left=e.clientX-15+'px';
     div1.style.transition='all 1s';
     cs[i].appendChild(div1);
  setTimeout(function () {
    div1.style.top='610px';
    div1.style.left='10px';
  },200);
setTimeout(function () {
  cs[i].removeChild(div1);
},1000);
        Vue.set(this.arrnm, i, 1);
        if (v.zidingyi == undefined) {
          v.zidingyi = 1
        } else {
          v.zidingyi++
        }
        //获取localStorage数据
        let arrays = [];
        let arrs1 = JSON.parse(window.localStorage.getItem('shopcar'));
        for (let is in arrs1) {
          if (arrs1[is].name == v.name) {
            continue
          }
          arrays.push(arrs1[is])
        }
        arrays.push(v);
        let shoparr = JSON.stringify(arrays);
        window.localStorage.setItem('shopcar', shoparr);
        this.$parent.pipe();
      },
      tonoshow() {
        //  隐藏
        this.$store.state.shopcar = false;
      },
      toshow() {
        //  隐藏
        this.$store.state.shopcar = true;
      },
    }
  }

</script>

<style scoped>
  #SH,
  #Shangjia {
    width: 100%;
    height: 100%;
  }

  .gifDH {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10000;
  }

  .gifDH > img {
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
    display: flex;
    flex-flow: row wrap;
    color: #666;
  }

  .right_c > div:nth-child(1) {
    background: white;
    width: 20%;
    position: relative;
  }

  .newFood {
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    width: 3rem;
    height: 3rem;
    background-color: #4cd964;
    transform: rotateZ(-45deg);
    text-align: center;
  }

  .newFood > span {
    position: absolute;
    bottom: .05rem;
    left: 0;
    right: 0;
    font-size: .3rem;
    color: white;
  }

  .right_c > div:nth-child(2) {
    box-sizing: border-box;
    background: white;
    padding-left: .5rem;
    padding-top: .5rem;
    width: 80%;
    position: relative;
    margin-left: -.05rem;
  }

  .right_c > div:nth-child(3) {
    line-height: 2rem;
    width: 100%;
    background: white;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: .3rem;
  }

  .foot {
    overflow: hidden;
    background: white;
    margin-bottom: .5rem;
  }

  .xgg {
    float: right;
    margin-right: 1rem;
    font-size: 0.8rem;
    color: white;
    background-color: #3190e8;
    border: 1px solid #3190e8;
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
  }

  .right_c > div:nth-child(1) > img {
    margin-top: .5rem;
    width: 3.4rem;
    height: 3.4rem;
    margin-left: .3rem;
  }

  .resBig {
    overflow: hidden;
  }

  .resBig span:nth-child(1) {
    float: left;
    font-size: 1rem;
    font-weight: bold;
  }

  .resBig span:nth-child(2) {
    border: .05rem solid rgb(240, 115, 115);
    line-height: 1rem;
    padding: 0 0.2rem;
    border-radius: .5rem;
    font-size: .8rem;
    color: rgb(240, 115, 115);
    margin-right: 2rem;
    float: right;
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
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .pingluns > span {
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

  .cards {
    overflow: hidden;
  }

  .cards img {
    width: 6rem;
    height: 6rem;
    float: left;
    margin: 1rem .5rem 0rem;
  }

  /*评价标签*/
  .evaluate_states, .rest, .satisfaction {
    padding: 0.2rem;
    margin: 0.15rem;
    border-radius: 0.15rem;
    float: left;
  }

  .evaluate_states {
    color: #fff;
    background: #3190e8;
  }

  .rest {
    color: #6d7885;
    background: #ebf5ff;
  }

  .satisfaction {
    color: #aaa;
    background: #f5f5f5;
  }

  .orange {
    font-size: .5rem;
    color: rgb(241, 136, 79);
    border: 1px solid rgb(240, 115, 115);
    border-radius: .3rem;
  }

  /*评论详情*/
  /*评论循环创建的列表*/
  .pllists > li {
    display: flex;
  }

  /*评论  用户头像*/
  .userHeaderImg {
    width: 15%;
  }

  .userHeaderImg > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-top: .4rem;
    margin-left: .8rem;
  }

  .pllists > li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  }

  /*评论  右侧*/
  .userpingl {
    box-sizing: border-box;
    padding-left: .8rem;
    width: 85%;
  }

  .userpingl > p:nth-child(1) {
    overflow: hidden;
  }

  .userpingl > p:nth-child(1) > span:nth-child(1) {
    float: left;
    color: #666;
    margin-bottom: .2rem;
  }

  .userpingl > p:nth-child(1) > span:nth-child(2) {
    float: right;
    margin-right: .5rem;
    font-size: .4rem;
    color: #999;
  }

  .userpingl > p:nth-child(2) > span {
    font-size: .55rem;
    color: #666;
    margin-left: .15rem;
  }

  .userpingl > p:nth-child(3) img {
    width: 3rem;
    height: 3rem;
    margin: 0 .4rem;
  }

  .userpingl > p:nth-child(4) span {
    display: inline-block;
    width: 2.2rem;
    border: 1px solid #999;
    font-size: .55rem;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-radius: .3rem;
    padding: 0 .2rem;
    margin: 0 .2rem;
  }

  .backS {
    position: absolute;
    left: .3rem;
    top: .1rem;
    color: white;
    font-size: 1.2rem;
  }

  #GG {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  #GG > div {
    width: 18rem;
    /*height: 12rem;*/
    background: white;
    border-radius: 0.5rem;
    margin: 13rem auto 0;
    z-index: 999;
  }

  .lists2 > li {
    line-height: 2.5rem;
    padding-left: 0.4rem;
  }

  .lists2 > li:nth-child(1) {
    text-align: center;
    position: relative;
  }

  .lists2 > li:nth-child(1) > span:nth-child(2) {
    position: absolute;
    right: 1rem;
  }

  .lists2 > li:nth-child(4) {
    margin-top: 2rem;
    background: #f9f9f9;
    color: #ff6000;
    overflow: hidden;
    line-height: 3rem;
    border-radius: 0.4rem;
  }

  .lists2 > li:nth-child(4) > span:nth-child(1) {
    font-size: 1.3rem;
  }

  .lists2 > li:nth-child(4) > span:nth-child(2) {
    line-height: 2rem;
    display: block;
    float: right;
    color: white;
    background: #3199e8;
    padding: 0 0.5rem;
    margin-top: 0.6rem;
    margin-right: 0.7rem;
    border-radius: 0.4rem;
  }

  .choseGg {
    border: 0.05rem solid #999999;
    padding: 0.5rem 0.8rem;
    border-radius: 0.3rem;
  }

  .changeToBlue {
    border: 0.05rem solid #3199e8;
    color: #3199e8;
  }

  /*购物车*/
  .countjia {
    float: right;
    line-height: 2.2rem;
    margin-right: 1rem;
    padding-bottom: 0.5rem;
  }

  .spanone {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    box-sizing: border-box;
    border: 1px solid #3190e8;
    border-radius: 50%;
    color: #3190e8;
    text-align: center;
    font-weight: 800;
    float: left;
    font-size: 0.8rem;
  }

  .spanthree {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #3190e8;
    border-radius: 50%;
    color: white;
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;
    float: left;
    position: relative;
  }
.spanthree>div{
  background: gold;
}
  .countjia > span > span {
    display: block;
    margin-top: -0.4rem;
  }

  .spantwo {
    display: block;
    float: left;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }

  /*动画*/
  @keyframes AAA {
    0% {
      background-position: 0% 0%;
    }
    14.2% {
      background-position: 0% 0%;
    }
    14.2001% {
      background-position: 0% 16%;
    }
    28.4% {
      background-position: 0% 16%;
    }
    28.4001% {
      background-position: 0% 33%;
    }
    42.6% {
      background-position: 0% 33%;
    }
    42.6001% {
      background-position: 0% 50%;
    }
    56.8% {
      background-position: 0% 50%;
    }
    56.8001% {
      background-position: 0% 67%;
    }
    71% {
      background-position: 0% 67%;
    }
    71.0001% {
      background-position: 0% 84%;
    }
    85.2% {
      background-position: 0% 84%;
    }
    85.2001% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 100%;
    }

  }

  @keyframes bbb {
    0% {
      top: 0px;
    }
    50% {
      top: 4rem;
    }
    100% {
      top: 0px;
    }
  }

  @keyframes ccc {
    0% {
      width: 4rem;
      height: 1rem;
    }
    100% {
      width: 8rem;
      height: 2rem;
    }
    0% {
      width: 4rem;
      height: 1rem;
    }

  }

  #ssd {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    z-index: 1000;
  }

  #animat {
    width: 5rem;
    height: 5rem;
    margin: 70% auto;
    overflow: hidden;
    background: url(../../assets/imgs/img.png) no-repeat;
    background-size: 5rem 35rem;
    background-position: 0 0;
    /*border: 1px solid rosybrown;*/
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: AAA 4.2s linear infinite, bbb 0.5s linear infinite;
  }

  #anis {
    background: rgb(211, 211, 211);
    border-radius: 50%;
    display: block;
    margin: 105% auto;
    width: 8rem;
    height: 2rem;
    animation: ccc .6s linear infinite alternate-reverse;
  }


</style>
