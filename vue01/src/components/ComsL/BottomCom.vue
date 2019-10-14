<template>
  <div id="bottomCom">
    <van-tabbar class="write" v-model="active">
      <van-tabbar-item :to="{path:'/foods'}" >
        <p class="ic1">1</p>
        <p>外卖</p>
        </van-tabbar-item>
      <van-tabbar-item :to="{path:'/search'}">
        <p class="ic1">2</p>
        <p>搜索</p>
      </van-tabbar-item>
      <van-tabbar-item >
        <p class="ic1">3</p>
        <p>订单</p>
      </van-tabbar-item>
      <van-tabbar-item :to="{path:'/mine'}">
        <p class="ic1">4</p>
        <p>我的</p>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "BottomCom",
    data(){
      return{
        active: 0,
      }
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: 'my-icon';
    src: url('../../assets/fonts/myICON.ttf');
  }
  .ic1{
  font-family: 'my-icon';
    font-size: 2rem;
    margin-top: -1.2rem;
    line-height: 2.1rem;
  }
  #bottomCom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding-top: 1rem;
    /*height: 3rem;*/
    display: flex;
    text-align: center;
  }

.write{
  padding-top: .3rem;
  background: white;
}
</style>
