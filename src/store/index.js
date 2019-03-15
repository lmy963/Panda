import Vue from "vue"
import Vuex from "vuex" 
Vue.use(Vuex)
import game from "./game"
let store = new Vuex.Store({ 
	modules:{
		game
	}
})
export default store;