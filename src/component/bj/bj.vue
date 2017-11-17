<template>
	<main>
		<div id="app">
			<img src="../../img/loging.jpg" />
			<span id="ps">
				<p>请你先登录<br />如果没有账号请先注册</p>
			</span>
			<ul id="ul">
				<li>
					<p>读</p>
				</li>
				<li>
					<p>۞</p>
				</li>
				<li>
					<p>取</p>
				</li>
				<li>
					<p>۞</p>
				</li>
				<li>
					<p>中</p>
				</li>
			</ul>
		</div>

		<div id="box">
			<ul id="operate">
				<li>
					<router-link to="/loadright" style="font-size: 20px;">点我发现新世界</router-link>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default {
		mounted() {
			let app = document.getElementById('app');
			let Ul = app.getElementsByTagName("ul")[0];
			let box = document.getElementById('box');
			let operate = document.getElementById("operate");
			let lis = operate.getElementsByTagName("li")[0];
			let lisa = operate.getElementsByTagName("a")[0];

			setTimeout(() => {
				Ul.style.display = "none";
				box.style.display = "block";
			}, 2500)

			for(let i = 0; i < lis.length; i++) {
				lis[i].onclick = () => {
					for(let i = 0; i < lis.length; i++) {
						lis[i].style.backgroundColor = '';
						lisa[i].style.color = 'black';
					}
					lis[i].style.backgroundColor = '#74b08f';
					lisa[i].style.color = 'white';

				};
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
	
	main {
		position: relative;
	}
	
	img {
		width: 100%;
		text-align: center;
	}
	
	#app {
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}
	
	#box {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 80px;
		background-color:rgba(255,255,255,0.1);
		display: none;
	}
	
	#box>ul li a {
		text-decoration: none;
		width: 100%;
		height: 80px;
		display: block;
		text-align: center;
		line-height: 80px;
		color: black;
		animation:asa 1s;
	}
	@keyframes asa{
		0%{transform: scale(1);}
		50%{transform: scale(1.5);}
		100%{transform: scale(1);}
	}
	#box>ul li {
		float: left;
		width: 100%;
		height: 80px;
	}
	
	span {
		position: absolute;
		left: 25%;
		top: 60%;
		width: 100%;
		text-align: center;
		height: 65px;
		width: 210px;
		line-height: 30px;
		color: #e8e1e6;
		letter-spacing: 5px;
		font-size: 15px;
	}
	
	#app>ul {
		box-sizing: border-box;
		position: absolute;
		bottom: 18%;
		left: 15%;
		right: 0;
		display: block;
		margin: 0 auto;
	}
	
	#app>ul>li {
		width: 20px;
		height: 20px;
		background-color: transparent;
		list-style: none;
		margin: 0 1rem;
		float: left;
		text-align: center;
		line-height: 20px;
		border-radius: 50%;
	}
	
	#app>ul li:nth-of-type(1) {
		animation: play1 2s linear infinite;
	}
	
	#app>ul li:nth-of-type(2) {
		animation: play2 2s linear infinite;
	}
	
	#app>ul li:nth-of-type(3) {
		animation: play1 2s linear infinite;
	}
	
	#app>ul li:nth-of-type(4) {
		animation: play2 2s linear infinite;
	}
	
	#app>ul li:nth-of-type(5) {
		animation: play1 2s linear infinite;
	}
	
	@keyframes play1 {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(2);
		}
		100% {
			transform: scale(1);
		}
	}
	
	@keyframes play2 {
		0% {
			transform: rotate(0deg) scale(2);
		}
		50% {
			transform: rotate(180deg) scale(1);
		}
		100% {
			transform: rotate(360deg) scale(2);
		}
	}
</style>