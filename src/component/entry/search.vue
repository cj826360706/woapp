<template>
	<main>
		<div id="center" class="clearfix">
			<ul style="height: 39px;">
				<!--<li style="float: left;"><router-link><img src="../../img/center_08.png"/></router-link></li>-->
				<li style="float: left;"><img src="../../img/center_08.png" @click="add" style="width: 30px;padding-top: 5px;" /></li>
				<li style="height: 29px;">
					<p>搜索</p>
				</li>
				<li><router-link to="/shujia"><img src="../../img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>

			<div id="lunbo">
				<ul id="banner">
					<li>
						<input type="" name="" id="" value=""  v-model="msg" maxlength="12"/>
						<button @click="get">搜索</button>
					</li>
				</ul>
				<ul id="searcens">
					<dl v-for="(v,i) in box" style="margin-left: 2%;">
						<dt><img :src="v.link[2]['@href']" style="width: 100px;height: 114px;"/></dt>
						<dd><a :href="v.link[3]['@href']" target="_parent">{{v.title.$t}}</a></dd>
					</dl>
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
						<img :src="v.src" />
						<p>{{v.title}}</p>
					</li>
				</ul>
				<span style="margin-top:8px;">
					<h4>猜你喜欢</h4>
					<img src="../../img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多</a>
				</span>
				<ul id="books">
					<li v-for="v in list2">
						<img :src="v.src" />
						<p>{{v.title}}</p>
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
					<p>分类</p>
				</li>
				<li>
					<router-link to="/special"><img src="../../../img/center_123.png" alt="" /></router-link>
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
	export default {
		data() {
			return {
				msg:'',
				data:[],
				box:[],
				list1: [{
					src: './img/center_26.png',
					title: '侯门新妇'
				}, {
					src: './img/center_41.png',
					title: '情牵久伴'
				}, {
					src: './img/center_43.png',
					title: '你和我的倾城时光'
				}, {
					src: './img/center_45.png',
					title: '余爱绕梁'
				}, ],
				list2: [{
					src: './img/center_57.png',
					title: '心有所慕'
				}, {
					src: './img/center_71.png',
					title: '你的谎言我的沧海'
				}, {
					src: './img/center_72.png',
					title: '要有多坚强才敢念念不忘'
				}, {
					src: './img/center_74.png',
					title: '少年博物馆'
				}, ],

			}
		},
		methods: {
			add() {
				this.$router.go(-1)
			},
			get: function() {
				this.$http.jsonp('http://api.douban.com/book/subjects?alt=xd&callback=fn1&start-index=20&max-results=20', {
					params: {
						q: this.msg
					},
					jsonp: 'fn1'
				}).then(function(res) {
				}, function(res) {
					
				})
				var a= this;
				setTimeout(function(){
					a.data = n
					n=1;
					a.box = a.data.entry;
				},1000)
			}
		}
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
	}
	
	#center>ul:nth-of-type(1) {
		padding-top: 9%;
		width: 100%;
		text-align: center;
	}
	
	#center>ul:nth-of-type(1)>span {
		display: block;
		width: 10%;
		height: 58px;
	}
	
	#center>ul:nth-of-type(1) li {
		float: left;
		width: 33%;
		text-align: center;
	}
	
	#center>ul:nth-of-type(1) li:nth-of-type(1) img {
		float: left;
		margin-left: 10%;
	}
	
	#center>ul:nth-of-type(1) li:nth-of-type(3) img {
		float: right;
		margin-right: 10%;
	}
	
	#center>ul:nth-of-type(1) p {
		font-size: 25px;
		margin-top: 4%;
		color: #f1fff1;
		font-family: "楷体";
	}
	
	#lunbo {
		width: 97%;
		margin-left: 1.5%;
		position: relative;
	}
	
	#banner {
		margin: 0 auto;
		width: 95%;
		height: 125px;
		border-bottom: 1px solid #b8dcb7;
		box-sizing: border-box;
	}
	
	#banner li{
		width: 100%;
		float: left;
		text-align: center;
		margin-top: 2rem;
		
	}
	#banner li input{
		width: 100%;
		height: 40px;
		border: 1px solid #a7d0ba;
		border-radius:20px ;
		font-size:20px ;
		outline:none ;
		color: #666;
		font-family:"楷体";
		text-align: center;
		background-color: transparent;
	}
	#banner li button{
		width:100px;
		height:30px;
		border-radius:20px ;
		background-color: transparent;
		border: 1px solid #a7d0ba;
		color: ##74b08f;
		font-size: 20px;
		font-family: "楷体";
		margin-top: 0.7rem;
		outline: none;
	}
	#searcens{
		width: 100%;
		overflow: hidden;
		margin-top: 5%;
		margin-bottom:3%;
	}
	#searcens dl{
		margin: 3% auto;
		height: 120px;
		width: 30%;
		float: left;
		padding-bottom: 30px;
	}
	#searcens dl dd{
		text-align: center;
		
	}
	#searcens dl dd a{
		display: block;
		overflow: hidden;
		text-overflow:ellipsis;
		width: 100px;
		height: 42px;
		text-decoration: none;
		color: #b4b4b4;
	}
	
	
	
	
	
	
	
	
	
	#center1 {
		margin-left:12px;
		width: 96%;
		box-sizing: border-box;
	}
	
	#center1>span {
		display: block;
		width: 96%;
	}
	
	#center1>span h4 {
		color: #a9a9a9;
		font-family: "楷体";
		float: left;
	}
	
	#center1>span a {
		text-decoration: none;
		float: right;
		color: #b4b4b4;
	}
	
	#books {
		margin-top:5px;
		width: 96%;
		height: 155px;
	}
	
	#books li {
		width: 23%;
		float: left;
		text-align: center;
		margin: 0 2px;
	}
	
	#books li img {
		width: 100%;
	}
	
	#books li p {
		color: #b4b4b4;
		font-size: 13px;
	}
	
	
	
	/*#center1 {
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
	}*/
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	#foot {
		position:fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		background-color: #dbdbdb;
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
	
	#foot ul li img {
		width: 25%;
		height: 20px;
	}
</style>