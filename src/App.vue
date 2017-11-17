<template>
	<main>
	<v-header></v-header>
	<router-view></router-view>
	<v-footer></v-footer>
	</main>
</template>

<script>
	 
	import  vheader from './component/headerORfooter/header.vue'
	import  vfooter from './component/headerORfooter/footer.vue'
	export default {
		components:{
			'v-header':vheader,
			'v-footer':vfooter
		}
	}
</script>
	
<style>
	*{
		margin: 0;
		padding: 0;
	}
</style>