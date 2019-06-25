<template>
	<div>
		<miHeader class="headerWrap">
			<img slot="HleftImg" class="HleftImg" src="../../assets/images/icon/logo.png" alt="" />
			<div slot="search" class="headerSearch">
				<img class="searchImg" src="../../assets/images/icon/search.png" alt="" />
				<input type="text" name="search" placeholder="搜索商品名称" />
			</div>
			<img slot="HrightImg" class="HrightImg" src="../../assets/images/tabbar/tabbar4.png" alt="" />
		</miHeader>
		<miBanner>
			
		</miBanner>
	</div>
</template>
<script>	
	import miHeader from '../../components/miHeader'
	import miBanner from '../../components/miBanner'
	export default{		
		components:{
			miHeader,
			miBanner
		}
	}
</script>

<style lang='less'>
	
</style>