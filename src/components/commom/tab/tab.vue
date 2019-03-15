<template>
	<div class="common">
		<div class="box wrapper">
			<ul class="content">
				<li v-for="(item,index)  in list.items">
					<div class="pic">
						<img v-lazy="item.pictures.img">
						<div class="mask">{{item.name}}</div>
					</div>
					<div class="data">
						<span>{{item.userinfo.nickName}}</span>
						<span class="viewNum">
							<img src="https://i.h2.pdim.gs/24d33cd0a7d81487b91f7c064fa72d17.png">
							{{item.person_num}}
						</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import{mapGetters} from "vuex"
	import jsonp from "@/common/js/jsonp"
	import lol from "@/data/lol"
	import kingglory from "@/data/kingglory"
	import gbaby from "@/data/gbaby"
	export default{
		name:"common",
		data(){
			return {
				list:[],
			}
		},
		computed:{
			...mapGetters(['cate'])
		},
		mounted(){ 
			this.list = lol;
			// this.url = `/xm/ajax_get_live_list_by_cate?pageno=3&pagenum=10&__plat=h5&cate=lol`
			// this.getData(this.url)
			
		},
		watch:{
			cate(newCate,oldCate){
				newCate === "kingglory" ? this.list = kingglory : (newCate === "gbaby" ? this.list = gbaby : (newCate === 'lol' ? this.list = lol : this.list = ''))
			}
		},
		methods:{
			// getData(url){
			// 	console.log(url)
			// 	this.$axios.get(url)
			// 		.then((res)=>{
			// 			this.list =res;
			// 			console.log(res)
			// 		})
			// 		.catch((err)=>{
			// 			console.log(err)
			// 		})
			// }
		}
	}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.common{
	overflow: hidden;
	.content{
		.w(375);
		display: flex;
		justify-content:space-around;
		flex-wrap: wrap;
		li{
			width:50%;
			.w(178);
			.mb(8);
			.pic{
				.h(100);
				width: 100%;
				border-radius:6px;
				overflow: hidden;
				position:relative;
				img{
					.w(178);
				}
				.mask{
					.h(22);
					width:100%;
					.l-h(22);
					.f(12);
					text-align:left;
					color: #fff;
					position: absolute;
					z-index: 0;
					.bottom(0);
					background-color: rgba(0,0,0,.6);
				}
			}
			.data{
				.h(24);
				.l-h(24);
				.f(12);
				.viewNum{
					display: inline-block;
					.fr();
					img{
						vertical-align: middle;
					}
				}
			}


		}
	}
}
</style>