<template>
	<div class="miBackTop" @click="backTop" v-show="visible">
		<a href="javascript:;">
			<img src="../assets/images/icon/App.gif" alt="" />
		</a>
		<img src="../assets/images/icon/top.451d650ecd.png" alt="" />
	</div>
</template>

<script>
	export default {
		data() {
				return {
					visible: true
				}
			},
			mounted() {
				window.addEventListener("scroll", this.scrollsToTop);
			},
			methods: {
				scrollsToTop() {
					let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
					let browserHeight = window.outerHeight;
					if(scrollTop > browserHeight) {
						this.visible = true
					} else {
						this.visible = false
					}
				},
				backTop() {
					let back = setInterval(() => {
						if(document.body.scrollTop || document.documentElement.scrollTop) {
							document.body.scrollTop -= 100;
							document.documentElement.scrollTop -= 100;
						} else {
							clearInterval(back);
						}
					})
				}
			}
	}
</script>

<style lang='less'>
	.miBackTop {
		/*background: #fff;*/
		width: 40/64rem;
		position: fixed;
		right: 20/64rem;
		bottom: 80/64rem;
		z-index: 99999;
		img {
			width: 40/64rem;
		}
	}
</style>