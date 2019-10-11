<template>
  <div id="Citys">
    <button @click="getdata">点击</button>
    <ul>
      <li v-for="(v,i) in arr2" :key="i">
        <p>{{v}}</p>
        <router-link v-for="(x,y) in arr1[v]" :to="{path:'/jump',query:x}" :key="y">
          {{x.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Citys",
    data() {
      return {
        arr1: [],
        arr2: []
      }
    },
    methods: {
      getdata() {
        this.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res) => {
          let arr2 = [];
          this.arr1 = res.data;
          for (let v in res.data) {
            arr2.push(v)
          }
          arr2.sort();
          this.arr2 = arr2;
        })
      },
      jumpp(v){
        console.log(v)
      }
    }
  }
</script>

<style scoped>
  p{
    border: 0.5px solid black;

  }
a{
  box-sizing: border-box;
  display: block;
  width:24.5%;
  /*font-size: 10px;*/
  text-align: center;
  border: 0.5px solid black;
  margin: 0.5px;
  padding:5px 0;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  text-decoration: none;
}
  .empty{
    clear: both;
  }
  li{
    overflow: hidden;
  }
</style>
