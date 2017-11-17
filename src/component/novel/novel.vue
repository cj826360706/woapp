<template>
	<main>
		<div id="center" class="clearfix">
			<ul style="height: 39px;">
				<li style="float: left;"><img src="../../img/center_08.png" @click="add" style="width: 30px;padding-top: 5px;" /></li>
				<li style="height: 29px;"><p>阅读</p></li>
				<li><router-link to="/shujia"><img src="../../img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>

			<div id="lunbo">
				<ul id="banner">
					<li><img src="../../img/houmen.jpg" style="width: 100%;"/></li>
					<li style="text-align: left;margin-left: 1rem;" class="lis">
						<h3>侯门新妇</h3>
						<p><span>类别:</span>古代言情</p>
						<p><span>作者:</span>海青拿天鹅</p>
						<p><span>状态:</span>已完结</p>
						<p><span>小说字数:</span>487486 字</p>
						<p><span>更新日期:</span>2015-06-25</p>
					</li>
				</ul>
				<ul class="uls">
					<li>
						<h3>小说介绍:</h3>
						<p style="font-family:'楷体';font-size: 18px;">
							天下大乱，群雄并起。
							阖族抄灭的高门女子傅瑾，被迫嫁给了如日中天的枭雄长子魏郯。
							侯门新妇自得群臣关怀，在门阀倾轧，乱世流离时，为求在乱世中求生，经营生意，为妇持家，谋一生安稳。
							战乱，让她淡看宫廷之变，权力之争。
						</p>
					</li>
				</ul>
			</div>
			<div id="section">
				<ul style="margin: 0 auto;">
					<li v-for="i in 32">
						<router-link to="/novels">第{{i}}章</router-link>
					</li>
				</ul>
			</div>
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
				arr:[]
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res) {
				this.arr = res.body.novels
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
		color: #f1fff1;
		font-family: "楷体";
	}
	
	#lunbo {
		width: 97%;
		margin-left: 1.5%;
		position: relative;
	}
	
	#banner {
		/*position: absolute;*/
		width: 95%;
		left: 10px;
		height: 155px;
		border-bottom: 1px solid #b8dcb7;
		box-sizing: border-box;
	}
	#banner li{
		float: left;
	}
	#banner li:nth-of-type(1) {
		width: 30%;
		margin-left: 10%;
	}
	
	#lunbo hr {
		border: none;
		border-bottom: 1px solid #b8dcb7;
	}
	
	#banner li img {
		padding-top: 0.3rem;
		height: 135px;
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
	#section {
		width: 100%;
	}
	#section ul{
		width: 94%;
		overflow:hidden ;
		text-align: center;
	}
	#section ul li{
		float: left;
		width: 20%; 
		margin: 0.3rem;
		text-align: center;
		border: 1px solid #74b08f;
		border-radius:20px ;
	}
	.lis p ,.lis h4{
		line-height: 20px;
	}
	.lis span{
		color: black;
	}
	.uls{
		border-bottom: 1px solid #c0dcbf; 
		width: 95%; 
		margin-bottom: 0.5rem; 
		padding-bottom:0.5rem;
	}
</style>