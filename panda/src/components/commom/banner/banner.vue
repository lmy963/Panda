<template>
	<div class="swiper-container banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='(item,index) in list' :key="index">
        <img :src="item.img" >{{item}}
      </div>
    </div>

  </div>
</template>
<script>
	import Swiper from "swiper"
	export default{
		name:"banner",
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.$axios.get("/xm/ajax_slider_cate?__plat=h5&cate=index")
				.then((res)=>{
					this.list = res.data.banners,
					this.$nextTick(()=>{
						this.initBanner()
					})

				})
				.catch((err)=>{
				   console.log(err)
				})
		},
		methods:{
			 initBanner(){
			 	console.log(this.list)
    			var swiper = new Swiper ('.swiper-container', {
         	 	autoplay:true,
         	 	loop: true // 循环模式选项
        })
      }
  }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
  @import '../../../../node_modules/swiper/dist/css/swiper.css';
 .swiper-container{
        .h(188);
        .w(375);

      }
  .swiper-slide img{
         width:100%;
		height:100%;
       }
</style>