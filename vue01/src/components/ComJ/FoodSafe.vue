<template>
  <div>
    <div class="food">
      <span @click="back">返回</span>
      <p>食品监督安全公示</p>
    </div>
    <p class="safe">食品监督安全公示</p>
    <div class="smile">
      <i class="iconfont icon-xiaolian"></i>
      <div class="check">
        <p>监督检查结果：<span>良好</span></p>
        <p>检查日期</p>
      </div>
    </div>
    <p class="safe">工商登记信息</p>
    <ul class="links">
      <li>企业名称</li>
      <li>工商执照注册号</li>
      <li>注册资本</li>
      <li>注册地址</li>
      <li>属地监管所</li>
      <li>法定代表人</li>
      <li>经营范围</li>
    </ul>
    <p class="safe">餐饮许可证</p>
    <ul class="links">
      <li>营业范围</li>
      <li>许可证有效期</li>
      <li>许可证号</li>
      <li>发证时间</li>
      <li>发证机关</li>
    </ul>
    <p class="safe">许可证书</p>
  </div>
</template>

<script>
  export default {
    name: "FoodSafe",
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  @import "//at.alicdn.com/t/font_1455672_hajio53qna.css";
  .food {
    line-height: 3rem;
    background-color: #3190e8;
    text-align: center;
    color: white;
    position: relative;
  }

  .food > span:nth-child(1) {
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.1rem;
    /*top: 0.5rem;*/
  }
  .safe {
    line-height: 3rem;
    margin: 0.8rem 0 0.1rem;
    background-color: white;
    padding-left: 1rem;
    font-size: 1.1rem;
  }

  .smile {
    /*height: 5rem;*/
    background-color: white;
    overflow: hidden;
    padding: 1rem;
  }

  .icon-xiaolian {
    font-size: 3rem;
    color: rgb(126, 211, 33);
    float: left;
    margin-right: 2rem;
  }

  .check {
    float: left;
  }

  .check > p {
    font-size: 0.8rem;
    color: #666666;
    margin-bottom: 1rem;
  }

  .check > p > span {
    color: rgb(126, 211, 33);
  }

  .links {
    background-color: white;
    padding: 0.5rem 0;
  }

  .links > li {
    line-height: 2rem;
    font-size: 0.9rem;
    margin-left: 1rem;
    color: #333333;
  }
</style>
