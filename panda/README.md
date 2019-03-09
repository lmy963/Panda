### panda


组件划分  >>>

   nav  tab  banner  首页  展示页   直播详情页（视频窗口 评论区（选项卡） 发言栏（礼物卡）  ）   搜索页  
   登录  注册   

nav 
  首页  娱乐 游戏 星秀

tab 
	游戏 >>>>>  
		英雄联盟  王者荣耀  游戏宝贝  堡垒之夜

	更多 -----单独页面
	  
	娱乐 >>>>

		艺能达人  户外直播   美食  

    星秀  

banner  
  

视频窗口 

		
		播放  https://i.h2.pdim.gs/cecb3e331bb5d5359a2aa4788ba3c259.png
		longing  图 https://i.h2.pdim.gs/9d0ef212ec1c94f88680e3ff4cb252fd.gif


数据接口 
	
	 接口暗号   /xm --------  https://api.m.panda.tv/

  首页   Home

  nav  banner  

  	https://api.m.panda.tv/ajax_slider_cate?__plat=h5&cate=index	
 

  分类数据

   https://api.m.panda.tv/ajax_get_live_list_by_multicate?hotroom=1&__plat=h5

  游戏页 Game

  请求接口

   https://api.m.panda.tv/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate=？？？？？
 
 	英雄联盟 ---- cate=lol
 	
 	王者荣耀 ----  cate=kingglory
 	
 	游戏宝贝 ----  cate=gbaby
 	
 	堡垒之夜 ----  cate=fortnite
	

	游戏分类详情页 
	 
	  https://api.m.panda.tv/index.php?method=category.list&type=game

	娱乐页   amusement
	 
	  tab数据 
	 
	  https://api.m.panda.tv/index.php?method=category.list&type=yl&__plat=ios
	 
	  详细内容 
	 
	  https://api.m.panda.tv/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate= ？？？
	 
	  艺能达人 --- yzdr
	 
	  户外直播 --- hwzb
	 
	  美食 --- food
 
	
	 星秀  startShow 
	 
	  https://m.api.xingyan.panda.tv/room/list?xtype=1&banner=1&pageno=1&pagenum=10

 路有嵌套关系

  	
	/enter  
	 

  home   nav  banner  展示页  
   game amusement  startshow  nav  tab  展示页 
 
  
