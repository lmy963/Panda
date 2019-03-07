import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
// import login from "pages/login/login"
// import regist from "pages/regist/regist"
// import chat from "pages/char/chat"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      childern:[
      {}
      ]
    }
  ]
})
