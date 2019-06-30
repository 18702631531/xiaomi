<template>
	<div id="searchWrap">
		<searchcuxiao></searchcuxiao>
		<searchlunbo></searchlunbo>
		<searchmitxt></searchmitxt>
		<searchrongliang></searchrongliang>
		<searchxinxi></searchxinxi>
		<searchpinglun></searchpinglun>
		<searchlazyload></searchlazyload>
		<searchtuijian></searchtuijian>
		<searchDwbutton></searchDwbutton>
	</div>
</template>
<script>
	import searchcuxiao from'../../components/searchcuxiao'
	import searchDwbutton from'../../components/searchDwbutton'
	import searchlunbo from'../../components/searchLunbo'
	import searchmitxt from'../../components/searchMitxt'
	import searchrongliang from'../../components/searchrongliang'
	import searchxinxi from'../../components/searchXinxi'
	import searchpinglun from'../../components/searchPinglun'
	import searchlazyload from'../../components/searchLazyload'
	import searchtuijian from'../../components/searchtuijian'
	export default{		
		components:{
			searchcuxiao,
			searchDwbutton,
			searchlunbo,
			searchmitxt,
			searchrongliang,
			searchxinxi,
			searchpinglun,
			searchlazyload,
			searchtuijian
		}
	}
</script>
<style lang='less'>
	#searchWrap{
		margin-bottom: 1.2rem;
		position: relative;
	}
</style>