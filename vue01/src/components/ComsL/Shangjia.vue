<template>
  <div id="Shangjia">
    <div id="header">
      <ul>
        <li>{{getS.name}}</li>
        <li>{{getS.piecewise_agent_fee.tips}}</li>
        <li>公告:{{getS.promotion_info}}</li>
      </ul>
    </div>
    <div>
      <a href="###">商品</a>
      <a href="###">评价</a>
    </div>
<div id="pros">
<div id="left">
  <van-sidebar v-model="activeKey">
    <van-sidebar-item title="标签名称" info="5" :to="{path:'/test'}" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
  </van-sidebar>
  <!--<ul>-->
    <!--<li v-for="(v,i) in shangpin">-->
      <!--<a href="###">{{v.name}}</a>-->
    <!--</li>-->
  <!--</ul>-->
</div>
  <div id="right"></div>
</div>
  </div>
</template>

<script>
  export default {
    name: "Shangjia",
    data() {
      return {
        shangpin: '',
        getS: '',
        activeKey:0
      }
    },
    created() {
      console.log(this.$route.query);
      this.getS = this.$route.query;
       this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.$route.query.id).then((res) => {
        console.log(res.data);
        this.shangpin = res.data;
      })
    }

  }
</script>

<style scoped>
  #Shangjia{
    width: 100%;
    height: 100%;
  }
  #header {
    background-color: rgba(119, 103, 137, .43);
  }

</style>
