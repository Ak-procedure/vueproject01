<template>
  <div class="exchange">
    <van-nav-bar title="兑换红包" left-arrow @click-left="onClickLeft"/>
    <van-cell-group class="code">
      <van-field placeholder="请输入兑换码" class="logoin" v-model="p1"/>
      <div class="redeem">
        <van-field placeholder="验证码" class="left" v-model="p2" maxlength="4"/>
        <div class="right">
          <img :src="img">
          <div class="des" @click="change">
            <p>看不清</p>
            <p class="change">换一张</p>
          </div>
        </div>
      </div>
    </van-cell-group>
    <van-button type="primary" :disabled="show" class="btn" :class="{duihuan:add}">兑换</van-button>
    <div>{{gett}}</div>
  </div>
</template>

<script>
    export default {
        name: "DuiHuanHB",
      data() {
        return {
          img: '',
          p1: "",
          p2: "",
          id: "40730",
          show: true,//属性
          add: false //样式
        }
      },
      computed:{
          gett(){
            // console.log('get触发');
            if (this.p2.length == 4 && this.p1.length > 0) {
              this.show = false;
              this.add = true;
            } else {
              this.show = true;
              this.add = false;
            }
          }
      },
      methods: {
        onClickLeft() {
          this.$router.go(-1);
        },
        change() {
          this.myHttp.post("/v1/captchas", 1, (data) => {
              this.img = data.code;
            }
          )
        }
      },
      created() {
        this.myHttp.post("/v1/captchas", 1, (data) => {
            this.img = data.code;
          }
        );
        this.myHttp.post("/v1/users/:user_id/hongbao/exchange", {
            user_id: this.id,
            exchange_code: this.p1,
            captcha_code: this.p2
          }, (data) => {
            // console.log(data);
          }
        )
      },
    }
</script>

<style scoped>
  .exchange {
    width: 100%;
    height: 100%;
  }

  .van-nav-bar {
    background-color: #3190e8;
  }

  .van-nav-bar__arrow {
    color: #fff;
    font-size: 1.6rem;
  }

  .van-nav-bar__title {
    color: whitesmoke;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .code {
    margin: 1rem;
    background-color: #f1f1f1;
  }

  .logoin {
    color: #666;
    padding: .88rem .58rem;
    border-radius: .3rem;
  }

  .redeem {
    margin-top: 1rem;
    display: flex;
  }

  .left {
    color: #666;
    padding: .58rem;
    border-radius: .2rem;
    flex: 3;
  }

  .right {
    margin-left: 0.73rem;
    flex: 2;
    border-radius: .2rem;
    align-items: center;
    background: #fff;
  }

  .des {
    display: inline-block;
    font-size: .8rem;
    color: #666;
    margin-top: .3rem;
  }

  .change {
    color: #3b95e9;
    margin-top: .3rem;
  }

  .btn {
    width: 90%;
    margin-left: 1.3rem;
    border-radius: .3rem;
    background-color: #ccc;
    border: 1px solid #ccc;
    font-size: 1.1rem;
    color: #fff;
    line-height: 2.6rem;
    text-align: center;
  }

  .duihuan {
    background-color: #4cd964;
    border: 1px solid #4cd964;
  }
</style>
