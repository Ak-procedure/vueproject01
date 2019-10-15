<template>
    <div>
      <div class="pay">
        <router-link :to="{}">
          <i class="iconfont icon-fanhuijiantou"></i>
        </router-link>
        <p>确认支付</p>
      </div>
     <div class="pt">
       <p>支付剩余时间</p>
       <van-count-down :time="time">
         <template v-slot="timeData">
           <span class="item">00</span>
           <span class="sol">:</span>
           <span class="item">{{ timeData.minutes}}</span>
           <span class="sol">:</span>
           <span class="item">{{ timeData.seconds}}</span>
         </template>
       </van-count-down>
     </div>
<p class="change">选择支付方式</p>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell  clickable @click="radio = '1'">
            <div class="ii">
              <i class="iconfont icon-zhifubao"></i>
              <span>支付宝</span>
            </div>
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell clickable @click="radio = '2'">
            <div class="ii">
            <i class="iconfont icon-weixinzhifu-"></i>
            <span>微信</span>
            </div>
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
<button class="btn" @click="show=true">确认支付</button>
      <div class="tan" v-if="show">
        <img src="./弹框-警告.png" alt="">
<p>当前环境无法支付，请打开官方APP</p>
        <p>进行付款</p>
        <button @click="btn1">确认</button>
      </div>
    </div>
</template>
<script>
    export default {
        name: "Pay",
      data(){
          return{
          time:15 * 60 * 1000,
            radio: '1',
            show:false
          }
      },
      methods:{
          btn1(){
           // 跳到订单列表
          this.$router.push({})
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1455672_t3enchgxuia.css";
  @import "//at.alicdn.com/t/font_1455672_46j613fq6g1.css";
  @import "//at.alicdn.com/t/font_1455672_oddfieecicp.css";
  .pay{
    background-color: #3190e8;
    line-height: 3rem;
    text-align: center;
    position: relative;
    color: white;
  }
  .pay>a{
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    /*top: 0.5rem;*/
  }
  .pay>p{
    font-size: 1.1rem;
    font-weight: 600;
  }
  /*插件*/
  .item {
    display: inline-block;
    width: 22px;
    margin-right: 1.2rem;
    color: #000;
    font-size: 2rem;
    text-align: center;
    /*background-color: #1989fa;*/
  }
  .sol{
    font-size: 2rem;
  }
  /*支付倒计时*/
  .pt{
    background-color: white;
    padding: 3rem 0 ;
    text-align: center;
  }
  .pt>p{
    margin-bottom: 2rem;
    font-size: 1rem;
  }
  van-count-down{
    font-size: 2rem;
  }
  .change{
    line-height: 2rem;
    padding: 0.6rem 1.5rem;
  }
  .icon-zhifubao{
 font-size: 2.7rem;
    color: rgb(105,201,244);
    margin-top: 0.1rem;
  }
  .icon-weixinzhifu-{
    font-size: 2.7rem;
    color: rgb(82,189,51);
  }
  .ii{
    line-height: 3rem;
    /*padding-top: 0.2rem;*/
    /*background-color: orange;*/
  }
  .ii>span{
    margin-left: 1rem;
    line-height: 3rem;
    font-size: 1.1rem;
  }
.btn{
  font-size: 1.2rem;
  padding: 0.6rem 7.5rem;
  color: white;
  margin-left: 1.9rem;
  margin-top: 1rem;
  background-color: rgb(76,217,100);
  border: none;
  border-radius: 0.2rem;
}
.tan{
  width: 20rem;
  text-align: center;
  background-color: white;
  border-radius: 0.3rem;
  padding: 2.5rem 0 0 0;
  position: absolute;
  top:30%;
  left: 7%;

}
  .tan>img{
    width: 5rem;
  }
  .tan>button{
    width: 20rem;
    color: white;
    padding: 0.7rem;
    border: none;
    border-radius: 0.3rem;
    margin-top: 1.5rem;
    background-color:rgb(76,217,100) ;
  }
</style>
