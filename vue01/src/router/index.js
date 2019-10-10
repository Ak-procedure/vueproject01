import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import ComL1 from '../components/ComsL/ComL1'
import First from '../components/first/FirstOne'
import Zhang from  '../components/text_zhang/tem_zhang'
export default new Router({
  routes: [
    {path: '/zj1', component: ComL1},
    {path: '/zj2', component: First},
    {path: '/zj3', component: Zhang},
  ]
})
