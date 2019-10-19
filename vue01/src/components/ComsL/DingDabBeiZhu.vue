<template>
  <!--订单备注-->
  <div class="titles_y">
    <section class="title_y">
      <!--订单备注头部-->
      <header id="head_top_y">
        <router-link :to="{path:'/qrdingdan'}">
          <section class="head_nav_y">
            <svg width="100%" height="100%" version="1.1">
              <polyline points="14,19,4,9,13,0" :style="head_navs_y"></polyline>
            </svg>
          </section>
        </router-link>
        <section class="head_title_y ex">
          <span class="title_text_y">订单备注</span>
        </section>
      </header>
      <!--快速备注-->
      <section class="marks_y">
        <header class="marks_header_y">快速备注</header>
        <ul class="marks_ul_y">
          <li class="marks_li_y">
            <span v-for="(v,i) in three" class="marks_span_y first_y last_y"  :class="{colorO:i==num?true:false}" @click="getColorO(i,v)">{{v.name}}</span>
          </li>

          <li class="marks_li_y" v-for="(v,i) in rtr" :key="i">
            <span  :class="{marks_span_y:isshowsx,colorO:!isshowsx}" @click="bh(v)">{{v.rs}}</span>
          </li>

          <li class="marks_li_y">
            <span v-for="(v,i) in two" :key="i" class="marks_span_y first_y last_y":class="{colorO:i==nums?true:false}" @click="getColorOs(i,v)">{{v.names}}</span>
          </li>
        </ul>
      </section>
      <!--其他备注-->
      <section class="marks_y">
        <header class="marks_header_y">其他备注</header>
        <textarea placeholder="请输入备注内w容(可不填)" class="text_y" v-model="texts"></textarea>
      </section>
      <!--确定按钮-->
      <router-link :to="{}" class="btn_y" >确定</router-link>
    </section>
  </div>
</template>

<script>
  export default {
    name: "DingDabBeiZhu",
    data(){
      return{
        head_navs_y:{
          fill: 'none',
          stroke: 'rgb(255, 255, 255)',
          strokeWidth: '2'
        },
        isshowsx:true,
        isshowsc:true,
        isshowscu:true,
        isshowsc2:true,
        three:[
          {name:"不要辣"},
          {name:"少点辣"},
          {name:"多点辣"}
        ],
        two:[
          {names:"去冰"},
          {names:"少冰"},
        ],
        rtr:[
          {rs:'不要香菜'},
          {rs:'不要洋葱'},
          {rs:'多点粗'},
          {rs:'多点葱'},
        ],
        num:0,
        nums:0,
        data:"",
        texts:'',
        names:"",
        namts:"",

      }
    },
    created(){
      // this.getColorOs();
    },
    methods:{
      getColorO(i,v){
        this.num = i;
        this.names = v.name;
        // console.log(this.names);
      },
      getColorOs(i,v){
        this.nums = i
        this.namts = v.names;
        // console.log(this.namts);
      },
      bh(v){
        v.id=1;
        console.log(v);
      }
    },
  }
</script>

<style scoped>
  .title_y{
    padding: 1.2rem 0;
    height: 100%;
    animation: fae .7s;
    -webkit-animation:fae .7s;
    animation-fill-mode: forwards;
  }
  .titles_y{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
    z-index: 204;
    padding-top: 1.95rem;
  }
  @keyframes  fae{
    0%{
      opacity: 0;
    }
    25%{
      opacity: 0.2;
    }
    50%{
      opacity: 0.5;
    }
    75%{
      opacity: 0.75;
    }
    100%{
      opacity: 1;
    }
  }
  #head_top_y{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.85rem;
  }
  .head_nav_y{
    left: 1rem;
    width: 1rem;
    height: 1rem;
    line-height: 2.85rem;
    margin-left: .4rem;
  }
  .head_title_y{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center
  }
  .title_text_y{
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .ex{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .marks_y{
    background-color: #fff;
    margin-top: .4rem;
    padding:.4rem 1rem .8rem;
  }
  .marks_header_y{
    font-size: 1rem;
    color: #333;
    line-height: 2.5rem;
    padding-bottom: .5rem;
  }
  .marks_ul_y{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  .marks_li_y{
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .marks_span_y{
    font-size: .89rem;
    color: #333;
    padding: .35rem .8rem;
    border: .05rem solid #3190e8;
    border-radius: .3rem;
  }
  .text_y{
    outline: none;
    width: 100%;
    background-color: #f9f9f9;
    border: .05rem solid #eee;
    resize: none;
    min-height: 6rem;
    border-radius: .4rem;
    font-size: .9rem;
    color: #666;
    padding: .8rem;
  }
  .btn_y{
    background-color: #4cd964;
    font-size: 1.05rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2.8rem;
    border-radius: .3rem;
    display: block;
    text-decoration: none;
  }
  .colorO{
    font-size: .89rem;
    padding: .35rem .8rem;
    border: .05rem solid #3190e8;
    border-radius: .3rem;
    background:#3190e8;
    color:#fff
  }

</style>
