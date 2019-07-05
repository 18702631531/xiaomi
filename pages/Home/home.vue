<template>
	<div class="homeCon">

		<homeHeader></homeHeader>

		<!--<miBackTop> </miBackTop>-->
		
	</div>
</template>
<script>
	import homeHeader from '../../components/homeHeader'
//	import miBackTop from '../../components/miBackTop'
	export default {
			components: {
				homeHeader,
//				miBackTop
			},
			beforeCreate: function() {
				this.$router.push('/home/homeTuijian')
			},
			mounted() {
				this.getData();
			},
			methods: {

				getData() {
					this.$axios.get("../../../static/data/homeItemData.json")
						.then(
							res => {
								console.log(res.data.homeItemArr);
								this.homeArr = res.data.homeItemArr;
							}).catch(err => {
							console.log("err", err);
						})
				},
				navShow() {
					this.isShow = !this.isShow
				},
				headerNav(index) {
					this.currIndex = index;
				}				
			}

	}
</script>

<style lang='less'>
	
	.homeCon{
		overflow-y: auto;
	}
</style>