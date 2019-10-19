<template>
  <div class="SV">
    <div class="server">
      <!--返回上一页-->
    <span @click="back">返回</span>
      <p>服务中心</p>
    </div>
    <div>
      <div class="tl">
        <router-link :to="{}">
          <img src="./kefu1.png" alt="">
          <p>在线客服</p>
        </router-link>
      </div>
      <div class="tl2">
        <router-link :to="{}">
          <img src="./kefu2.png" alt="">
          <p>在线客服</p>
        </router-link>
      </div>
    </div>
    <p class="hot">热门问题</p>
    <div>
      <van-cell :title="v" is-link :to="{path:'/super',query:{msg1:msg[i],des1:v}}" v-for="(v,i) in des" :key="i"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        des: [],
        msg: []
      }
    },
    methods: {
      ask() {
        this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((res) => {
          console.log(res.data);
          let a = 0;
          for (let i in res.data) {
            if (i != 'index') {
              a++;
              if (a % 2 == 0) {
                this.des.push(res.data[i])
              } else {
                this.msg.push(res.data[i])
              }
            }
          }
        })
      },
      back() {
        this.$router.go(-1)
      }
    },
    created() {
      this.ask();
      this.$store.state.shopcar=false;
      this.$store.state.showOrNot = false;
    }
  }
</script>

<style scoped>
  .SV {
    height: 100%;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .server {
    height: 3rem;
    background-color: #3190e8;
    text-align: center;
    position: relative;
  }

  .server > span {
    font-size: 1.5rem;
    position: absolute;
    left: 0.3rem;
    top: 0.5rem;
    color: white;
    text-decoration: none;

  }

  .server > a > span {

  }

  .server > p {
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
    line-height: 3rem;
  }

  .tl, .tl2 {
    height: 6rem;
    width: 50%;
    /*background-color: darkgreen;*/
    text-align: center;
    padding: 0.6rem 0;
  }

  .tl > a > img, .tl2 > a > img {
    height: 3.4rem;
    width: 3.4rem;
  }

  .tl > a, .tl2 > a {
    color: black;
    font-size: 0.9rem;
  }

  .tl {
    float: left;
  }

  .tl2 {
    float: right;
  }

  .hot {
    line-height: 3rem;
    font-size: 1.3rem;
    padding-left: 1.5rem;
  }

  .links {
    line-height: 3rem;
    padding: 0 1rem;
    overflow: hidden;
  }

  .links > a {
    color: #000;
  }

  .links > a:nth-child(1) {
    float: left;
  }

  .links > a:nth-child(2) {
    float: right;
  }
</style>
