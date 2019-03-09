<template>
	<div class="enter">
		<m-header></m-header>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	import MHeader from "commom/m-header/m-header"
	import Home from  "pages/home/home"
	import Game from "pages/game/game"
	import Amusement from "pages/amusement/amusement"
	import startshow from "pages/startshow/startshow"
	  startshow 
	export default{
		name:"enter",
		components:{
			MHeader,
		 	Home,
		 	Game,
		 	Amusement,
		 	startshow
		}
	}
</script>
<style lang="less" scoped>
@import '~style/index.less';
</style>