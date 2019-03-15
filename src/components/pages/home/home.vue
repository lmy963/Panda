<template>
	<div class="home">
		<banner></banner>
		<div class="box wrapper">
			<ul class="content">
				<li v-for="(item,index)  in list" class="category">
					<h4 class="title"><span>{{item.type.cname}}</span></h4>
					<ul class="context">
						<li v-for="(items,index) in item.items">
							<div class="pic">
								<img v-lazy="items.pictures.img">
								<div class="mask">{{items.name}}</div>
							</div>
							<div class="data">
								<span>{{items.userinfo.nickName}}</span>
								<span class="viewNum">
									<img src="https://i.h2.pdim.gs/24d33cd0a7d81487b91f7c064fa72d17.png">
									{{items.person_num}}
								</span>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
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
		},
		data(){
			return {list:[]}
		},
		created(){
			let url = `/xm/ajax_get_live_list_by_multicate?hotroom=1&__plat=h5`
			this.$axios.get(url)
			.then((res)=>{
				console.log(res)
				this.$nextTick(()=>{
					this.list = res.data
				})
			})
				.catch((err)=>{
					console.log(err)
				})
		}
	}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.box{
	.content{
		.category{
			
			.title{
				position:relative;
				.w(375);
				.tac();
				.h(46);
				.l-h(46);
				font-size:@f-s-m;
				.span{
					position:absolute;
				}
			}
			.context{
				.w(375);
				display: flex;
				overflow: hidden;
				justify-content: space-around;
				align-content:  center;
				flex-wrap:wrap;
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
	}
}
</style>