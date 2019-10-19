<template>
  <div class="confirmOrderContainer">
    <div>
      <!--头部 确认订单-->
      <div id="head_top">
        <span class="head_goback" @click="back"><</span>
        <span class="title_text">确认订单</span>
        <i @click="toMine" class="iconfont icon-denglu" id="Rentou"></i>
      </div>
      <!--请添加一个收货地址-->
      <router-link :to="{path:'/tianjiad'}" class="address_container">
        <div class="address_empty_left">
          <i  class="iconfont icon-dizhi"></i>
          <span class="add_address">请添加一个收货地址</span>
        </div>
        <span>></span>
      </router-link>
      <!--送达时间-->
      <router-link :to="{}" class="delivery_model container_style">
        <p class="deliver_text">送达时间</p>
        <div class="deliver_time">
          <p>尽快送达 | 预计 16:03</p>
          <p>蜂鸟专送</p>
        </div>
      </router-link>
      <!--支付方式-->
      <div class="container_style">
        <router-link :to="{}" class="header_style">
          <span>支付方式</span>
          <div class="more_type">
            <span>在线支付</span>
            <span>></span>
          </div>
        </router-link>
        <router-link :to="{}" class="hongbo">
          <span>红包</span>
          <span>暂时只在饿了么 APP 中支持</span>
        </router-link>
      </div>
      <!--xxx-->
      <div class="food_list">
        <div>
          <img src="//elm.cangdu.org/img/16dbb68aca356030.jpg">
          <span>嗷嗷</span>
        </div>
        <ul>
          <li class="food_item_style" v-for="(v,i) in dingdanarr" :key="i">
            <p class="food_name">{{v.name}}</p>
            <div class="num_price">
              <span>x {{v.zidingyi}}</span>
              <span>¥{{v.specfoods[0].price}}</span>
            </div>
          </li>
        </ul>
        <div class="food_item_style">
          <p class="food_name">餐盒</p>
          <div class="num_price">
            <span></span>
            <span>¥{{packM}}</span>
          </div>
        </div>
        <div class="food_item_style">
          <p class="food_name">配送费</p>
          <div class="num_price">
            <span></span>
            <span>¥ 4</span>
          </div>
        </div>
        <div class="food_item_style total_price">
          <p class="food_name">订单 ¥{{money}}</p>
          <div class="num_price">
            <span>待支付 ¥{{money}}</span>
          </div>
        </div>
      </div>
      <!--订单备注-->
      <div class="container_style">
        <router-link :to="{path:'/dingdanbeizhu'}" class="header_style">
          <span>订单备注</span>
          <div class="more_type">
            <span class="ellipsis">口味、偏好等</span>
            <span>></span>
          </div>
        </router-link>
        <router-link :to="{path:'/fapiao'}" class="hongbo">
          <span>发票抬头</span>
          <div class="more_type">
            <span>商家不支持开发票</span>
            <span>></span>
          </div>
        </router-link>
      </div>
      <!--待支付，确认下单-->
      <div class="foots">
        <div>待支付￥{{money}}</div>
        <div>确认下单</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QRdingdan_z",
    data() {
      return {
        showOrNot: true,
        //订单数组
        dingdanarr:[],
        //打包费
        packM:0,
        money:0
      }
    },
    created() {
      this.$store.state.shopcar = false;
      this.$store.state.showOrNot = false;
      let locArr=JSON.parse(window.localStorage.getItem('shopcar'));
      this.dingdanarr=locArr;
      console.log(locArr);
      let packPrice=0
      let allMoney=0
      for (let i in locArr) {
        packPrice+=locArr[i].specfoods[0].packing_fee
        allMoney+=locArr[i].specfoods[0].price*locArr[i].zidingyi
      }
      this.packM=packPrice
      this.money=allMoney+packPrice+4
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      change() {
        this.showOrNot = true;
      },
      change2() {
        this.showOrNot = false;
      },
      toMine(){
        this.$router.push({path:'/Mine'})
      }
    },
  }
</script>

<style scoped>
  .confirmOrderContainer {
    padding-top: 2.85rem;
    padding-bottom: 4.4rem;
  }

  .container_style {
    background-color: #fff;
    margin-top: .5rem;
    padding: .2rem 1rem;
  }

  /*头部 确认订单*/
  #head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.85rem;
  }

  .head_goback {
    font-size: 2rem;
    color: white;
    margin-left: .4rem;
  }

  .title_text {
    font-size: 1.1rem;
    color: #fff;
    margin-left: 30%;
    font-weight: 700;
    margin-top: -1rem;
  }

  /*登录信息图标*/
  @font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1459672_6y6rvwjukhm.eot?t=1571129034833'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1459672_6y6rvwjukhm.eot?t=1571129034833#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKwAAsAAAAABnwAAAJkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBCIEsATYCJAMICwYABCAFhG0HMBvSBRHVkwtkPxbKTS/mBGVI9dbEA7S/6M2f2b1/gJGgRjaoXhSSohmheHk3N0PXqAjFkpwH/8szko6d5lcAGHA5/W8ABTIPKJc5Jo8JGFga0N4YRVYkkTeMXeASHhNQTiMdhBGjJsyQS6xVAWHD2tVL5bmQJLFsLijWHEzCSQV5dih7ghPh98Mf3UJOphBZdVNWjVxhyPcVdl7cWdppgU8IE6DjBUR0QCLMqE1NEgXGiMqlkmbsqzrwfUWp5FuEvRoF9tdZlRVAAyi6J7ErudXKDKR4tA0mjbqGrEGFHeXCu3ez3ryZodz797NVge94+3ZmgQ/Vi2oF2cnv3/fvsrN7vXTmy5ULbD7mxxfV6+7wiRd7e09qt/CURfHI3btHI+IjPtJbVOLXTNrT6+TLU62zbRcvbvPkGRVA7db0dwwBpZ3xRtwpIFD1Yd8OiysP+J+XT+Dj40uPwkBpZ9LPQ34md+CPiXv2JF1qmbOkims9mTajVmYopxxKsK+ab2N1NW/PEeQ5MUOmjIaIci3IRO+AgvJ6oCg3GOW0N/p4edVtFIVUFu3sAwiquIxMJfcQVfGUTPSvKKjlH4qqhIhyZoXqF5ZntQpWDWfcBS84/mDPnMixioqqb6jfYeesNGS+kJuNwtSPxeyGCXmOLe2jZxEC4hxhBc9hCBkKZ4en9EakLMNAdW/qzxw7ZTjjLniB4w/smRP5w0WVPn9D/Q47tzTUeF/IzY4PJr2xB7mpUq+Ge3mlffRMhABxjmAF8zCEDEr9PIen9MyIRFkM9iDqq+rX18QPKGQtWPos2LOi4gpMOry7Dg==') format('woff2'),
    url('//at.alicdn.com/t/font_1459672_6y6rvwjukhm.woff?t=1571129034833') format('woff'),
    url('//at.alicdn.com/t/font_1459672_6y6rvwjukhm.ttf?t=1571129034833') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('//at.alicdn.com/t/font_1459672_6y6rvwjukhm.svg?t=1571129034833#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-denglu:before {
    content: "\e664";
  }

  #Rentou {
    color: white;
    margin-left: 30%;
    font-size: 1.2rem;
    margin-top: -1rem;
  }

  /*添加收货地址*/
  .address_container {
    min-height: 5.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .88rem;
    background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=") 0 100% repeat-x;
    background-size: auto .16rem;
  }

  .add_address {
    color: #333;
  }

  .address_container > span {
    font-size: 1.5rem;
    color: #999;
  }

  /*地址图标*/
  @font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1459707_ma4bsuuq53j.eot?t=1571129462295'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1459707_ma4bsuuq53j.eot?t=1571129462295#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMIAAsAAAAABpwAAAK6AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBKIE0ATYCJAMICwYABCAFhG0HLxvZBRHVk0FkXxXYxsrA35CssKUmfR3byupQGuDwto9UxvDHBPf7IXi+X/ud+/Z9zLybW7KsiU1/iFQSoUHEp3tUy6sn+4ZNSaKSbZpNqFkQuu5qLgNs1AoVdO8/rwqsA3sXvsxlk4Lq66IkVVVb42pR6PYEDyAsyx08cCrN0zD3IKC2QO7uWt4SLAB8nsvpTaBA5gfKZYxBY00+6gUYbw1ob4wCCbhAQm8Yu2opD/k+BHAhgjSkJK1pQdHgZQLITD0+iObCaLSec0JwqNmrERMbTmpbXQB2wu/LK3LEAYXNADc0sNIR4j+TgshK6REEERDQYRtgAGmABmmpTdcphOg8A5c0EwP7qhV4qG8JF7JXO6L/dbjaDYAwqLgnJVPdarUCQMPhTKB21HuAdnPzcF77Qwtv/Ps7k5Z12ux2shW7byLqjevl2G0/PDseP9vfm+/rL9DFh/78xsHXlN0nKA2t+vl1rpitP5P7qOzHn3adSIU0luakpXE8+j45jYw8Ofn+ZhMjo9jrbL/7SW1SAxZToACwTH3PWPiPv2HdZ6d6+u+4agCudn8Jg5Zp0M8LnM7mEfhryp5N2lNjszq+AnkUmZkgCqDM8GGB/T7cj7X432JecML/Rr2OhKcwcCKO1GwabLiSBwecyIcLqZQfdsWXJYUQ7QyksA4geHEAhQdHMPDiktTsHWwE8A4HvESHC20qZ7qSIFjtpcSMsIT8EupCDIy6yYtqD5HPXSaz6pB/inKqYxD5YTG3wQHlHBumhcdEDJgUPaTgMew6AaMUDRbkV0TjKghY3Yv8QvSKR0rMCEvIL6EuxMBEe/JKnz9EPneZbOF0JU9RTvXoEPlhD3JjGHpx7uWZaeExEQMmRQ8pmIVdJ2Csn9VgQX41IjmuAtKK9TX465v6r9uBonhgqyZkiq7ISH1V1YoCAAA=') format('woff2'),
    url('//at.alicdn.com/t/font_1459707_ma4bsuuq53j.woff?t=1571129462295') format('woff'),
    url('//at.alicdn.com/t/font_1459707_ma4bsuuq53j.ttf?t=1571129462295') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('//at.alicdn.com/t/font_1459707_ma4bsuuq53j.svg?t=1571129462295#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 1.2rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-dizhi:before {
    content: "\e64a";
  }

  /*送达时间*/
  .delivery_model {
    border-left: .3rem solid #3190e8;
    min-height: 5.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .deliver_text {
    font-size: 1.15rem;
    color: #333;
    font-weight: 700;
    padding-left: .44rem;
  }

  .deliver_time {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .deliver_time p:first-of-type {
    color: #3190e8;
  }

  .deliver_time p:nth-of-type(2) {
    font-size: .73rem;
    color: #fff;
    background-color: #3190e8;
    width: 3.5rem;
    margin-top: .73rem;
    text-align: center;
    border-radius: .16rem;
    padding: .15rem;
  }

  /*支付方式*/
  .header_style {
    display: flex;
    justify-content: space-between;
    line-height: 2.9rem;
  }

  .header_style span:first-of-type {
    color: #666;
  }

  .more_type span:first-of-type {
    font-size: .9rem;
    color: #aaa;
    width: 14.6rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }

  .more_type span:nth-of-type(2) {
    font-size: 1.2rem;
    color: #999;
  }

  .hongbo {
    display: flex;
    justify-content: space-between;
    border-top: .037rem solid #f5f5f5;
  }

  .more_type {
    color: #aaa;
  }

  .hongbo span {
    font-size: .9rem;
    color: #aaa;
    line-height: 2.9rem;
  }

  .hongbo > div span:nth-child(2) {
    font-size: 1.2rem;
  }

  /*XXX*/
  .food_list {
    background-color: #fff;
    margin-top: .58rem;
  }

  .food_list > div:nth-of-type(1) {
    padding: 1rem;
    border-bottom: .037rem solid #f5f5f5;
  }

  .food_list > div:nth-of-type(1) img {
    width: 1.75rem;
    height: 1.75rem;
    vertical-align: middle;
  }

  .food_list > div:nth-of-type(1) span {
    font-size: 1.15rem;
    color: #333;
  }

  /*计算*/
  ul {
    padding-top: .73rem;
  }

  .food_item_style {
    display: flex;
    justify-content: space-between;
    line-height: 2.63rem;
    padding: .2rem 1rem;
  }

  .food_name {
    width: 16.1rem;
  }

  .food_item_style p, .food_item_style span {
    font-size: 1rem;
    color: #666;
  }

  .num_price {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .num_price span:first-of-type {
    color: #f60;
  }

  .total_price {
    border-top: .037rem solid #f5f5f5;
  }

  /*待支付，确认下单*/
  .confrim_order {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.92rem;
  }

  .confrim_order p {
    line-height: 2.92rem;
    font-size: 1.1rem;
    color: #fff;
  }

  .confrim_order p:first-of-type {
    background-color: #3c3c3c;
    flex: 5;
    padding-left: .7rem;
  }

  .confrim_order p:nth-of-type(2) {
    flex: 2;
    background-color: #56d176;
    text-align: center;
  }

  .foots {
    width: 100%;
    height: 3rem;
    background:#3c3c3c;
    position: fixed;
    bottom: 0;
    display: flex;
    color: white;
    line-height:3rem;
  }

  .foots > div:nth-child(1) {
    width: 75%;
    padding-left: 1rem;
    box-sizing: border-box;
  }

  .foots > div:nth-child(2) {
    width: 25%;
    background-color: #56d176;
    text-align: center;
  }
</style>
