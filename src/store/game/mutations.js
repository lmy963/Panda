import state from  "./state"

export default {
	changeCate(state,param){
		state.cate = param
		console.log(state.cate)
	}
}