<template>
  <div id="mine_z">
    <div class="myde_z">
      <span @click="back" class="pointLeft_z"><</span>
      <span class="text_z">兑换会员</span>
    </div>
    <p class="buy_for">成功兑换后将关联到当前帐号： <span>{{users.username}}</span></p>
    <form class="form_style">
      <input type="text" name="cartNumber" maxlength="10" placeholder="请输入10位卡号">
      <input type="text" name="passWord" maxlength="6" placeholder="请输入6位卡密">
    </form>
    <p class="determine">兑换</p>
    <div class="Binding">
      <h3>——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：<b>30次</b>减免配送费。</p>
      <p>季卡：<b>90次</b>减免配送费。</p>
      <p>年卡：<b>360</b>次减免配送费。</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
  </div>
</template>
<script>
    export default {
        name: "duihuanhuiyuan",
      data(){
          return{
            users:''
          }
      },
      created(){
        this.users=this.$route.query
      },
      methods:{
        back() {
          this.$router.go(-1)
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
    background: #3190e8;
    color: white;
    font-size: 1.25rem;
    text-align: center;
    position: relative;
    padding: .7rem 0;
  }
  .pointLeft_z {
    font-size: 1.5rem;
    font-weight: 100;
    position: absolute;
    top: 10%;
    left: 3%;
  }

  .buy_for {
    font-size: .88rem;
    color: #666;
    line-height: 2.92rem;
    padding-left: 1rem;
    color: #333;
    font-weight: 400;
  }
  .buy_for span {
    font-weight: 700;
  }
  .form_style {
    display: flex;
    flex-direction: column;
  }
  input {
    border: none;
  }
  .form_style input {
    border-bottom: 1px solid #f5f5f5;
    height: 2.92rem;
    font-size: .95rem;
    color: #999;
    padding-left: 1rem;
    font-style: normal;
  }
  .determine {
    background-color: #ccc;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    margin: 1rem;
    line-height: 2.63rem;
    border-radius: .3rem;
    margin-top: 1rem;
    font-weight: 700;
  }
  .Binding {
    color: #333;
    font-weight: 400;
    display: block;
    box-sizing: border-box;
    margin-top: 1rem;
  }
  .Binding h3 {
    text-align: center;
    font-weight: 400;
    font-size: .95rem;
    color: #aaa;
    margin-bottom: .88rem;
  }
  .Binding p {
    padding-left: 2.92rem;
    font-size: .73rem;
    color: #aaa;
    line-height: 1.12rem;
  }

</style>
