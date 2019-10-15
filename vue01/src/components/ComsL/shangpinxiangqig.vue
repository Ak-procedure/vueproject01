<template>
  <!--图片商品详情-->
  <section class="title_y">
    <!--详情头部-->
    <header id="head_top_y">
      <!--返回按钮-->
    <span class="back" @click="back">返回</span>
      <!--详情字体-->
      <section class="head_title_y ex">
        <span class="title_text_y">{{getObj.name}}</span>
      </section>
    </header>
    <!--图片-->
    <section class="">
      <img :src="'//elm.cangdu.org/img/'+getObj.image_path" class="imgs_y">
    </section>
    <!--id-->
    <p class="ps_y">{{getObj.description}}</p>
    <!--名字-->
    <section class="details_y">
      <p class="details_p_y">{{getObj.name}}</p>
      <!--评分-->
      <div class="details_div_y">
        <span class="details_price_y">评分</span>
        <span class="details_span_y">{{getObj.rating}}</span>
      </div>
      <p class="color_y">
        <span>月售 {{getObj.month_sales}}单</span>
        <span class="colors_y">售价 ￥{{getObj.specfoods[0].price}}</span>
        <span class="colors_y">起</span>
      </p>
      <p class="color_y">
        <span>评论数  {{getObj.rating_count}}</span>
        <span>好评率  {{getObj.satisfy_rate}}%</span>
      </p>
    </section>
  </section>
</template>

<script>
  export default {
    name: "shangpinxiangqing",
    data(){
      return{
  getObj:''
      }
    },
    created(){
      this.$store.state.shopcar=true;
      this.$store.state.showOrNot=false;
      this.getObj=this.$route.query;
      console.log(this.$route.query);
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>
  .title_y{
    padding: 3rem 0;
  }
  #head_top_y{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.85rem;
  }
  .head_title_y{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center
  }
  .title_text_y{
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .ex{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .imgs_y{
    width: 100%;
    display: block;
  }
  .ps_y{
    font-size: .9rem;
    color: #666;
    margin-top: .8rem;
    line-height: .8rem;
    bottom: .2rem;
    padding: 0 .8rem;
  }
  .details_y{
    padding: .8rem;
  }
  .details_p_y{
    font-size: 1rem;
    color: #333;
    margin-bottom: .3rem;
  }

  .details_span_y{
    font-size: .95rem;
    color: #f60;
    margin-left: .2rem;
  }
  .details_price_y{
    font-size: .95rem;
    color: #666;
    margin-right: .2rem;
  }

  .color_y{
    color: #666;
    font-size: .88rem;
    margin-top: .3rem;
    margin-right: .4rem;
  }
  .colors_y{
    color: #f60;
  }
  .back{
    display: block;
    color: white;
    font-size: 1.2rem;
    margin-top: 0.6rem;
    margin-left: 0.3rem;
  }
</style>
