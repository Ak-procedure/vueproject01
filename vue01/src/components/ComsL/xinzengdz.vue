<template>
  <!--添加地址-->
  <section class="title_y">
    <div class="titles_y">
      <!--导航头部-->
      <header id="head_top_y">
        <router-link @click.native="back" :to="{}">
          <section class="head_nav_y">
            <svg width="100%" height="100%" version="1.1">
              <polyline points="15,19,4,9,12,1" :style="head_navs_y"></polyline>
            </svg>
          </section>
        </router-link>
        <section class="head_title_y ex">
          <span class="title_text_y">添加地址</span>
        </section>
      </header>
      <!--添加的内容-->
      <section class="center_y">
        <!--联系人-->
        <section class="manone_y">
        <span class="manoleft_y">
          联系人
        </span>
          <section class="manoright_y">
            <input type="text" class="maninput_y" placeholder="你的名字" name="name" v-model="names">
            <!--先生女士-->
            <div class="man_y">
              <span class="spanman_y" @click="getOk(i)" v-for="(v,i) in over">
                <svg :class="{svg_y:indexs==i?true:false?svgs_y:'',svgs_y:true}" @click="isshows = !isshows">
                  <svg viewBox="0 0 120 120">
          <circle r="60" cx="60" cy="60" ></circle>
          <path fill="#fff" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path>
        </svg>
                </svg>
                <span>{{v}}</span>
              </span>
            </div>
          </section>
        </section>
        <!--联系电话-->
        <section class="manone_y">
          <span class="manoleft_y">
          联系电话
          </span>
          <section class="manoright_y">
            <input type="text" class="maninput_y yougai_y" placeholder="你的手机号" name="name" v-model="numbers">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAHRJREFUSA1jZCAT8E59/R+m9XO2KCOMTQrNRIpiaqsdtZzaIUqUeaPBTlQwUVvRaLBTO0SJMm802IkKJmorYkSunahtOCHzRm6ck9UIAAUncnSNNiYIJTB0+ZGb4EZ9jp4W6MIfDXa6BDO6JaPBjh4idOEDAOTZCsiDM8JjAAAAAElFTkSuQmCC" width="20" height="20"  alt="" @click="isshow =!isshow">
            <input type="text" v-if="isshow" class="maninput_y beix_y" placeholder="备选电话" name="name">
          </section>

        </section>
        <!--送餐地址-->
        <section class="manone_y">
        <span class="manoleft_y">
         送餐地址
        </span>
          <section class="manoright_y">
            <input type="text" class="maninput_y" placeholder="小区/写字楼/学校等" name="name" v-model="schools">
            <input type="text" class="maninput_y" placeholder="详细地址 (如门牌号等)" name="name" >
          </section>
        </section>
        <!--标签-->
        <section class="manone_y">
        <span class="manoleft_y">
          标签
        </span>
          <section class="manoright_y">
            <input type="text" class="maninput_y" placeholder="无/家/学校/公司" name="name"  v-model="homes">
          </section>
        </section>
      </section>
      <!--弹框姓名-->
      <transition name="fade" v-if="zj">
        <div class="tan_y"  v-if="zj ">
          <section class="tankuang_y">
            <div class="tan_div_y">
              <span class="tanspan_y"></span>
              <span class="tanspans_y"></span>
            </div>
            <p class="tanp_y">请输入{{ims}}</p>
            <div class="Ok_y" @click="zj = !zj">确认</div>
          </section>
        </div>
      </transition>
      <!--按钮-->
      <router-link :to="{path:'/tianjiad'}" class="btn_y">
        <div @click="okBtn">确定</div>
      </router-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "AddMan_y",
    data(){
      return{
        head_navs_y: {
          fill: 'none',
          stroke: 'rgb(255, 255, 255)',
          strokeWidth: '2'
        },
        isshow:false,
        isshows:true,
        names:'',
        numbers:'',
        bnumbers:'',
        schools:'',
        address:'',
        homes:'',
        over:["先生","女士"],
        indexs:0,
        isshowss:true,
        ims:'',
        zj:false,
        srcs:'',

      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      okBtn(){

        if (this.names == "" && this.numbers=="" && this.schools==""){
          this.ims = "姓名"
          this.zj=!this.zj
          console.log(this.ims);
        }
        else if (this.names == ""){
          this.ims="姓名"
          this.zj=!this.zj
        }
        else if (this.numbers == ""){
          this.ims="电话号码"
          this.zj=!this.zj
        }
        else if (this.schools == ""){
          this.zj=true;
          this.ims="地址"
        }
        else if (this.numbers == ""){
          this.ims="详细地址信息错误"
          this.zj=!this.zj
        }
        else if (this.homes == ""){
          this.ims="标签"
          this.zj=!this.zj
        }else {
          this.srcs='/address_y'
        }
      },
      getOk(i){
        this.indexs=i
      }
    }
  }

</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
    transform: scale(0,0);
  }
  .title_y{
    padding: 3rem 0;
    padding-bottom: 3rem;
  }
  .titles_y{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.05);
    z-index: 202;
    padding-top: 3rem;
    animation: fae .7s;
    -webkit-animation:fae .7s;
    animation-fill-mode: forwards;
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
  .center_y{
    background-color: #fff;
    padding: 0 .7rem;
  }
  .manone_y{
    display: flex;
    border-bottom: .025rem solid #f5f5f5;
  }
  .manoleft_y{
    font-size: 1rem;
    color: #333;
    flex: 2;
    width: 2rem;
    line-height: 4rem;
  }
  .manoright_y{
    flex: 5;
  }
  .maninput_y{
    width: 100%;
    height: 3.8rem;
    font-size: 1rem;
    color: #999;
    border: none;
    /*border-bottom: 0.05rem solid rgba(0,0,0,0.05);*/
    outline: none;
  }
  .beix_y{
    border-top:0.05rem solid rgba(0,0,0,0.05) ;
    /*display: none;*/
  }
  .man_y{
    display: flex;
    line-height: 4rem;
    border-top: .025rem solid #f5f5f5;
  }
  .svgs_y{
    width: 1.2rem;
    height: 1.2rem;
    fill: #ccc;
    padding-right: .5rem;
  }
  .svg_y{
    width: 1.2rem;
    height: 1.2rem;
    fill: #4cd964;
    padding-right: .5rem;
  }
  .spanman_y{
    font-size: 1rem;
    color: #333;
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
  .yougai_y{
    width: 90%;
    margin-top: .2rem;
  }
  .btn_y{
    background-color: #4cd964;
    font-size: 1.05rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2.8rem;
    border-radius: .3rem;
    margin-top: .6rem;
    display: block;
    text-decoration: none;
  }
  .tan_y{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    zIndex: 200;
  }
  .tankuang_y{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10.1rem;
    margin-left: -9rem;
    width: 18rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
  }
  .tan_div_y{
    width: 4rem;
    height: 4rem;
    border: .2rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .tanspan_y{
    width: .2rem;
    height:2rem;
    background-color: #f8cb86;
  }
  .tanspans_y{
    width: .2rem;
    height: .2rem;
    border: 0.5rem;
    border-radius: 50%;
    margin-top: .2rem;
    background-color:#f8cb86;
  }
  .tanp_y{
    font-size: 1.05rem;
    color: #333;
    line-height: 1.2rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .Ok_y{
    font-size: 1.25rem;
    color: #fff;
    font-weight:800;
    margin-top: 1rem;
    background-color:#4cd964;
    width: 100%;
    text-align: center;
    line-height: 2.8rem;
    display: block;
    border: 0.3rem;
    text-decoration: none;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
</style>
