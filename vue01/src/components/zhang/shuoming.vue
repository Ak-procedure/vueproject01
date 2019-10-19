<template>
    <div id="mine_z">
      <div class="myde_z">
        <span @click="back" class="pointLeft_z"><</span>
        <span class="text_z">代金券说明</span>
      </div>
      <ul>
        <li v-for="(v,i) in  NewArr">
          <h3>{{v[0]}}</h3>
          <p>{{v[1]}}</p>
          <p>{{v[2]}}</p>
          <p>{{v[3]}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "shuoming",
      data(){
        return {
            msg:'',
            QandA:[],
            NewArr:[]
        }
      },
      created() {
        this.msg = this.$route.query.msg,
          this.myHttp.get("/v3/profile/explain", (data) => {
            this.QandA = data.couponContent.split("###");
            for (let i = 1; i < this.QandA.length; i++) {
              this.QandA[i] = this.QandA[i].replace(/([\u4e00-\u9fa5]+)\s/g, "？");
              this.NewArr.push(this.QandA[i].split("？"));
            }
          })
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
    background-color: white;
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
    background: white;
  }
  h3 {
    line-height: 3rem;
  }
  p {
    font-size: .88rem;
    line-height: 1.46rem;
  }
</style>
