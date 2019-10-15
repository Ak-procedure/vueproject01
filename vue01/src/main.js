// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
import Vant from 'vant';
import 'vant/lib/index.css';
import '../src/assets/js/PeiShi_w'
import myhttp from '../src/assets/axios/http';

Vue.prototype.myHttp= myhttp;
Vue.use(Vant);

import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    showOrNot:false,
    shopcar:false,
    address:[]
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
