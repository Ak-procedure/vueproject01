<template>
    <div class="wai">
      <div class="food">
        <span @click="back">返回</span>
        <p>商家详情</p>
      </div>
      <p class="active">活动与属性</p>
      <div class="protect">
        <li v-for="(x,y) in arr.supports" :key="y" class="lis">
          <span class="zsb" :class="{blu:x.icon_name=='准'?true:false}">{{x.icon_name}}</span>
          <span class="des">{{x.description}}</span>
        </li>
      </div>
      <router-link :to="{path:'/foodsafe'}" class="third">
        <p class="safe">食品监督安全公示</p>
        <p class="com">企业认证详情</p>
        <i class="iconfont icon-aright"></i>
      </router-link>
      <div class="smile">
        <i class="iconfont icon-xiaolian"></i>
        <div class="check">
          <p>监督检查结果：
          <span>良好</span>
          </p>
          <p>检查日期</p>
        </div>
      </div>
      <div class="msg">商家信息</div>
      <ul class="end">
        <li>{{arr.name}}</li>
        <li>{{arr.address}}</li>
        <li>营业时间：{{arr.opening_hours[0]}}</li>
        <div class="end1" @click="show=!show">
          <li class="ui">营业执照
            <span class="s1"> > </span>
          </li>
        </div>
        <div class="end1" @click="show=!show">
          <li class="ui">餐饮服务许可证
            <span class="s2"> > </span>
          </li>
        </div>
      </ul>
<div class="lx" v-if="show">
  <img src="./5.png" alt="" @click="show=!show">
</div>
    </div>
</template>

<script>
    export default {
        name: "FoodSafe",
      data(){
          return{
            arr:[],
       show:false
          }
      },
      methods:{
          back(){
            this.$router.go(-1)
          },
        food(){
            this.axios.get("https://elm.cangdu.org/shopping/restaurant/1").then((res)=>{
              console.log(res.data)
              this.arr = res.data
              // console.log(this.arr.supports);
            })
        }
      },
      created(){
          this.food();
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1455672_36h6nrrzkpx.css";
@import "//at.alicdn.com/t/font_1455672_hajio53qna.css";

.wai{
  position: relative;
}
  .food{
   line-height:3rem;
    background-color: #3190e8;
    text-align: center;
    color: white;
    position: relative;
  }
  .food>span:nth-child(1){
    position: absolute;
    left: 0.3rem;
    color: white;
    font-size: 1.1rem;
    /*top: 0.5rem;*/
  }
  .active{
    line-height: 3rem;
    background-color: white;
    margin-top: 0.4rem;
    font-size: 1.1rem;

    color: #333333;
    padding-left: 1rem;
  }
  .protect{
    background-color: white;
    margin-top: 0.3rem;
    font-size: 0.8rem;
    padding: 1rem 0 1rem 1rem;
  }
  .lis{
    margin-bottom: 1rem;
  }
  .zsb{
    margin-right: 0.8rem;
    background-color: #999999;
    color: white;
    border-radius: 0.1rem;
  }
  .des{
    color: #666666;
  }
  .safe{
    color: black;
    float: left;
    font-size: 1.1rem;
    margin-right: 5rem;
  }
  .third{
    display: block;
    line-height: 3rem;
    margin: 0.8rem 0 0.3rem;
    background-color: white;
    padding-left: 1rem;
    overflow: hidden;
  }
  .com{
    color: #bbbbbb;
    float: left;
    margin-right: 0.3rem;
  }
  .icon-aright{
    color: black;
    float: left;
    color: #bbbbbb;
    font-size: 1.2rem;
  }

  .blu{
    background: #57a9ff;
  }
  .smile{
    /*height: 5rem;*/
    background-color: white;
    overflow: hidden;
    padding: 1rem;
  }
  .icon-xiaolian{
    font-size: 3rem;
    color: rgb(126, 211, 33);
    float: left;
margin-right: 2rem;
  }
  .check{
    float: left;
  }
.check>p{
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 1rem;
}
  .check>p>span{
    color: rgb(126, 211, 33);
  }
  .msg{
    line-height: 3rem;
    background-color: white;
    margin-top: 0.5rem;
    padding-left: 1rem;
    font-size: 1.1rem;
  }

  .end>li,.end>div>li,.ui{
    line-height: 3rem;
    background-color: white;
    margin-top: 0.1rem;
    padding-left: 1rem;
    font-size: 0.95rem;
    color: #666666;
  }
.ui{
  position: relative;
}
  .end1{
    display: block;
  }
  .s1,.s2{
    position: absolute;
    right: 0.9rem;
  }
  .lx{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .lx>img{
    width: 100%;
    height: 100%;
  }
</style>
