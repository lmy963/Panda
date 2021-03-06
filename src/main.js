// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 
import  Axios from "axios"
import lazy from  "vue-lazyload"
import store from "./store"
import  "@/common/style/resset.css"
Vue.prototype.$axios = Axios
Vue.config.productionTip = false


Axios.interceptors.response.use((res)=>{
	console.log(res)
	return  res.data
},(err)=>{
	return Promise.reject(err)
})
Vue.use(lazy,{
	loading:"../static/lazy.png",
	attempt:1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
