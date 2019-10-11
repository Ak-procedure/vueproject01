<template>
    <div id="J1L">
      <div class="one">
     <p><span>{{city1.name}}</span></p>
      <input placeholder="输入学校,商务楼,地址" type="text" id="input1">
      <br>
      <button class="btn1" @click="serchCity(city1.id)">提交</button>
    </div>
      <div>搜索历史</div>
      <div>
        <ul>
          <li v-for="(v,i) in msgs">
            <router-link :to="{path:'pros'}">
            <p>{{v.name}}</p>
            <p>{{v.address}}</p>
            </router-link><hr>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "J1L",
      data(){
          return {
            city1:'',
            msgs:''
          }
      },
      created(){
        console.log(this.$route.query);
       this.city1=this.$route.query
      },
      methods:{
        serchCity(id){
          let input1V=document.getElementById('input1');
          // console.log(input1V.value);
          this.axios.get('https://elm.cangdu.org/v1/pois?city_id='+id+'&keyword='+input1V.value+'&type=search').then((res)=>{
           // console.log(res.data);
           this.msgs=res.data
         })
        }
      }
    }
</script>

<style scoped>
  .one{
    text-align: center;
  }
.one p{
  text-align: center;
  background: cornflowerblue;
  line-height:50px;
  color: white;
}
  #input1{
    width: 90%;
    line-height: 30px;
    margin: 5px 0;
  }
  .btn1{
    width: 90%;
    line-height: 30px;
    background: cornflowerblue;
    color: white;
  }

</style>
