<template>
  <div id="J1L">
    <div class="one">
      <div class="title">
        <a href="###"><</a>
        <span>{{city1.name}}</span>
        <a href="###">切换城市</a>
      </div>
      <div class="div1">
        <input placeholder="输入学校,商务楼,地址" type="text" id="input1">
      </div>
      <div class="div2">
        <input type="submit" class="btn1" @click="serchCity(city1.id)" value="提交">
      </div>
    </div>
    <div>搜索历史</div>
    <div>
      <ul>
        <li v-for="(v,i) in msgs">
          <router-link :to="{path:'foods'}">
            <p>{{v.name}}</p>
            <p>{{v.address}}</p>
          </router-link>
          <hr>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "J1L",
    data() {
      return {
        city1: '',
        msgs: ''
      }
    },
    created() {
      console.log(this.$route.query);
      this.city1 = this.$route.query
    },
    methods: {
      serchCity(id) {
        let input1V = document.getElementById('input1');
        // console.log(input1V.value);
        this.axios.get('https://elm.cangdu.org/v1/pois?city_id=' + id + '&keyword=' + input1V.value + '&type=search').then((res) => {
          // console.log(res.data);
          this.msgs = res.data
        })
      }
    }
  }
</script>

<style scoped>

  .one {
    text-align: center;
  }

  .one p {
    text-align: center;
    background: cornflowerblue;
    line-height: 50px;
    color: white;
  }

  #input1 {
    width: 100%;
    line-height: 30px;
    margin: 5px 0;
    border: 1px solid #e4e4e4;
    font-size: .65rem;
    color: #333;
    outline: none;
  }

  .btn1 {
    line-height: 30px;
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    border-radius: .1rem;
    margin-bottom: .4rem;
    width: 100%;
    /*height: 1.4rem;*/
    outline: none;
    border: none;
  }
.div2,.div1{
  width: 90%;
  margin: 0 auto;
}
  .title {
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
    overflow: hidden;
  }

  .title a:nth-child(1) {
    display: block;
    width: .6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
    float: left;
    text-decoration: none;
    color: white;
  }

  .title span {
    display: block;
    font-size: .8rem;
    color: white;
    font-weight: 700;
    margin-top: 0.5rem;
  }

  .title a:nth-child(3) {
    height: 100%;
    font-size: .6rem;
    color: #fff;
    float: right;
    text-decoration: none;
    margin-top: -1rem;
    margin-right: 0.4rem;
    /*border: 1px solid  red;*/
  }


</style>
