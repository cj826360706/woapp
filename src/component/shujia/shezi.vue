<template>
	<main>
		<div id="center" class="clearfix">
			<ul style="height: 39px;">
				<!--<li style="float: left;"><router-link><img src="../../img/center_08.png"/></router-link></li>-->
				<li style="float: left;"><img src="../../img/center_08.png" style="width: 30px;padding-top: 5px;" /></li>
				<li style="height: 29px;">
					<p>设置</p>
				</li>
				<li>
					<router-link to="/shujia"><img src="../../img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link>
				</li>
			</ul>
			<div id="news">
				<p>个人信息</p>
				<mt-field label="昵称" placeholder="肥公鸡" v-model="username" class="cons"></mt-field>
				<mt-field label="性别" placeholder="女" type="text" v-model="sex" class="cons"></mt-field>
				<mt-field label="手机号" placeholder="18051959612" type="tel" v-model="phone" class="cons"></mt-field>
				<mt-field label="个性签名" placeholder="幻想很满足" type="text" v-model="website" class="cons"></mt-field>
				<mt-field label="生日" placeholder="" type="date" v-model="birthday" class="cons"></mt-field>
			</div>
			<div id="set">
				<p>设置</p>
				<ul>
					<li>
						<span id="">
							<h3>推送设置</h3>
							<p>选择是否推送消息</p>
						</span>
						<mt-switch></mt-switch>
					</li>
					<li>
						<span id="">
							<h3>提示音</h3>
							<p>选择是否开启音效</p>
						</span>
						<mt-switch></mt-switch>
					</li>
					<li>
						<span id="">
							<h3>缓存清理</h3>
							<p>当前缓存1.5M</p>
						</span>
					</li>
					<li>
						<span id="">
							<h3>注册时间</h3>
							<p>2017-10-21</p>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script>
	
	export default{
		data(){
			return{
				value:true,
				username:'',
				sex:'',
				phone:'',
				website:'',
				birthday:''
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
	body{
		background-color: #f0f0f0;
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
	
	#news>p,#set>p{
		font-size: 28px;
		font-family: "楷体";
		line-height: 50px;
		text-align: center;
		color: #93c3a9;
	}
	#news a{
		min-height:40px;
		background-color: transparent;
	}
	#news>a>div:nth-of-type(2)>div:nth-of-type(2)>input{
		background-color: transparent !important;
	}
	#set ul{
		width: 93%;
		margin: 0 auto;
		/*border: 1px solid #000;*/
	}
	#set ul li{
		width: 100%;
		/*border-top:1px solid  #93c3a9;*/
		border-bottom: 1px solid  #93c3a9;
		line-height: 30px;
		overflow: hidden;
	}
	.mint-switch {
	margin-top: 1rem;
	}
	.mint-switch-input:checked + .mint-switch-core{
		border-color:white !important;
		background-color: transparent !important;
	}
	#set ul li span{
		display: block;
		width: 85%;
		float: left;
		color:#a6a6a6 ;
		font-size:15px;
	}
</style>