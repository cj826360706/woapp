<template>
	<main>
		<div id="top">
			<span @click="back">✘</span>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="" lang="less">
	#top{
		width: 100%;
		background-image: url(../../../img/me_03.jpg);
		background-size:100% ;
		background-repeat:no-repeat ;
		height:680px;
	}
	main>span{
		position: absolute;
		left:5%;
		top: 10%;
		color: white;
		font-size:30px ;
	}
</style>