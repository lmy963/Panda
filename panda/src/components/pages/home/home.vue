<template>
	<div class="home">
		<m-header></m-header>

		<banner></banner>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	import MHeader from "commom/m-header/m-header"
	import banner from  "commom/banner/banner"
	export default{
		name:"home",
		components:{
			MHeader,
			banner
		}
	}
</script>
<style lang="less" scoped>
@import '~style/index.less';
</style>