<template>
  <div id="bottomCom">
    <van-tabbar v-model="active">
      <van-tabbar-item :to="{path:'/foods'}">
        <span>美食</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item :to="{path:'/search'}">
        <span>搜索</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active2 : icon.normal2">
      </van-tabbar-item>
      <van-tabbar-item :to="{path:'/Order'}">
        <span>订单</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active3 : icon.normal3">
      </van-tabbar-item>
      <van-tabbar-item :to="{path:'/mine'}">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active4 : icon.normal4">
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
        icon: {
          normal: require('../../assets/imgs/wm1.png'),
          active: require('../../assets/imgs/wm2.png'),
          normal2: require('../../assets/imgs/ss1.png'),
          active2: require('../../assets/imgs/ss2.png'),
          normal3: require('../../assets/imgs/dd1.png'),
          active3: require('../../assets/imgs/dd2.png'),
          normal4: require('../../assets/imgs/wd1.png'),
          active4: require('../../assets/imgs/wd2.png'),
        },
      }
    }
  }
</script>

<style scoped>
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

</style>
