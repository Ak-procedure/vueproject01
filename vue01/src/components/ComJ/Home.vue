<template>
    <div>
      <div class="Home">
        <router-link :to="{}"></router-link>
        <router-link :to="{}"></router-link>
        <router-link :to="{}"></router-link>
      </div>



      <van-swipe :autoplay="4000" indicator-color="white" style="background-color: white">
        <van-swipe-item>
          <!--<ul >-->

            <!--<li v-for="(v,i) in arr1 " :key="i">-->
             <!--<router-link :to="{}">-->
               <!--&lt;!&ndash;https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg&ndash;&gt;-->
               <!--<img :src="'https://fuss10.elemecdn.com'+v.image_url" alt="">-->
               <!--<div>{{v.title}}</div>-->
             <!--</router-link>-->
            <!--</li>-->

        <!--</ul>-->
          <van-grid :column-num="4">
          <van-grid-item
            v-for="(v,i) in arr1"
            :key="i"
            :icon="'https://fuss10.elemecdn.com'+v.image_url"
            :text="v.title"
          />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <!--<ul>-->
          <!--<li v-for="(v,i) in arr2 " :key="i">-->
            <!--<router-link :to="{}">-->
              <!--&lt;!&ndash;https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg&ndash;&gt;-->
              <!--<img :src="'https://fuss10.elemecdn.com'+v.image_url" alt="">-->
              <!--<div>{{v.title}}</div>-->
            <!--</router-link>-->
          <!--</li>-->
        <!--</ul>-->
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(v,i) in arr2 "
              :key="i"
              :icon="'https://fuss10.elemecdn.com'+v.image_url"
              :text="v.title"
            />
          </van-grid>
        </van-swipe-item>

      </van-swipe>
<div class="bellow">
  <div class="nearby">
    <img src="./nearby.png" alt="">
    <span>附近商家</span>
  </div>
  <ul>
    <li v-for="(v,k) in arr3" :key="k" class="newy">
      <!--<img data-v-2df9c5b6="" src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" class="shop_img">-->
      <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="">
      <div>
        <div>
          <span>品牌</span>
          <span>{{v.name}}</span>
        </div>
        <div>
          <!--<use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>-->
          <img src="http://www.w3.org/1999/xlink" alt="">
          <span>{{v.rating}}</span>
          <span>月售{{v.recent_order_num}}单</span>
        </div>
        <div>
          <span>￥20起送</span>
          <span>/</span>
          <span>配送费约￥  5</span>
        </div>
      </div>
<div>

</div>

    </li>
  </ul>

</div>
    </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
         return{
           arr1:[],
           arr2:[],
           arr3:[]
         }
      },
      methods:{
          food(){
            this.axios.get("https://elm.cangdu.org/v2/index_entry").then((res)=>{
              // console.log(res.data);
              this.arr1=res.data.slice(0,8);
              this.arr2=res.data.slice(8,16);

            })
          },
        Product(){
            this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((response)=>{
              console.log(response.data);
              this.arr3 = response.data
            })
        }
      },
      created(){
          this.food();
          this.Product();
      }
    }
</script>

<style scoped>
  .Home{
    height: 3rem;
    background-color: #3190e8;
    text-align: center;
    position: relative;
  }

 .nearby{
   margin-top: 1rem;
 }
  .nearby>img{
    width: 1rem;
    height: 1rem;
  }
  .nearby{
    color: gray;
    font-size: 0.9rem;
  }
  .bellow{
    background-color: white;
    padding-left: 1rem;
  }
  .newy{
    margin-top: 1rem;

  }
  .newy>img{
    width: 4rem;
    height: 4rem;
  }
</style>
