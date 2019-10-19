<template>
  <div id="mine_z">
    <div class="myde_z">
      <span @click="back" class="pointLeft_z"><</span>
      <span class="text_z">历史红包</span>
    </div>

    <ul>
      <li class="hongbao_list_li" v-for="(v,i) in hnArr" :key="i" >
        <div class="list_item">
          <div class="list_item_left">
            <span>¥</span>
            <span>{{v.amount}}</span>
            <p>{{v.description_map.sum_condition}}</p>
          </div>
          <div class="list_item_right">
            <h4>{{v.name}}</h4>
            <p>{{v.description_map.validity_periods}}</p>
            <p>{{v.description_map.phone}}</p>
            <i class="iconfont icon-yiguoqi" id="big_z"></i>
          </div>
        </div>
        <div class="list_item_footer" v-if="v.limit_map?true:false">
          <p >{{v.limit_map.restaurant_flavor_ids}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "LiShihongbao",
    data(){
      return{
        msg:'',
        showOrNot:true,
        hnArr:[]
      }
    },
    created() {
      this.msg = this.$route.query.msg;
      this.axios.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0').then((res)=>{
        this.hnArr=res.data;
        console.log(res.data);
      })
    },
    methods:{
      back() {
        this.$router.go(-1)
      },
      change(){
        this.showOrNot=true;
      },
      change2(){
        this.showOrNot=false;
      }
    }
  }
</script>
<style scoped>
  #mine_z {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
  }
  .myde_z {
    width: 100%;
    /*height: 7%;*/
    background: cornflowerblue;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2.6rem;
    color:#fff;
    position: fixed;
    top: 0;
    z-index: 888;
  }
  .pointLeft_z {
    color:#fff;
    margin-left: 3%;
    font-size: 1.7rem;
    font-weight: 100;
  }
  .text_z {
    margin-left: 30%;
  }

  li {
    background: #fff url("../../assets/imgs/hui_bian.png") repeat-x;
    background-size: .73rem .3rem;
    margin-bottom: .73rem;
    border-radius: .37rem;
    position: relative;
  }
  .list_item {
    display: flex;
    justify-content: space-between;
    padding: 1.46rem .73rem 1.15rem;
  }
  .list_item_left {
    font-size: 0;
    border-right: .037rem dotted #ccc;
    flex: 1;
  }
  .list_item_left span:first-of-type {
    font-size: 1.1rem;
    color: #ccc;
    font-weight: 700;
  }
  .list_item_left span:nth-of-type(2) {
    font-size: 2.92rem;
    color: #ccc;
  }

  .list_item_left p {
    font-size: .58rem;
    color: #999;
  }
  .list_item_footer{
    background-color: #f9f9f9;
    padding: .58rem;
    border-bottom-left-radius: .37rem;
    border-bottom-right-radius: .37rem;
  }
  .list_item_right {
    flex: 2;
    margin-left: 1.5rem;
  }
  .list_item_right h4 {
    color: #666;
    margin-left: -1rem;
  }
  .list_item_right p {
    list-style-type: disc;
    margin-left: -1rem;
    font-size: .58rem;
    color: #999;
  }

  .list_item_footer {
    background-color: #f9f9f9;
    padding: .58rem;
    border-bottom-left-radius: .37rem;
    border-bottom-right-radius: .37rem;
  }
  .list_item_footer p {
    list-style-type: disc;
    font-size: .58rem;
    color: #999;
    margin-left: .58rem;
  }
  #big_z {
    position: absolute;
    font-size: 4.5rem;
    top: .2rem;
    right: .3rem;
    color: #ddd;
  }
  ul {
    margin-top: 0.2rem;
    padding: 1.46rem 0.73rem;
  }

  /*过期图标*/
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1458006_mczx9stvsa.eot?t=1571057540697'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1458006_mczx9stvsa.eot?t=1571057540697#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUgAAsAAAAACgwAAATTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqIFIY7ATYCJAMICwYABCAFhG0HMRtiCBHVoxOR/Rxw2+FxuiZSVNateBR+hHzM4C9SZmbewKJhy9ztt1Lke6ouVUgUFl+6AuGxKITBIxQI0xVC/fDvaS/FqHCZ0mYSglE+QN3R+L7Tzfq2Rp1QLEk8+F++4zqBozMhAP64d/r/r86zcD6gXObYtKgLMA4ooLGGdYGk4QDCTHqAZ7gwgYchIEoTS6DN4EgGKGAIYmHeSVFBFlBwabAYogjLgyELDT0iJuzu3VXAeNC/rz+wSAEcAY9QtHMclAt8P0vFJGHnspNUFYFbngm4LQMPzAEY6CDUsoXQFM11STTMIqIbLzb0f5b+/69yWsvGHw8FESRxlNWZM05cmTeqEsfvG1AFaA0APefyQjUqIPG7VdTUGvK62vJy1hTJm+VLaAmGU1KEkuSY4bQUo6QowtESyAogFJrpF+cpKlriRJhSQA1QnMY48yxiNHPnlrtvmXvv2Acf+PvvGyURZ7CczIAFzXfvMvfusQ8e8Pfvp0lTsj5Mh4hDVmBp511fDE8+fF/pK5JQt5F7bonD9911Dt1Tdr2S9O7d7L0kR6O8PYPxLGO1hOY3YfPzeiOw8lxhiSM/L9XDN0g4jCdpfRql2CXULDWvp7foAMYx5otwewpzYbfQD1zA3tC95ou5eXM9eINZzpyuC+lor++CMfN6UnyD7jJ7js+2h44OtghepEc6riCk80owxKGx7mW4ZLElDne6MBijH0yZBKM6LMv9rFzUsHXX3GyXNRsekQZp5CVHu1jVFMxuxuuSYfXCvbe6X0Mb6U+yoqOy2X3vr5PVfb1VJBsRsUwrPwVRb5i7VXN6wQ6qD7d29sotmJV/Y/VQbGgofigyVZYisItUZ94viVUTARReYhaKRIy9TYk/Xe8X/vot3Of3///ar4V+/xLuN9xsUKjlR3q6eGe5xMuyisEO4YcPwh0i6ev9DhFTvV24Y8WkGsrbIBuIZEnrLGj8VCdDoJnUX5YCWcYQ+IqDUL89HNH6E8qdAi1lJlmNg+W0xoh93Vp3w+Q+W5JxZcg8R20bWPGm0MYmEuvp2JT6QHbNIpTIiSIWChYe51xGg098Xu+sKVj5glXC/vHHjBM3hzXW3SCiJx8HowS88iwhm9MfXNwV8MI808HJDcVlysYylRPVk729CqvH71aUkPFhmMf6Gvrs2d1TPbvDFiw3rtMxEmgLEyyzPbPRwve+l+KC+o0Ksr2yxFme2UFo3NmakFyvXJe6s1lnDRL/xZXQce8ME4EvgKUQ6zTgz47FQUxysVkZ6p7/wsqnp//j8mSvLkhnA4S3mFVw5ImsFO7p1gAh4gyIKRfgtAawLSqKin5YsiPL87z6AuUkRJjCxraFaNjgCdNHjTCHADEWECTMCkSZEbI8Ro5qhMgiwJQ+AJFmFziSvIInzTXUCM8gQJFvECQtIUQ5kvaGMYZSPA/IKCpqkA94RZeR9JUb+W+07RDZydfJf8zF+2EeJm98xwtzGVNKt0utBkymEzY4Do+D4M4UUNXB1Xqv42jCHjQoOhlnARlFRQ3yAa/oMmrzyn2ff6Nth8gxNT+Mf8zFtw/zMKVAd8mVqmZbSku3S6WQAXPLpRM2MuEhRgju8H4BVR1cjtC9jtTIpJUM9cvOpdsCRJmgdC+xp0f+8bZR8owBAA==') format('woff2'),
    url('//at.alicdn.com/t/font_1458006_mczx9stvsa.woff?t=1571057540697') format('woff'),
    url('//at.alicdn.com/t/font_1458006_mczx9stvsa.ttf?t=1571057540697') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1458006_mczx9stvsa.svg?t=1571057540697#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-yiguoqi:before {
    content: "\e66c";
  }
</style>
