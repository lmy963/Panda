<template>
	<div class="game"> 
		<ul class="tab">
			<li to="tab"  
			 v-for="(item,index) in list" class="kind" :key="index"
			  @click= "goTab(item.ename)"><span  :style="item.ename == cate ? 'color:#1cd39b' : ''">{{item.cname}}</span></li>
		</ul>
			<router-view></router-view>
	</div>
</template>
<script>
	import {mapGetters,mapMutations,mapActions,mapState} from "vuex"
	export default{
		name:"game",
		data(){
			return {
				list:[]
			}
		},
		computed:{
			...mapGetters(['cate'])
		},
		created(){
			this.$router.push({name:'tab'})
			let url = `/xm/index.php?method=category.list&type=game`
			this.$axios.get(url)
			.then((res)=>{
				let arr = [];
				for(var i = 0 ; i < 4; i++){
					arr.push(res.data[i])
				}
				this.$nextTick(()=>{
					this.list = arr;
				})	
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
.game{
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