<template>
    <div class="SV">
<div class="server">
  <router-link :to="{}">返回</router-link>
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
      <ul>
        <li>{{}}</li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: "test",
      data(){
          return{
              msg:[],
              des:[]
          }
      },
      methods:{
          ask(){
            this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((res)=>{
              console.log(res.data);
              this.des = res.data;
                for(let a in res.data){
                    this.msg.unshift(a);
                }
              this.msg.forEach(v=>{
                console.log(this.des.v)
              })

              // console.log(this.des)
            })
          }
      },
      created(){
          this.ask();
      }
    }
</script>

<style scoped>
  .SV{
    height: 100%;
  }
  a{
    text-decoration: none;
  }
.server{
  height: 3rem;
  background-color: #3190e8;
  text-align: center;
  position: relative;
}
  .server>a{
    font-size: 1rem;
    position: absolute;
    left: 0.2rem;
    top:0.9rem;
    color: white;
    text-decoration: none;

  }
  .server>p{
    font-size: 1rem;
    color: white;
    line-height: 3rem;
  }
.tl,.tl2{
  height:6rem;
  width: 50%;
  /*background-color: darkgreen;*/
  text-align: center;
  padding: 0.5rem 0;
}
  .tl>a>img,.tl2>a>img{
    height: 3.6rem;
    width: 3.6rem;
  }
  .tl>a,.tl2>a{
    color: black;
    font-size: 0.9rem;
  }
.tl{
  float: left;
}
  .tl2{
    float: right;
  }
.hot{
  line-height: 3rem;
  padding-left: 1.5rem;
}
</style>
