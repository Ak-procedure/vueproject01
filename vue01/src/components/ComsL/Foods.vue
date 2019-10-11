<template>
    <div id="foods">
  <div id="tit">
    <a href="###" v-for="(v,i) in foods">
      <!--<img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg" alt="">-->
      <span>{{v.title}}</span>
    </a>
  </div>
<div id="food">
     <router-link v-for="(v,k) in food" :to="{path:'/shangjia',query:v}"  :key="k">
       <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="">
       <ul>
         <li><span>{{v.name}}</span><span v-for="(x,y) in v.supports"><span>{{x.icon_name}}</span></span></li>
         <li><span>{{v.rating}}月售{{v.recent_order_num}}单</span><span>{{v.delivery_mode.text}}{{v.supports[1].name}}</span></li>
         <li>{{v.float_minimum_order_amount}}起送/{{v.piecewise_agent_fee.tips}}</li>
       </ul>
     </router-link>

</div>

    </div>
</template>

<script>
    export default {
        name: "Foods",
      data(){
          return{
            foods:'',
            food:''
          }
      },
      created(){
        this.axios.get('https://elm.cangdu.org/v2/index_entry').then((res)=>{
          console.log(res.data);
          this.foods=res.data;
        }).then(()=>{
          this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762').then((res)=>{
            // console.log(res.data);
            this.food=res.data
          })
        })
      }
    }
</script>

<style scoped>
 #foods {
  background: #f2f2f2;
   height: 100%;
  }
  #tit{
    background: white;
    margin-bottom: 5px;
  }
  #food{
    background: white;
  }
  #food>a{
    text-decoration: none;
    display: block;
    color: black;
    border-bottom: 1px solid black;
  }
  img{
    width: 63.4px;
    height: 63.4px;
    display: block;
    float: left;
  }

</style>
