<template>
  <div id="xinzengdz">
    <div id="nav">
      <!--向左箭头-->
      <span @click="back">返回</span>
      <span>添加地址</span>
    </div>


    <van-cell-group>
      <div class="flex">
        <div>联系人</div>
        <div>
          <van-field class="botm" placeholder="你的名字"/>
        </div>
      </div>
      <div class="flex">
        <div>联系电话</div>
        <div>
          <van-field class="botm" placeholder="你的手机号"/>
        </div>
        <div>
          <van-field  placeholder="备选电话"/>
        </div>
      </div>
      <div class="flex">
        <div>送餐地址</div>
        <div>
          <van-field class="botm" placeholder="小区/写字楼/学校"/>
        </div>
        <div>
          <van-field  placeholder="详细地址(如门牌号等)"/>
        </div>
      </div>
      <div class="flex">
        <div>标签</div>
        <div>
          <van-field class="botm" placeholder="无/家/学校/公司"/>
        </div>
      </div>
    </van-cell-group>


  </div>
</template>

<script>
  export default {
    name: "xinzengdz",
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  #nav {
    width: 100%;
    background: #3190e8;
    height: 3rem;
    overflow: hidden;
    line-height: 3rem;
    color: white;
  }

  #nav > span:nth-child(1) {
    float: left;
    margin-left: .5rem;
  }

  #nav > span:nth-child(2) {
    margin-left: 7rem;
    float: left;
    font-size: 1.4rem;
    font-weight: 600;
  }

  #xinzengdz {
    width: 100%;
    height: 100%;
    background: white;
    position: relative;
    text-align: center;
  }

  #xinzengdz > a {
    font-size: 1.3rem;
    position: absolute;
    bottom: .5rem;
    left: 0;
    right: 0;
    color: #3190e8;
  }
  .flex{
    display: flex;
    flex-wrap: wrap;
  }
  .flex>div:nth-child(1){
    line-height: 3rem;
    width: 30%;
  }
  .flex>div:nth-child(2){
    width: 70%;
  }
  .flex>div:nth-child(3){
    padding-left: 7rem;
    width: 100%;
  }

</style>
