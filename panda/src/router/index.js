import Vue from 'vue'
import Router from 'vue-router'
import Enter from  "pages/Enter/Enter"
import Home from 'pages/home/home'
import Game  from "pages/game/game"
import Amusement from "pages/amusement/amusement"
import Startshow from "pages/startshow/startshow"
import Login from "pages/login/login"
import Regist from "pages/regist/regist"
import chat from "commom/chat/chat"
import content from  "commom/content/content"
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path:"/enter",
      component:Enter,
      children:[
        
         
  
        {
          path:"home",
          component:Home
        },
        {
          path:"game",
          component:Game
        },
        {
          path:"amusement",
          component:Amusement
        },
        {
          path:"startshow",
          component:Startshow
        }
        
      
      ]
    },
    {
          path:"login",
          component:Login
        },
        {
          path:"regist",
          component:Regist
        },
    {
     path:"/",
     redirect:"/enter/home"
   }
  ]
})
