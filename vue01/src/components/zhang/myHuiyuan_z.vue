<template>
  <div id="mine_z">

    <div class="myde_z">
      <span @click="back" class="pointLeft_z"><</span>
      <span class="text_z">{{msg}}</span>
    </div>

    <div>
      <p class="buy_for">为账户 <span>2432</span> 购买会员</p>
      <div class="vip_prerogative">
        <router-link :to="{}" href="#/vipcard/vipDescription" class="header_style">
          <span class="header_left">会员特权</span>
          <div class="header_right">
            <span>会员说明</span>
            <router-link :to="{}"class="pointR_z">></router-link>
          </div>
        </router-link>
        <div class="vip_detail">
          <div class="vip_detail_left">
            <img  src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII=" height="80" width="70">
          </div>
          <div class="vip_detail_right">
            <h4>减免配送费</h4>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
        </div>
        <div class="vip_detail">
          <div class="vip_detail_left">
            <img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII=" >
          </div>
          <div class="vip_detail_right">
            <h4>减免配送费</h4>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
        </div>
      </div>
      <div class="apply_vip">
        <header  class="header_style">
          <span  class="header_left">开通会员</span>
        </header>
        <div class="apply_vip_buy">
          <div class="apply_vip_buy_left">
            <span>1个月</span>
            <span> ¥20</span>
          </div>
          <div @click="buys" class="apply_vip_buy_right">购买</div>
        </div>
      </div>

      <router-link :to="{path: '/duihuanhuiyuan',query: {msg:'兑换会员'}}"  href="#/vipcard/useCart" class="header_style common_style">
        <span class="header_left">兑换会员</span>
        <div class="header_right">
          <span >使用卡号卡密</span>
          <div class="pointR_z">></div>
        </div>
      </router-link>

      <router-link :to="{}" href="#/vipcard/invoiceRecord" class="header_style common_style">
        <span class="header_left">购买记录</span>
        <div class="header_right">
          <span>开发票</span>
          <div class="pointR_z">></div>
        </div>
      </router-link>

    </div>

  </div>
</template>

<script>
  export default {
    name: "myHuiyuan_z",
    data(){
      return{
        msg:''
      }
    },
    created(){
      this.msg=this.$route.query.msg
    },
    methods:{
      back() {
        this.$router.go(-1)
      },
      buys(){
        this.$router.push({path:'/buyhy'})
      }
    }
  }
</script>

<style scoped>
  #mine_z {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .myde_z {
    width: 100%;
    height: 8%;
    background: cornflowerblue;
    color: white;
    font-size: 20px;
  }
  .pointLeft_z {
    color: white;
    margin-left: 3%;
    margin-top: 0;
    font-size: 35px;
  }
  .text_z {
    margin-left: 30%;
  }
  .buy_for {
    font-size: .88rem;
    color: #666;
    line-height: 2.92rem;
    padding-left: 1.03rem;
  }
  .buy_for span {
    font-weight: 700;
  }
  .vip_prerogative {
    background-color: #fff;
    padding-left: 1.03rem;
    margin-bottom: 0.73rem;
  }
  .header_style {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2.92rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: 1.03rem;
  }
  .header_left {
    font-size: 1.03rem;
    color: #333;
    /*margin-left: 1rem;*/
  }
  .header_right {
    display: flex;
    align-items: center;
  }
  .header_right span:nth-of-type(1) {
    font-size: .88rem;
    color: #999;
    margin-right: .3rem;
  }
  .header_right span:nth-of-type(2) {
    width: 0.73rem;
    height: .73rem;
  }
  .vip_detail {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: 1.3rem 0;
  }
  .vip_detail_left {
    margin-right: .88rem;
  }
  .vip_detail_left img {
    width: 2.3rem;
    height: 2.6rem;
  }
  .vip_detail_right h4 {
    font-size: 1rem;
    color: #333;
    font-weight: 400;
  }
  .vip_detail_right p {
    font-size: 0.73rem;
    color: #999;
  }
  .apply_vip {
    background-color: #fff;
    padding-left: 1rem;
    margin-bottom: 0.73rem;
  }
  .common_style {
    margin-bottom:0.73rem;
  }
  .common_style span {
    margin-left: 1rem;
  }
  .header_style{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2.92rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: 1rem;
  }
  .header_left {
    font-size:1rem;
    color: #333;
  }
  .apply_vip_buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    font-size: 1rem;
    line-height: 3.8rem;
  }
  .apply_vip_buy_right {
    border: .05rem solid #f60;
    border-radius: .3rem;
    line-height: 1.75rem;
    height: 1.75rem;
    width: 3.8rem;
    text-align: center;
    font-size: .88rem;
    color: #f60;
  }
  .apply_vip_buy_left span:nth-of-type(2) {
    font-weight: 700;
    color: #f60;
  }
  .header_style {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2.92rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: 1rem;
  }
  .header_left {
    font-size: 1rem;
    color: #333;
  }
  .header_right{
    display: flex;
    align-items: center;
  }
  .header_right span {
    font-size: .88rem;
    color: #999;
    margin-right: .3rem;
  }
  .pointR_z {
    font-size: 1.16rem;
    color: #999;
  }
</style>
