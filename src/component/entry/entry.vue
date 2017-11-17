<template>
	<main>
		<div id="center" class="clearfix">
			<ul style="height: 39px;">
				<!--<li style="float: left;"><router-link><img src="../../img/center_08.png"/></router-link></li>-->
				<li style="float: left;"><img src="../../img/center_08.png" @click="add" style="width: 30px;padding-top: 5px;" /></li>
				<li style="height: 29px;"><p>书城</p></li>
				<li><router-link to="/shujia"><img src="../../img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>

			<div id="lunbo" style="height: 130px;">
				<ul id="banner">
					<mt-swipe :auto="3500">
					  <mt-swipe-item>
						  	<li><img src="../../img/lunbo1.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《不念，不忘》</p>
							</li>
					  </mt-swipe-item>
					  <mt-swipe-item>
						  	<li><img src="../../img/lunbo1.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《不念，不忘》</p>
							</li>
					  </mt-swipe-item>
					  <mt-swipe-item>
						  	<li><img src="../../img/lunbo1.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《不念，不忘》</p>
							</li>
					  </mt-swipe-item>
					  <mt-swipe-item>
						  	<li><img src="../../img/lunbo1.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《不念，不忘》</p>
							</li>
					  </mt-swipe-item>
					  <mt-swipe-item>
						  	<li><img src="../../img/lunbo1.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《不念，不忘》</p>
							</li>
					  </mt-swipe-item>
					</mt-swipe>
				</ul>
			</div>

			<div id="center1">
				<span>
					<h4>猜你喜欢</h4>
					<img src="../../img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多</a>
				</span>
				<ul id="books" style="border-bottom:1px solid #b8dcb7;">
					<li v-for="v in list1">
						<img :src="v.src"/>
						<router-link :to="v.target"><p>{{v.title}}</p></router-link>
					</li>
				</ul>
				<span style="margin-top:8px;">
					<h4>猜你喜欢</h4>
					<img src="../../img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多</a>
				</span>
				<ul id="books">
					<li v-for="v in list2">
						<img :src="v.src"/>
						<router-link :to="v.target"><p>{{v.title}}</p></router-link>
					</li>
				</ul>
			</div>
		</div>
		<div id="foot">
				<ul>
					<li>
						<router-link to="/entry"><img src="../../img/center_117.png" alt="" /></router-link>
						<p>推荐</p>
					</li>
					<li>
						<router-link to="/list"><img src="../../../img/center_128.png" alt="" /></router-link>
						<p>排行榜</p>
					</li>
					<li>
						<router-link to="/classify"><img src="../../img/center_120.png" alt="" /></router-link>
						<!--<img src="../../img/center_120.png" alt="" />-->
						<p>分类</p>
					</li>
					<li>
						<router-link to="/special"><img src="../../../img/center_123.png" alt="" /></router-link>
						<!--<img src="../../../img/center_123.png" alt="" />-->
						<p>专题</p>
					</li>
					<li>
						<router-link to="/search"><img src="../../../img/center_123.png" alt="" /></router-link>
						<p>搜索</p>
					</li>
				</ul>
			</div>
	</main>
</template>

<script>
	export default{
		methods:{
			add(){
				this.$router.go(-1)
			}
		},
		data(){
			return{
				list1:[
					{
						src:'./img/center_26.png',
						title:'侯门新妇',
						target:'/novel'
					},{
						src:'./img/center_41.png',
						title:'情牵久伴',
						target:'/novel01'
					},{
						src:'./img/center_43.png',
						title:'你和我的倾城时光',
						target:'/novel02'
					},{
						src:'./img/center_45.png',
						title:'余爱绕梁',
						target:'/novel03'
					},
				],
				list2:[
					{
						src:'./img/center_57.png',
						title:'心有所慕',
						target:'/novel04'
					},{
						src:'./img/center_71.png',
						title:'你的谎言我的沧海',
						target:'/novel05'
					},{
						src:'./img/center_72.png',
						title:'要有多坚强才敢念念不忘',
						target:'/novel06'
					},{
						src:'./img/center_74.png',
						title:'少年博物馆',
						target:'/novel07'
					},
				],
				
			}
		}
//		mounted(){
//			let show = document.getElementById("show");
//			let center = document.getElementById("center");
//			
//			setTimeout(()=>{
//				show.style.display = "none";
//				center.style.display = "block"
//			},2000)
//		}
	}
</script>

<style scoped="" lang="less">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.clearfix {
		*zoom: 1;
		/*兼容IE*/
	}
	
	#center {
		width: 100%;
		background: url(../../img/smallhead.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: top;
		position: relative;
		background-color: #e8e1e6;
		padding-bottom: 1rem;
	}
	
	#center>ul:nth-of-type(1) {
		padding-top: 9%;
		width:100%;
		text-align: center;
	}
	#center>ul:nth-of-type(1)>span{
		display: block;
		width: 10%;
		height: 58px;
	}
	#center>ul:nth-of-type(1) li {
		float: left;
		width: 33%;
		text-align: center;
	}
	#center>ul:nth-of-type(1) li:nth-of-type(1) img{
		float: left;
		margin-left: 10%;
	}
	#center>ul:nth-of-type(1) li:nth-of-type(3) img{
		float:right;
		margin-right: 10%;
	}
	#center>ul:nth-of-type(1) p {
		font-size: 25px;
		margin-top: 4%;
		/*float: right;*/
		color: #f1fff1;
		font-family: "楷体";
	}
	
	#lunbo {
		width: 97%;
		margin-left: 1.5%;
		position: relative;
	}
	#lunbo hr {
		border: none;
		border-bottom: 1px solid #b8dcb7;
	}
	
	#banner {
		position: absolute;
		width: 95%;
		left: 10px;
		height: 130px;
		border-bottom: 1px solid #b8dcb7;
		box-sizing: border-box;
	}
	#banner li{
		float: left;
	}
	#banner li:nth-of-type(1) {
		width: 43%;
	}
	#banner li img {
		padding-top: 0.5rem;
		width: 130px;
		height: 105px;
	}
	
	#banner li h4,
	#banner li p {
		color: #a2a3a3;
		font-family:"楷体";
	}
	
	#banner li:nth-of-type(2) {
		text-align: center;
		margin-top: 5%;
		width: 54%;
	}
	
	#dot {
		width: 30%;
		position: absolute;
		left: 33%;
		bottom: 0;
	}
	
	#dot li {
		float: left;
		width: 5px;
		height: 5px;
		background-color: #bcbaba;
		border-radius: 50%;
		margin: 5px;
	}
	
	#center1 {
		margin-top:5%;
		margin-left:1rem;
		width: 96%;
	}
	#center1>span{
		display: block;
		width: 96%;
	}
	#center1>span h4{
		color: #a9a9a9;
		font-family:"楷体" ;
		float: left;
	}
	#center1>span a{
		text-decoration: none;
		float: right;
		color: #b4b4b4;
	}
	#books{
		margin-top:0.5rem;
		width: 96%;
		height:155px;
	}
	#books li{
		width:23%;
		float: left;
		text-align: center;
		margin: 0 2px;
	}
	#books li img{
		width:100%;
	}
	#books li p{
		color: #b4b4b4;
		font-size:13px ;
	}
	#foot{
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		background-color:#dbdbdb ;
	}
	#foot ul {
		width: 100%;
		height: 57px;
		margin: 0 auto;
	}
	
	#foot ul li {
		margin-top: 5px;
		float: left;
		width: 20%;
		text-align: center;
	}
	#foot ul li img{
		width:25%;
		height:20px;
	}
</style>