<template>
	<section class="index-container">
		<div class="index-shopInfo">
			<!-- 左侧图片 -->
			<div class="logo_container">
				<img src="../assets/商家图片.png" alt/>
			</div>
			<!-- 右侧内容 -->
			<div class="index_main">
				<!-- 第一行 品牌 -->
				<div class="index_shopname">
					<i>品牌</i>
					<span>测试品牌</span>
				</div>
				<!-- 星级 -->
				<div class="index-rateWrap">
					<div class="Rating-gray">
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<span class="rate">4.8</span>
					</div>
					<span style="display: flex; width: 100%;">月售0单</span>
					<!-- 配送 -->
					<div class="index-moneylimit">
						<div>
							<span style="display: flex;">
								¥20起送
							</span style="display: flex;">
							<span 配送费5元/>
						</div>
						<div class="index-distanceWrap">
							<span>1km</span>
							<span>30分钟</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "IndexShop"
	}
</script>

<style>
	.index-container {
		background:#fff;
		color: #666;
		padding: 4vw 0;
		border-bottom:0.133333vw solid #eee;
	}
	.index-shopInfo {
		display: flex;
		justify-content: flex-start;
		padding: 0 2.666667vw;
		align-items: stretch;
	}
	.logo_container {
		width: 17.333333vw;
		height: 17.333333vw;
	}
	.logo_container img{
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 0.133333vw solid rgba(0,0,0,0.08);
		border-radius: 0.533333vw;
	}
	.index_main {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		flex-direction: column;
		padding-left: 2.6666667vw;
		font-size: 0.2rem;
		flex-grow: 1;
	}
	.index_shopname {
		align-items: center;
		color: #333;
		font-weight: 700;
		font-size:0.9rem;
	}
	.index_shopname i {
		background: #ffe800;
		margin-right: 1.333333vw;
		padding: 0.266667vw 0.666667vw;
		text-align: center;
		white-space: nowrap;
		font-size: 0.6rem;
	}
	.index_shopname span{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.index-rateWrap {
		width:100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		justify-content: space-between;
	}
	.Rating-gray {
		display: flex;
		width: 50%;
		margin-right: 1.066667vw;
		color: #ffbe00;
	}
	.index-rateWrap .rate{
		margin-right: 1.066666vw;
	}
	.index-moneylimit {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.index-moneylimit .index-distanceWrap {
		color: #999;
	}
	.delivery {
		display: flex;
		align-items: center;
		font-size: 0.6rem;
		margin-left:1.066667;
	}
	.delivery .icon-hollow {
		color: #fff;
		background-color: #2395ff;
		padding: 2px;
		box-sizing: border-box;
	}
</style>
