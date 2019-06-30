<template>
	<div class="searchDw">
		<div class="dingweiD">
			<div class="dingweiHome">
				<a href="#">
					<img src="../assets/images/tabbar/home.png"/>
					<span>首页</span>
				</a>
			</div>
			<div class="dingweiHome">
				<a href="#">
					<img src="../assets/images/tabbar/car.png"/>
					<span>购物车</span>
				</a>
			</div>
		</div>
		<div class="shoppingDw">
			<a href="#">
				<span class="Dwqianggou">立即抢购</span>
			</a>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="less">
	.searchDw{
		position: fixed;
		bottom: .1rem;
		height: .9rem;
		width: 95%;
		background: #fff;
		margin: .2rem;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: .2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.dingweiD{
			display: flex;
			.dingweiHome{
				padding-left: 25/64rem;
				text-align: center;
				img{
					width: 24/64rem;
					height: 24/64rem;
				}
				span{
					display: block;
					font-size: 14/64rem;
					color: #999999;
					font-family: "微软雅黑";
				}
			}
		}
		.shoppingDw{
			padding-right: 35/64rem;
			.Dwqianggou{
				background: #FF6700;
				padding: .1rem .4rem;
				border-radius: 25/64rem;
				color: #fff;
				font-size: 14/64rem;
				font-family: "微软雅黑";
			}
		}
	}
</style>