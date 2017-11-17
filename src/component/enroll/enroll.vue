<template>
	<main>
		<div id="head">
			<ul>
				<li><img src="../../img/01.jpg" style="width:151px;height: 151px;"/></li>
				<li></li>
			</ul>
		</div>
		<span @click="back">✘</span>
		<img src="../../img/entry.jpg"/>
		<div id="inputs">
			<ul id="uls">
				<li>
					<img src="../../img/renbiao.jpg" style="width:22px;margin-left:5px;">
					<input type="text" name="" id="" value="" v-model="msg"/>
					<img src="../../img/Xbiao.jpg" @click="vanish1">
				</li>
				<li>
					<img src="../../img/xinbiao.jpg" style="width:22px;margin-left:5px;">
					<input type="email" name="" id="" value="" v-model="mbg"/>
					<img src="../../img/Xbiao.jpg" @click="vanish3"/>
				</li>
				<li>
					<img src="../../img/suobiao.jpg" style="width:22px;margin-left:5px;">
					<input type="password" name="" id="" value="" v-model="mag"/>
					<img src="../../img/Xbiao.jpg" @click="vanish2"/>
				</li>
				<div>
					<input type="checkbox" name="" id="" value="" />
					<span><p>记住密码</p></span>
					<input type="checkbox" name="" id="" value="" />
					<span><p>同意<a href="javascript:;" style="color:#596d62;">Gilly协议</a></p></span>
				</div>
				
			</ul>
			
			<ul id="handle">
				<!--<li><router-link to="/enroll">注册</router-link></li>-->
				<li>注册</li>
			</ul>
		</div>	
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'',
				mag:'',
				mbg:''
			}
		},
		methods:{
			vanish1(){
				this.msg = "";
				this.mag = "";
			},
			vanish2(){
				this.mag = "";
			},
			vanish3(){
				this.mbg = "";
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="" lang="less">
	#head{
		width: 50%;
		position: absolute;
		left: 33%;
		top: 15%;
	}
	#head ul li:nth-of-type(1){
		width: 120px;
		height: 120px;
		border: 1px solid white;
		border-radius:50% ;
		overflow: hidden;
	}
	li{
		list-style: none;
	}
	main>span{
		position: absolute;
		left:5%;
		top: 10%;
		color: white;
		font-size:30px ;
	}
	main>img{
		width: 100%;
	}
	#uls>li>input{
		border:none;
		outline: none;
		background-color: transparent;
		width: 75%;
		margin:0 3px;
		margin-top: 2rem;
		font-size: 20px;
		color: white;
	}
	#inputs{
		position:absolute;
		width: 80%;
		margin: 0 auto;
		top:35%;
		left:10%;
		/*border: 1px solid white;*/
	}
	#uls>li{
		border-bottom:1px solid white ;
	}
	#uls>div{
		margin-top: 3%;
	}
	#uls>div>input:nth-of-type(1){
		width: 20px;
		height: 20px;
		margin: 5% 3%;
		float: left;
		color:#d9f1e3;
		background-color: transparent;
	}
	#uls>div>span:nth-of-type(1)>p{
		width: 86px;
		/*margin-left: 10%;*/
		margin-top: 5%;
		float: left;
		color: #d9f1e3;
	}
	#uls>div>input:nth-of-type(2){
		width: 20px;
		color:#d9f1e3;
		height: 20px;
		margin-left: 15%;
		margin-top: 5%;
	}
	#uls>div>span:nth-of-type(2)>p{
		width: 100px;
		float: right;
		margin-top: 5%;
		color:#d9f1e3;
	}
	#handle{
		width: 161px;
		margin: 0 auto;
	}
	
	#handle li a{
		display: block;
		width:100%;
		height: 40px;
		color: #146638;
		text-decoration: none;
	}
	
	#handle li{
		width:100%;
		height: 42px;
		text-align: center;
		border-radius: 21px;
		border: 1px solid white;
		margin: 0 auto;
		margin-top: 20%;
		line-height: 42px;
	}
</style>