<template>
    <div>
      <div class="user">
        <router-link :to="{path:'/pay'}">
          <i class="iconfont icon-fanhuijiantou"></i>
        </router-link>
        <span>修改用户名</span>
      </div>
      <input type="text" placeholder="输入用户名">
      <p>用户名只能修改一次(5-24个字符)</p>
      <router-link :to="{path:'/mima_z'}">
        <button>确认修改</button>
      </router-link>


    </div>
</template>

<script>

    export default {
        name: "UserName"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1455672_t3enchgxuia.css";
.user{
  height: 3rem;
  background-color:#3190e8;
  text-align: center;
position: relative;
}
  .user>span{
    line-height: 3rem;
    font-size: 1.1rem;
    color: white;
font-weight: 600;
  }
.user>a{
position: absolute;
  left: 0.3rem;
  top: 0.8rem;
  color: white;
  font-weight: 700;
}
input{
  width: 21rem;
  line-height: 2.8rem;
  padding-left: 0.2rem;
  margin: 1.5rem 0 1rem 1rem;
  border: 1px solid #ddd;
  background: none;
}
p{
  font-size: 0.7rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
  color: #666;
}
  button{
    background-color: #3190e8;
    border: none;
    width: 21rem;
    padding: 0.8rem 5rem;
        margin-left: 1rem;
    color: white;
    border-radius: 0.3rem;
  }
</style>
