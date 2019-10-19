<template>
    <div id="fapiao">
      <div class="title">
       <div @click="back"><</div>
        <div>选择发票抬头</div>
        <div></div>
      </div>
      <div>
        <van-checkbox-group v-model="result">
          <van-cell-group class="fa">
            <van-cell
              clickable
              :title="'不需要开发票'"
              @click="toggle"
            >
              <van-checkbox
                name="item"
                ref="checkboxes"
                slot="right-icon"
              />
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
      <div class="btns">
        <van-button class="btn" color="rgb(76,217,100)" type="primary">确定</van-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FaPiao",
      data(){
          return{
              result: ['a']
          }
      },
      methods:{
        toggle() {
          this.$refs.checkboxes.toggle();
        },
        back(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  #fapiao{
    width: 100%;
    height: 100%;
  }
.title{
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.2rem;
  color: white;
  display: flex;
  background: #3190e8;
}
  .title>div:nth-child(1){
    box-sizing: border-box;
    padding-left: 0.5rem;
    width: 10%;
  }

  .title>div:nth-child(2){
    text-align: center;
    width: 80%;
    font-weight: 600;
  }
  .title>div:nth-child(3){
    width: 10%;
  }
  .btns{
    text-align: center;
  }

  .fa{
   margin-top: 0.5rem;
    padding: 0.5rem 0;
  }
  .btn{
    width: 94%;
    margin: 0.8rem auto;
  }
</style>
