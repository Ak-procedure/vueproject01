<template>
  <div id="mine_z">
    <div class="myde_z">
      <span @click="back" class="pointLeft_z"><</span>
      <span class="text_z">余额问题</span>
    </div>
    <ul>
      <li v-for="(v,i) in text2">
        <h3>{{text2[i][0]}}</h3>
        <p>{{text2[i][1]}}</p>
        <p>{{text2[i][2]}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "YEshuoming",
      data(){
        return {
          text1:[],
          text2:[]
        }
      },
      created() {
        this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((res)=> {
          // console.log(res.data);
          this.text1 = res.data.balanceContent.split("###");
          console.log(this.text1);
          for (let i = 1; i < this.text1.length; i++) {
            this.text1[i] = this.text1[i].replace(/(?<=[\u4e00-\u9fa5]+)\s/g, "？");
            this.text2.push(this.text1[i].split("？"));
          }
          console.log(this.text2);
        });
      },
      methods:{
        back() {
          this.$router.go(-1)
        }
      },
    }
</script>

<style scoped>
  #mine_z {
    width: 100%;
    height: 100%;
    background: white;
  }
  .myde_z {
    width: 100%;
    background: #3190e8;
    color: white;
    font-size: 1.25rem;
    text-align: center;
    position: relative;
    padding: .7rem 0;
  }
  .pointLeft_z {
    font-size: 1.5rem;
    font-weight: 100;
    position: absolute;
    top: 10%;
    left: 3%;
  }

  ul {
    width: 94%;
    margin: 0 auto;
    color: #666;
  }
  h3 {
    line-height: 3rem;
  }
  p {
    font-size: .88rem;
    line-height: 1.46rem;
  }
</style>
