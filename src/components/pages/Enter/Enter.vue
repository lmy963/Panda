<template>
	<div class="enter">
		<m-header></m-header>
			<router-view></router-view>
		<div class="tip">没有更多数据了~</div>
		<div  id="copyright">
			<div>
				<span>沪ICP备15043293号</span> | <span>沪网文[2015]0826-226号</span>
				</div>
				<div>
					<span><img class="ico" src="https://i.h2.pdim.gs/0643ec6d05fefffe43dc48b4359db2b1.png">沪公网安备 31010802001046号</span> | 上海熊猫互娱文化有限公司</div>
					<div>地址: 上海闸北区灵石路695号3号楼1804室 | 电话：10108666</div>
				</div>
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
.tip {
    .h(40);
    .l-h(40);
    font-size:@f-s-s;
   	.tac();
    background-color: #f2f2f2;
    color: #999;
}
#copyright {
    border-top: 1px solid rgba(0,0,0,.06);
    .padding(28,0,28,0);
    font-size: @f-s-s;
    line-height: 1.6;
    color: #bcbccb;
    text-align: center;
}

</style>