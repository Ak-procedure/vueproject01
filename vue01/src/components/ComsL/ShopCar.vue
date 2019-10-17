<template>
  <div id="shopcar">
    <ul v-if="shows">
      <li class="listone">
        <span>购物车</span>
        <span @click="clearLocal">清空</span>
      </li>
      <li v-if="v.zidingyi==0?false:true" v-for="(v,i) in cararr" :key="i">
        <span>{{v.name}}</span>
        <span>￥{{v.specfoods[0]?v.specfoods[0].price:0}}</span>
        <span v-if="v.zidingyi==0||v.zidingyi==undefined?false:true" class="spanone">
                    <span @click="jian(v,i)">—</span>
                    </span>
        <span v-if="v.zidingyi==0||v.zidingyi==undefined?false:true" class="spantwo">{{v.zidingyi==undefined?0:v.zidingyi}}</span>
        <span @click="jia(v,i)" class="spanthree">
                      <span>+</span>
                    </span>
        <!--<span>减</span>-->
        <!--<span>{{v.zidingyi}}</span>-->
        <!--<span>加</span>-->
      </li>
    </ul>
    <div class="checkCar">
      <div @click="showList">
    <span>
     <span :class="allmoney>=20?{bgcafter:true}:{bgcbefore:true}">
       <img src="../../assets/imgs/shopcar.png" alt="">
     </span>
    </span>
      </div>
      <div>
        <p>￥{{get2}}</p>
        <p>配送费￥5</p>
      </div>
      <div>
        <router-link :class="{greens:allmoney>=20?true:false}" @click.native="jiesuan" :to="allmoney>=20?{}:{}">
          {{allmoney>=20?res1:res2}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "ShopCar",
    data() {
      return {
        cararr: [],
        shows: false,
        arrnm: [],
        allmoney: 0,
        res2: '还差￥20起送',
        res1: '去结算',
        sjid: '',
        jwd: ''
      }
    },
    computed: {
      get2() {
        let sum = 0;
        for (let i in this.cararr) {
          let shul = this.cararr[i].zidingyi;
          let pri = this.cararr[i].specfoods[0].price;
          sum += shul * pri
        }
        this.allmoney = sum;
        return sum;
      }
    },
    methods: {
      clearLocal() {
        //清空购物车 并清除本地存储的数据
        this.cararr = [];
        window.localStorage.removeItem('shopcar');
      },
      showList() {
        // console.log(JSON.parse(window.localStorage.getItem('shopcar')));
        let json1 = window.localStorage.getItem('shopcar');
        let arr = JSON.parse(json1);
        this.cararr = arr;
        this.shows = !this.shows;
        //  获取存储的商家id和经纬度
        this.sjid = window.localStorage.getItem('restaurant_id');
        this.jwd = window.localStorage.getItem('geohash');
      },
      jia(v, i) {
        Vue.set(this.arrnm, i, 1);
        if (v.zidingyi == undefined) {
          v.zidingyi = 1
        } else {
          v.zidingyi++
        }
        //获取localStorage数据
        let arrays = [];
        let arrs1 = JSON.parse(window.localStorage.getItem('shopcar'));
        // console.log(arrs1);
        for (let is in arrs1) {
          if (arrs1[is].name == v.name) {
            continue
          }
          arrays.push(arrs1[is])
        }
        arrays.push(v);
        // console.log(arrays);
        let shoparr = JSON.stringify(arrays);
        window.localStorage.setItem('shopcar', shoparr);
      },
      jian(v, i) {
        Vue.set(this.arrnm, i, 1);
        v.zidingyi--;
        if (v.zidingyi <= 0) {
          v.zidingyi = 0
        }
        //获取localStorage数据
        let arrays = [];
        let arrs1 = JSON.parse(window.localStorage.getItem('shopcar'));
        // console.log(arrs1);
        for (let is in arrs1) {
          if (arrs1[is].name == v.name) {
            continue
          }
          arrays.push(arrs1[is])
        }
        arrays.push(v);
        // console.log(arrays);
        let shoparr = JSON.stringify(arrays);
        window.localStorage.setItem('shopcar', shoparr);
      },
      jiesuan() {
        let arrs1 = JSON.parse(window.localStorage.getItem('shopcar'));
        // console.log(arrs1);
  let arrd=[]
        for (let index in arrs1) {
          console.log(arrs1[index].specfoods[0]);
          let entarr = [{
            attrs: [],
            extra: {},
            id: arrs1[index].specfoods[0].food_id,
            name: arrs1[index].specfoods[0].name,
            packing_fee: arrs1[index].specfoods[0].packing_fee,
            price: arrs1[index].specfoods[0].price,
            quantity: arrs1[index].zidingyi,
            sku_id: arrs1[index].specfoods[0].sku_id,
            specs: '默认',
            stock: arrs1[index].specfoods[0].stock
          }];

          arrd.push(entarr)
        }
        console.log(arrd);

        let objs = {
          restaurant_id: this.sjid,
          geohash: this.jwd,
          entities: arrd};
        // console.log(objs);
        this.axios.post('https://elm.cangdu.org/v1/carts/checkout', objs).then((res) => {
          // console.log(res.data);
          this.shows=false;
          this.cararr = [];
          // window.localStorage.removeItem('shopcar');
        }).then(()=>{
          this.$router.push({path:'/qrdingdan'})
        })
      }
    }
  }
</script>

<style scoped>
  #shopcar {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding-bottom: 3.4rem;
  }

  .checkCar {
    width: 100%;
    background-color: #3d3d3f;
    position: absolute;
    bottom: 0;
    display: flex;
    color: white;
  }

  .checkCar > div:nth-child(1) {
    width: 20%;
  }

  .checkCar > div:nth-child(1) > span {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    /*background: #333333;*/
    border: .3rem solid #444444;
    position: absolute;
    top: -0.8rem;
    left: .3rem;
  }

  .checkCar > div:nth-child(1) > span > span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 0;
  }

  .checkCar > div:nth-child(1) > span > span img {
    width: 70%;
    height: 70%;
    margin-left: .5rem;
    margin-top: .5rem;
  }

  .checkCar > div:nth-child(2) {
    width: 45%;
    line-height: 1.4rem;
  }

  .checkCar > div:nth-child(2) > p:nth-child(1) {
    margin-top: .3rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .checkCar > div:nth-child(2) > p:nth-child(2) {
    font-size: .5rem;
  }

  .checkCar > div:nth-child(3) {
    background: #535356;
    width: 35%;
  }

  .checkCar > div:nth-child(3) {
    text-align: center;

  }

  .checkCar > div:nth-child(3) > a {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    line-height: 3.5rem;
    /*margin-left: 0.3rem;*/
  }

  .listone {
    background-color: #eceff1;
    overflow: hidden;
    line-height: 2.5rem;
    display: block;
  }

  .listone > span:nth-child(1) {
    float: left;
    color: #666;
  }

  .listone > span:nth-child(2) {
    float: right;
    color: #666;
    font-weight: 400;
  }

  ul > li {
    line-height: 2.5rem;
    display: flex;
  }

  ul > li > span:nth-child(1) {
    width: 60%;
    padding-left: 1rem;
  }

  ul > li > span:nth-child(2) {
    width: 16%;
    color: #f60;
    font-weight: 600;
  }

  ul > li > span:nth-child(3) {
    width: 8%;
    text-align: center;
  }

  ul > li > span:nth-child(4) {
    width: 8%;
    text-align: center;
  }

  ul > li > span:nth-child(5) {
    width: 8%;
    text-align: center;
  }

  .spanone {
    display: block;
    margin-top: .5rem;
    width: 1.5rem;
    height: 1.6rem;
    line-height: 1.5rem;
    box-sizing: border-box;
    border: 1px solid #3190e8;
    border-radius: 50%;
    color: #3190e8;
    text-align: center;
    font-weight: 800;
    font-size: 0.8rem;
  }

  .spanone > span {
    display: block;
    margin-top: -0.05rem;
  }

  .spanthree {
    display: block;
    margin-top: .5rem;
    box-sizing: border-box;
    width: 1.5rem;
    height: 1.6rem;
    background: #3190e8;
    border-radius: 50%;
    color: white;
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .spanthree > span {
    display: block;
    margin-top: -0.5rem;
  }

  /*.spantwo {*/
  /*width: 1.5rem;*/
  /*line-height: 1.5rem;*/
  /*text-align: center;*/
  /*}*/

  .greens {
    background-color: #4cd964;
    display: block;
    width: 100%;
    height: 100%;
  }

  .bgcbefore {
    background: #666;
  }

  .bgcafter {
    background-color: #3190e8;
  }
</style>
