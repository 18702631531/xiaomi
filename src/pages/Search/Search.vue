<template>
	<div id="searchWrap">
		<mibanner swiperId="serchSwiper">
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/02ae8e94-0832-03a8-b476-dceead2355c0.webp"/></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp"/></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/1536b35d-2a41-9343-8a53-b8f5a679eede.webp"/></a>
			</div>
			<div slot="bannerImg" class="swiper-slide">
				<a href="#"><img src="//i8.mifile.cn/v1/a1/5d30814e-27d0-6bd5-8515-f05afefffae8.webp"/></a>
			</div>
		</mibanner>
		<searchcuxiao></searchcuxiao>
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
	import mibanner from'../../components/miBanner'
	import searchmitxt from'../../components/searchMitxt'
	import searchrongliang from'../../components/searchrongliang'
	import searchxinxi from'../../components/searchXinxi'
	import searchpinglun from'../../components/searchPinglun'
	import searchlazyload from'../../components/searchLazyload'
	import searchtuijian from'../../components/searchtuijian'
	export default{		
		components:{
			mibanner,
			searchcuxiao,
			searchDwbutton,
			searchmitxt,
			searchrongliang,
			searchxinxi,
			searchpinglun,
			searchlazyload,
			searchtuijian
		}
	}
</script>
<style lang='less' scoped>
	#searchWrap{
		margin-bottom: 1.2rem;
		position: relative;
	}
	.swiper-pagination-bullet {
		width: 10/64rem;
		height:10/64rem;
		border-radius: 50%;
		background: #E5E5E5;
	}
	.swiper-pagination-bullet-active {
		background: #fff;
	}
</style>