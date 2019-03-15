<template>
	<div class="m-header">
		<router-link to="/" class="logo" tag="div">
			<img src="@/common/img/logo.png">
		</router-link>	
		<ul class="navList">
			<li v-for="(item,index) in list" :key="index" @click="goTab(item.cate)">
				<router-link :to="item.path" class="item" active-class="active" tag="span" >{{item.name}}</router-link>
			</li>
		</ul>
			 <router-link class="search" to="/search" tag="div"></router-link>	
	</div>
</template>
<script>
	export default{
		name:"m-header",
		data(){
			return {
				list:[
				{ name:"首页",path:"/enter/home",cate:null},
				{ name:"游戏",path:"/enter/game",cate:'lol'},
				{ name:"娱乐",path:"/enter/amusement",cate:'yzdr'},
				{ name:"星秀",path:"/enter/startshow",cate:null}
				]
			}
		},
		methods:{
			goTab(data){
				this.$store.commit('changeCate',data)
			}
		}
	}
</script>
<style lang="less" scoped>
@import "~style/index.less";
	.active{
		color:#1cd39b;
		.pb(5);
		border-bottom:2px solid #1cd39b;
	}
	.m-header{
		.h(44);
		.w(375);

		display:flex;
		justify-content:space-between;
		.logo{
			.w(75);
			overflow: hidden;
			img{
				display:block;
				.mt(10);
				height:100%;
			}

		}
		.navList{
			     overflow:hidden;
				li{ 
					.h(44);
					.w(48);
					.l-h(30);
					.fl();
					.tac();
					.item{
						font-size:@f-s-m;
					}
				}
				
			}
		.search{
			.w(44);
			.h(44);
			background: #fff url("../../../common/img/search.png") 50% no-repeat;
			box-shadow: -0.05rem 0 0.15rem 0 rgba(0,0,0,.1)
		}
	}
</style>