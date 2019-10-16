<template>
    <div id="shopcar">
<div class="checkCar">
  <div>
    <span>
     <span>
       <img src="../../assets/imgs/shopcar.png" alt="">
     </span>
    </span>
  </div>
  <div>
    <p>￥0.00</p>
    <p>配送费￥5</p>
  </div>
  <div>
    <router-link :to="{path:'/qrdingdan'}">还差￥20起送</router-link>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        name: "ShopCar"
    }
</script>

<style scoped>
#shopcar{
  width: 100%;
  height: 12%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
  .checkCar{
    width: 100%;
    height: 70%;
    background-color: #3d3d3f;
    position: absolute;
    bottom: 0;
    display: flex;
    color: white;
  }
  .checkCar>div:nth-child(1){
    width: 20%;
  }
.checkCar>div:nth-child(1)>span{
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  /*background: #333333;*/
  background-color: #3190e8;
  border: .3rem solid #444444;
  position: absolute;
  top: -0.8rem;
  left: .3rem;
}
.checkCar>div:nth-child(1)>span>span{
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 0;
}

.checkCar>div:nth-child(1)>span>span img{

  width: 70%;
  height: 70%;
  margin-left: .5rem;
  margin-top: .5rem;
}
.checkCar>div:nth-child(2){
   width: 45%;
  line-height: 1.4rem;
 }

.checkCar>div:nth-child(2)>p:nth-child(1){
  margin-top: .3rem;
  font-size: 1.2rem;
  font-weight: 600;
}
.checkCar>div:nth-child(2)>p:nth-child(2){
  font-size: .5rem;
}
.checkCar>div:nth-child(3){
  background: #535356;
  width: 35%;
}
.checkCar>div:nth-child(3)>a{
 font-size: 1.2rem;
  font-weight: 550;
  color: white;
  line-height: 3.5rem;
  margin-left: 0.3rem;
}
</style>
