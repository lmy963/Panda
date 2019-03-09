<template>
	<div class="home">
		<banner></banner>
		
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