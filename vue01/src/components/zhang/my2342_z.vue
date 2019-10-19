<template>
  <div id="mine_z">
    <div class="myde_z">
      <span @click="back" class="pointLeft_z"><</span>
      <span class="text_z">我的</span>
    </div>
    <div class="xian_z"></div>
    <div id="headImg_z">
      <router-link :to="{path:logino?'/zhanghuxinxi':'/noLogin'}">
        <p class="bgcImg"></p>
        <span class="putIn01_z">{{users.username}}</span>
        <span class="putIn02_z">暂无绑定手机号</span>
        <span class="pointRight_z">></span>
      </router-link>
    </div>
    <div class="zero_z">
      <router-link :to="{path:'/myYue_z'}" class="balance_z">
        <span class="num01_z">0.00</span>元
        <p>我的余额</p>
      </router-link>
      <router-link :to="{path:'/myYouhui_z'}" class="preferential_z">
        <span class="num02_z">{{3}}</span>个
        <p>我的优惠</p>
      </router-link>
      <router-link :to="{path:'/myJifen_z'}" class="integral_z">
        <span class="num03_z">{{0}}</span>元
        <p>我的积分</p>
      </router-link>
    </div>
    <div class="dingdan_z">
      <router-link :to="{}">
        <p class="hr_z">
          <i class="iconfont icon-weibiaoti-"></i>
          <span>我的订单</span>
          <span class="you_z">></span>
        </p>
      </router-link>
      <router-link :to="{}">
        <p class="hr_z">
          <i class="iconfont icon-jifenshangcheng"></i>
          <span>积分商城</span>
          <span class="you_z">></span>
        </p>
      </router-link>
      <router-link :to="{path:'/Myhuiyuan_z',query:users}">
        <p class="hr_z">
          <i class="iconfont icon-huiyuan"></i>
          <span >饿了么会员卡</span>
          <span class="you_z">></span>
        </p>
      </router-link>
    </div>
    <div class="dingdan_z">
      <router-link :to="{path:'/ServerCenter'}">
        <p class="hr_z">
          <i class="iconfont icon-fuwuzhongxin"></i>
          <span>服务中心</span>
          <span class="you_z">></span>
        </p>
      </router-link>
      <router-link :to="{path:'/DownLoad'}">
        <p class="hr_z">
          <i class="iconfont icon-eliaomo"></i>
          <span>下载饿了么APP</span>
          <span class="you_z">></span>
        </p>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "my2342_z",
    data(){
      return{
        users:'',
        logino:''
      }
    },
    methods:{
      back() {
        this.$router.go(-1)
      }
    },
   created(){
  this.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
    this.users=res.data;
    if(res.data.message){
      this.logino=false;
    }else {
      this.logino=true
    }
  });
     this.$store.state.shopcar=false;
     this.$store.state.showOrNot = true;
    }
  }
</script>
<style scoped>
  #mine_z {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .myde_z {
    width: 100%;
    height: 8%;
    background: cornflowerblue;
    color: white;
    font-size: 20px;
  }
  .pointLeft_z {
    color: white;
    margin-left: 3%;
    margin-top: 0;
    font-size: 35px;
  }
  .text_z {
    margin-left: 35%;
  }
  .xian_z {
    border-bottom: 1px solid #f1f1f1;
  }

  #headImg_z {
    background: cornflowerblue;
    color: white;
    width: 100%;
    height: 90px;
    position: relative;
  }
  #headImg_z>a,.zero_z>a {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .putIn01_z {
    font-weight: 700;
    font-size: 1.12rem;
    color: #fff;
    position: absolute;
    left: 25%;
    top: 25%;
  }
  .putIn02_z {
    display: inline-block;
    font-size: .84rem;
    color: #fff;
    position: absolute;
    left: 25%;
    top: 55%;
  }
  .bgcImg {
    height: 60px;
    width:60px ;
    border-radius: 50%;
    background-color: beige;
    position: absolute;
    left: 15px;
    top: 15px;
  }
  .pointRight_z {
    position: absolute;
    top: 30%;
    right: 0;
    font-size: 20px;
    color: rgb(255,255,255);
  }
  .zero_z {
    width: 100%;
    background:white;
    display: flex;
  }
  .zero_z>a{
    width: 33%;
    height: 70px;
    text-align: center;
    padding-top: 15px;
    border-right: 1px solid #f1f1f1;
    font-size: 0.8rem;
  }
  .zero_z span {
    font-size: 30px;
    font-weight: 700;
  }
  .num01_z {
    color: #f90;
  }
  .num02_z {
    color: #ff5f3e;
  }
  .num03_z {
    color: #6ac20b;
  }

  .dingdan_z {
    background: white;
    margin-top: 10px;
  }
  .hr_z {
    font-size:1rem;
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;
  }
  .you_z {
    float: right;
    font-size: 1.1rem;
    color: #999;
  }
  a {
    color: #666;
  }

  /*我的订单图标*/
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1455924_okxxdc8jfkg.eot?t=1570955568989'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1455924_okxxdc8jfkg.eot?t=1570955568989#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALcAAsAAAAABpgAAAKOAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBIIEoATYCJAMICwYABCAFhG0HNBvSBcgusG3YEyiUBSwAF/tJALxABM+vtXl7f+/2xIEkolUsmyUaiU6JEBslE4qXcP+31v6pYD4dUU0qK7PLsPrmBmtm1SqPUEhioXE0k0Qlkq8BAsqUZ+KueTNIkCb7497pX4EUyHxAOc65qAsw3hroHvQviqxIIm8Yu4nAITwmUDMuj+W0o28Q3BKwKhAvRObAnfNKkpUohHLNwQTxDg5FtmeNAnjj349/KMkNMnkJQMnFc7sITV/CFNtqbNUkRcAHgnY8RwmrQCJuaqNnbMKi2dSidtNgX4XBl7EY1Yu9aoT114H8BhhVuffEw/xbrclAcu/T28DeqBTyissPyGh+V8j+9KQHXl9HHEHOv3+8duILHBytHg6m1JTAEebV+Hx15HD5b/1Ll0XelZF70W/RdUt/xspzU777pHsf3Zp80+eLJj2c9p2W9KWfnTFHfV+1P/QFTQCD2x5tLggEy/vkKVT37/bZAT63bnL34Hb97BTnsQX/i9ezK4UCoMuSz6tNZrY57qOhpoYB3dnzM1Y5fHPJUBi+RXvFWAolhVk0UVYhV7cLZYUDqFnRebyuj7KJ5AGWbSkQOs4h0/IBJR2PaKJ8Q27EH5R1skHNXSRcWDcf8bZSzDEsIn4FEcHQJWRgXlHYj+UFlaNZAacPYxohAVRcUFRMdGId0zm2RBblEsYkJFFDQx3Kc1hVDWRSYx4LrGCOMbOmsFCqe1OBYGjgdYLCOAwmQngrEEJg0Em0P+Mtfb4fJlug4tCWjgHnMIyKILMjxQoU9UA7pXqvjnt5JWKRrATDSBAJZdAgHco8TKUyIGb9vHmYgCkwNyJsqlEIe0l9pQXry7WvOwA1QJUF3GWD2ismPOEMRvIBAAAA') format('woff2'),
    url('//at.alicdn.com/t/font_1455924_okxxdc8jfkg.woff?t=1570955568989') format('woff'),
    url('//at.alicdn.com/t/font_1455924_okxxdc8jfkg.ttf?t=1570955568989') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1455924_okxxdc8jfkg.svg?t=1570955568989#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-weibiaoti-:before {
    content: "\e612";
  }

  /*积分商城图标*/
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1455938_ltxc4v9yy5i.eot?t=1570956397579'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1455938_ltxc4v9yy5i.eot?t=1570956397579#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANIAAsAAAAAByAAAAL8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqCIIICATYCJAMICwYABCAFhG0HORsxBiMRNmvusZH9RYHdRpxB2CMb3F/jV3bUTBGKG6aCvvxm0FXrC46jplf35HkQD/+/Rrtv/h9Z07SLezfXUMQTpEaIRPx0j2KRPLABJzCgTDbYRrVtKVeJURHmp6zr9tMzEuB/h3QZ1wCYGJePBDmhkxFilrb0ZBoYlxVXob7rC+3/uHf6W+LzAeUy96AuwHhrQHtjFEiBFkhg3jB2gUu4TaDTBPPEmvOWPRqZtSgQV9L5k5qcQ5ZZuBGqmp1ZPFdqiqfFe56F348/S6KhUCZW1o5za89Y8Z1oR6U7bY/4COZ8OrB9JMxDJvbUGrZJcWCepFMLZFPYV3rwfbRtfcZu/3gEUbFSu8EYZNwT02XdalEBsnsfPITro96VclpXfy5Lum2SrK/7l3iRYbnc7ghK9nJ3BRuQ5NLVzc2ByFVvDvu1c93Hd4kb0oqwLOyfhcjLR3Jw+wRDDV6oxQgqFO7fAsD58+Pu3ievpa7fX8/6Pi8UhqxUIlVaEp4dHWvS+h4kIYJDTl5/T3e0BLSrL+sTx7AvhrQhB5/1xsfAMMTrN8vbuhD/oc65ZD+j/jPgWpwR0z/agAZqPR6txwVSKqRmeWzujXW7MZBN9anePpQBsALaV2lg7e/+zeIHxiCCUvyHaroy+PimvBra2ldZPxPNTRmDn8vs2ZB1tqUsssqsjRQOKW+6rFMnWtgy6NtYycibREJj5H1MtfEUksY0VMbNg1KXZVBpLIdOc63f32XILUnkDszxEEDo9wIKvV5C0u8DKuO+QmnUP6j0R4JO+yIndvk5I5LWMxpBD/YHyc0TOWrRUfoVw2swnGWH+CdyTm5oyroYvuCEPMea/A6tCAHxPMIZ3IfDMMPCc4dOyiiybKuK6p5UunlU2mpGI+iB/YHk5on81qJLn79ieA2GW+pqlE/knIYHjVLdA3URTL3q7uWR/A4tEQLE8wjOQIeDHZjBUj+tQyelOMK3bFWoGfUVlOuLxq/bhlKaJd2EvTLpu5QIpxzNFFxET64U') format('woff2'),
    url('//at.alicdn.com/t/font_1455938_ltxc4v9yy5i.woff?t=1570956397579') format('woff'),
    url('//at.alicdn.com/t/font_1455938_ltxc4v9yy5i.ttf?t=1570956397579') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1455938_ltxc4v9yy5i.svg?t=1570956397579#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-jifenshangcheng:before {
    content: "\e616";
    background-color: rgb(252, 123, 83);
    color: beige;
  }

  /*饿了么会员卡图标*/
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1455944_12hr2vg5iozk.eot?t=1570956875371'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1455944_12hr2vg5iozk.eot?t=1570956875371#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAABswAAAK/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBVIFNATYCJAMICwYABCAFhG0HMRv0BcgOJWVHkZDICUJABPX7oXv/vxCAykQCamQXFo5aCyQcuRpVYdLxFYZ1q2i+/dxN9P+9NUQPFU+T+xO/3XCLc6CahQxNExXPJpU/7p3+ed4FMt95l8sckyZ1AcaBFOBeGG3hAgq5Yewmggd4nkCpTolYS9WNnUAoAdMCca1RyYCwEJAkJ10sFDasTeI1KFCcPWFf4RX/fvw0EUIyBTlQtXpapQSlX+wwK5/+f+yQIkC4nA3OJnKMAxKx2ZhYxhEOlaM0wdULHKs8+GL//5+axFH1wvnrQGk5aNcFzyTEokdlz0CiP4uAjUn7ko9W0Debu+BxQ2f3TuDM/uqu31qUonhY6/Om96L6XC5K+szjO0A9O+io6qX3u1w7vj0E2eLm3vN0c3qPkjzbmHFnP7e33vpQeR+qBq+aqcaHpCsetTx3tb5URxc8jN8mXpW2DsS9UKzSPy3ibqzGT4lX629uiiXzBY6s3okz82lvtsNZlET+aGkL+nfFR8t/pUAof89+/6m/8WQl9vOkaupXMZXA5/OiBq5LhrkoPrUz+IXCgW0pFgNjlkJhYyaziHNrNaVK8Z/pqXU/VdNwv5lQrOGuXUU6MsgV60cTOQ4FykxCoWKzUGpMzeYydTCOSCUYtaBBqHYCmUofIVftGk3kHRRo9AqFqoMDpbajbs8yg6ERL2IkI0gJ5SNQozAZGWQmYlHejlQ2vQznxZzWjbBVE4ZpyanldA0yIrzEAuugKp0QBjLYZIDV2mVIrzdBMzZpkYIkqwkx56ekME03SlaYDEBsEYbIEIgSJDcC0lAwMWJod0Jc+Xw7RMVGTwZ3tIw4uyGYlWZwKE2y1AFojcI4qOVRrrEapJKOIBgQAzMxgKo1G6KHCRPI3DxKC1EgkqknxMzypRidmKGK5O1Vhr/bA6WANgs4NFd0btOM2GRGAAAA') format('woff2'),
    url('//at.alicdn.com/t/font_1455944_12hr2vg5iozk.woff?t=1570956875371') format('woff'),
    url('//at.alicdn.com/t/font_1455944_12hr2vg5iozk.ttf?t=1570956875371') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1455944_12hr2vg5iozk.svg?t=1570956875371#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-huiyuan:before {
    content: "\e692";
    background-color:  rgb(255, 198, 54);
    color: beige;
  }

  /*服务中心图标*/
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1455950_xoy96km858o.eot?t=1570957052351'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1455950_xoy96km858o.eot?t=1570957052351#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOMAAsAAAAABzAAAAM+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqCNIIfATYCJAMICwYABCAFhG0HNhtLBsiuMG7hCVW6AoUERnXZLn/NYQYoiaDa77Nn3x6iAkALJC9I9qugUCCRysd4lqkotsA67mBSl+rDvEUBwAkYZb9iPL0cAp4Qy2OvE+PtNHYrbMCNHOkiC244ylM37+39dwkuysLO1yLuqUXb0mmJr2zQSPaAWxGl1rYbRjwDrskfE88DmmNUWjRV4wDHrQPtslELb6DYw9gFL3A3gWpdfKk2kjIKgIHMHhSIs5itBQYFvdwRHyqF8oaZeSJm6KpM19Jbcid6fvxDGJCUFeyk/aXEBhDz09TpU1zZrYpC6lnOCjaPAhOATBxutO+lnQQnaKvWgzr6gGPFBz/t7gb8w77wCKKcHVsLOiD/mQSe8FFjE8iw/Qzg+qSR5Ia5GstT79+/fRr2pMnh/7Hd/37Y02ipnXnXX/y6+H3h4uI84YV2o3fvC8DOFxH7/l3Ru3cFBQu728KK3/8sfPuxoGGB27UpWNi8WfHyVmhEHz+bZjL+4fDKSaW+z659RV63R5b9P5MY8Zu65UmP8JWquJBY1fP05CrU5gW7muGQZp9puG5tuOnuy3TJZLtsJau6YeXRUm+v4uRp/Zs5uZmvVIfS/347mtEYvF+qDECpuhbpwTP46nI2Hefe7cuvpdZv378/e+xortX7Ru/xrt7whnNmT6DnvfFqnxYQA9iF4av5sLb8+4f5GjFIza3/qMngy/pbkXiYE6i8R0fwrwuy+3+XfJiL7GDK6MgKJGfMOjChWjV2IXezb1PVbS8WDZXaXs9ZoTNDodIAkRkTKFNjAeUqLaPauOT5NVoQ2iJXYcwgQGh0hqTecxQaPSUy4yvKtPuFco2hjWpHA61YYyiwkU1QLUUNsK4V4npJZFwTNYrj8xCr8LUkL4qYRYhosAcGTc2UI8lIRGSJMZomNphSBjJEEmAS2A/xvARlIjWieuqvplSODpguNZ3Iv14SgJF1BFKLQhpAdVpBWD2JiAmqU0aVx+dBWApeLdJRVuctghAauHMoiL/AAUSyXBxU9ijHaDRhBaMoBsQgJAIoCVgR3glKILm5WyOkHuVPPcEvixaAKjFD5f7bK4W/WwPVbE0KZ3KhtqQ0K21qSWRbsAgAAAA=') format('woff2'),
    url('//at.alicdn.com/t/font_1455950_xoy96km858o.woff?t=1570957052351') format('woff'),
    url('//at.alicdn.com/t/font_1455950_xoy96km858o.ttf?t=1570957052351') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1455950_xoy96km858o.svg?t=1570957052351#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-fuwuzhongxin:before {
    content: "\e60d";
    background-color: cornflowerblue;
    color: white;
  }

  /*下载饿了么APP图标*/
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1455952_r01remox5xk.eot?t=1570957176623'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1455952_r01remox5xk.eot?t=1570957176623#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAAsAAAAABwAAAALcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqCCIFrATYCJAMICwYABCAFhG0HMRsSBsgOJU2PQKHgAQJAPHy/9nru7gsByEgCRaAQVVkFZFUrXY1Ox7MRf9C//BRySiPvzrnmUkCTOREfwvT/sMhbfeLe8f+/xOc773Jce9OkLsA4kALcC6MNEkiBBOYNYzes4HWaQLluTiSWV5OygLwkmxSIxztWOZCf+SXJSZUKxTsrk/gOipRmXyWfAL6134//PEKeTFEuq9i6jq4CYb+G8wyp9ssXh7URvJKzwllHjklAIvZ27Ruk+vgkKeVRXFo/IFZp8Gv4slDzhf3jEUSxrLgSdOr8ZxKUwkflzkCiN1uAS6QXkte6qTdpHL00kZ174aV+/MpUbvE15847l/33odffvw0eH9Nes3qSNDa1dWT7PndyUnc/5d27N2+ylrbnvX2buzlpOLNxepg7MaM7AXLOmM60wbje5IVs5YvX0rSil+L0UvvmT46XC/yERP6sQzG/n6vyemp0lMhbHv3/6CYbWB1Ow8cc/b/1hzsMKI+EJ1fLrJ04cz9FBp+qJ7k5OO/feXD7/NeT2tuDT8/2/GHhv58JR/+TeQCF5yR/+ce/8fD+8+1Stek/8hUJvD2U/6ILwZyU3okj+KMCwJYUizJDlkLBbjqzRepOq8qVo8B01/uIqm66/XQo1fQSzhJdI3KlBolEn0SRClMoVmoO5SbErq/QgJASqQzjejSEWjvIVPuBXK2nRKJ/QJFmX1CsNqRQ7iAadqwwHJzypXeonKIqWNEAOZVYyBQmqtiVZiBWDb+cTEUtIwcRMScE3V3clqlYJESExBxxLcuDUgYyBAtgjHYe4vMxFBHMRZXUhU2pKMDVldm7kkslFgBFSwikHIVUgSo0gDgqYUJM3ZlSXH0+A8JSg68cOWka8eZACDFO/5A7F24ARKxcCNRUlEvEarF4oCgGxCAwAShGG4bw8WGQaH8YF1KJcsFGiIoEcM3bMaByF/ZKwd/tgnKZJot8YK7k6pFTjgUYAA==') format('woff2'),
    url('//at.alicdn.com/t/font_1455952_r01remox5xk.woff?t=1570957176623') format('woff'),
    url('//at.alicdn.com/t/font_1455952_r01remox5xk.ttf?t=1570957176623') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1455952_r01remox5xk.svg?t=1570957176623#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-eliaomo:before {
    content: "\e68c";
    color: rgb(60, 171, 255);
  }
</style>
