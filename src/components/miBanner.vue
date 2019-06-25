<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default {

		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				loop: true, // 循环模式选项

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			
			})
		}
	}
</script>

<style lang='less'>

</style>