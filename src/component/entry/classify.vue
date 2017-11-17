<template>
	<main>
		<div id="center" class="clearfix">
			<ul style="height: 39px;">
				<!--<li style="float: left;"><router-link><img src="./img/center_08.png"/></router-link></li>-->
				<li style="float: left;"><img src="../../img/center_08.png" @click="add" style="width: 30px;padding-top: 5px;" /></li>
				<li style="height: 29px;"><p>分类</p></li>
				<li><router-link to="/shujia"><img src="../../img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>

			<div id="lunbo" style="height: 130px;">
				<mt-navbar v-model="selected" id="sele">
				  <mt-tab-item id="1">男生</mt-tab-item>
				  <mt-tab-item id="2">女生</mt-tab-item>
				  <mt-tab-item id="3">出版</mt-tab-item>
				</mt-navbar>
				<!-- tab-container -->
				<mt-tab-container v-model="selected" swipeable id="sele">
				  <mt-tab-container-item id="1">
				    <ul>
				    	<li v-for="a in arr1" style="float: left;">
				    		<img :src="a.src"/>
				    		<p>{{a.title}}</p>
				    	</li>
				    </ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				  	<ul>
				    	<li v-for="a in arr2" style="float: left;">
				    		<img :src="a.src"/>
				    		<p>{{a.title}}</p>
				    	</li>
				    </ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				  	<ul>
				    	<li v-for="a in arr3" style="float: left;">
				    		<img :src="a.src"/>
				    		<p>{{a.title}}</p>
				    	</li>
				    </ul>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>

			<div id="center1">
				<span>
					<h4>猜你喜欢</h4>
					<img src="../../img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多</a>
				</span>
				<ul id="books" style="border-bottom:1px solid #b8dcb7;">
					<mt-navbar v-model="selecte" id="seles">
					  <mt-tab-item id="1">二次元</mt-tab-item>
					  <mt-tab-item id="2">漫画</mt-tab-item>
					  <mt-tab-item id="3">杂志</mt-tab-item>
					</mt-navbar>
					
					<!-- tab-container -->
					<mt-tab-container v-model="selecte" swipeable id="sels">
					  <mt-tab-container-item id="1">
					  	<ul>
					    	<li v-for="a in list2">
					    		<img :src="a.src"/>
					    		<router-link :to="a.target"><p>{{a.title}}</p></router-link>
					    	</li>
				    	</ul>
					  </mt-tab-container-item>
					  <mt-tab-container-item id="2">
					  	 <ul>
					    	<li v-for="a in list2">
					    		<img :src="a.src"/>
					    		<router-link :to="a.target"><p>{{a.title}}</p></router-link>
					    	</li>
					    </ul>
					  </mt-tab-container-item>
					  <mt-tab-container-item id="3">
					  	<ul>
					    	<li v-for="a in list2">
					    		<img :src="a.src"/>
					    		<router-link :to="a.target"><p>{{a.title}}</p></router-link>
					    	</li>
				  		 </ul>
					  </mt-tab-container-item>
					</mt-tab-container>
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
						<router-link to="/list"><img src="../../img/center_128.png" alt="" /></router-link>
						<p>排行榜</p>
					</li>
					<li>
						<router-link to="/classify"><img src="../../img/center_120.png" alt="" /></router-link>
						<p>分类</p>
					</li>
					<li>
						<router-link to="/special"><img src="../../img/center_123.png" alt="" /></router-link>
						<!--<img src="./../img/center_123.png" alt="" />-->
						<p>专题</p>
					</li>
					<li>
						<router-link to="/search"><img src="../../img/center_123.png" alt="" /></router-link>
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
				value:1,
				selected:"1",
				selecte:"1",
				swipeable:true,
				arr1:[],
				arr2:[],
				arr3:[],
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
					}
				],
				
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res) {
				this.arr1 = res.body.list1;
				this.arr2 = res.body.list2;
				this.arr3 = res.body.list3;
			})
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
		width:100%;
		text-align: center;
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
		color: #f1fff1;
		font-family: "楷体";
	}
	
	#sele{
		background-color: transparent;
	}
	#sele>a{
		margin-bottom: 0;
	}
	.mint-tab-item.is-selected{
		border-bottom:1px solid #a7c6b6;
	}
	#sele {
		width: 100%;
	}
	#sele ul{
		width: 100%;
		margin: 0 auto;
		margin-top: 10px;
		text-align: center;
		overflow: hidden;
	}
	#sele ul li{
		width: 30%;
		margin: 0 0.35rem;
	}
	#sele ul li img{
		width: 100%;
	}
	
	#seles{
		background-color: transparent;
	}
	
	
	#lunbo {
		width: 97%;
		margin-left: 1.5%;
		position: relative;
	}
	#center1 {
		margin-top:33%;
		margin-left:0.3rem;
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
		width: 100%;
		height:272px;
		overflow: hidden;
	}
	#books li{
		margin: 20px 0.35rem;
		width:30%;
		float: left;
		text-align: center;
	}
	#books li img{
		width:100%;
	}
	#books li p{
		color: #b4b4b4;
		font-size:13px ;
	}
	
	
	
	
	#foot{
		position:fixed;
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