<template>
	<div class="amusement">
		<ul class="tab">
			<li to="tab"  
			 v-for="(item,index) in list" class="kind" :key="index"
			  @click= "goTab(item.ename)"><span  :style="item.ename == cate ? 'color:#1cd39b' : ''">{{item.cname}}</span></li>
		</ul>
			
	</div>
</template>
<script>
	import {mapGetters,mapMutations,mapActions,mapState} from "vuex"
	export default{
		name:"amusement",
		data(){
			return {
				list:[]
			}
		},
		computed:{
			...mapGetters(['cate'])
		},
		created(){
			let url = `/xm/index.php?method=category.list&type=yl&__plat=ios`
			this.$axios.get(url)
			.then((res)=>{
				let arr = [];
				for(var i = 0 ; i < 3; i++){
					arr.push(res.data[i])
				}
					this.list = arr;
			})
			.catch((err)=>{
				console.log(err)
			})
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
.amusement{
	.active{
		color:#1cd39b;
		.pb(3);
		border-bottom:2px solid #1cd39b;
	}
	.tab{
		.h(44);
		.w(375);
		.l-h(44);
		display: flex;
		justify-content: space-around;
		.kind{
			font-size:@f-s-s;
		}
	}
}
</style>