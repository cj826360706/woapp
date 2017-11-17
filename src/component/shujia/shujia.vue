<template>
	<main>
		<div id="center" class="clearfix">
			<ul style="height: 39px;">
				<!--<li style="float: left;"><router-link><img src="../../img/center_08.png"/></router-link></li>-->
				<li style="float: left;"><router-link to="/shezi"><img src="../../img/shezi.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
				<li style="height: 29px;">
					<p>书架</p>
				</li>
				<li><router-link to="/entry"><img src="../../img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>
			
			<div id="box">
				<ul>
					<li v-for="a in list">
						<img :src="a.src"/>
					</li>
				</ul>
			</div>
			
			<div id="foot">
			<ul>
				<li>
					<router-link to="/shujia"><img src="../../img/center_117.png" alt="" /></router-link>
					<p>书架</p>
				</li>
				<li>
					<img src="../../../img/center_128.png" alt="" />
					<p>精选</p>
				</li>
				<li>
					<img src="../../img/center_120.png" alt="" />
					<p>发现</p>
				</li>
				<li>
					<router-link to="/me"><img src="../../../img/center_123.png" alt="" /></router-link>
					<p>我</p>
				</li>
			</ul>

		</div>

		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				msg:'',
				list: [{
					src: '../../img/center_26.png'
				}, {
					src: '../../img/center_41.png'
				}, {
					src: '../../img/center_43.png'
				}, {
					src: '../../img/center_45.png'
				},{
					src: '../../img/center_57.png'
				}, {
					src: '../../img/center_71.png'
				}, {
					src: '../../img/center_72.png'
				}, {
					src: '../../img/center_74.png'
				},{
					src:'../../img/center_80.png'
				},{
					src:'../../img/center_82.png'
				},{
					src:'../../img/center_83.png'
				},{
					src:'../../img/center_84.png'
				},{
					src:'../../img/center_14.png'
				},{
					src:'../../img/center_16.png'
				},{
					src:'../../img/center_18.png'
				},{
					src:'../../img/center_20.png'
				}]

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
	
	#box{
		width: 100%;

	}
	#box ul{
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
		text-align: center;
		padding-bottom:1rem;
		background-color: #e5e5e5;
		border-bottom:1px solid #979797 ;
	}
	#box ul li{
		width: 20%;
		list-style: none;
		float: left;
		text-align: center;
		margin:2.5%;
		margin-top: 5%;
	}
	#box ul li img{
		height: 100px;
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
		width: 25%;
		text-align: center;
	}
	
	#foot ul li img {
		width: 25%;
		height: 20px;
	}
</style>