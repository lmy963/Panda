// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  Axios from "axios"
import lazy from  "vue-lazyload"

Vue.prototype.$axios = Axios
Vue.config.productionTip = false


Axios.interceptors.response.use((res)=>{
	return  res
},(err)=>{
	return Promise.reject(err)
})
Vue.use(lazy,{
	loading:"common/img/logo.png",
	attempt:1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
