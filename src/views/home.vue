<template>
	<div class="home">
	  <div class="header">
		<div class="address_map" @click="$router.push({name:'address',params:{city:city}})">
			<i class="fa fa-map-marker"></i>
			<span>{{address}}</span>
			<i class="fa fa-sort-desc"></i>
		</div>
	  </div>
	  <div class="search_wrap" :class="{'fixedview':showFilter}">
		  <div class="shop_search">
		  	<i class="fa fa-search"></i>
		  	搜索商家 商家名称
		  </div>
	  </div>
	  <div class="container">
		  <mt-swipe :auto="4000" class="swiper">
		    <mt-swipe-item>
				<img src="../assets/banner1.jpg" alt/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/banner2.jpg" alt/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/banner3.jpg" alt/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/banner4.jpg" alt/>
			</mt-swipe-item>
		  </mt-swipe>
		 <!-- 分类 -->
		  <mt-swipe :auto="0" class="entries">
		    <mt-swipe-item class="entry_wrap">
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/美食.png" alt/>
					</div>
					<span>美食</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/午餐.png" alt/>
					</div>
					<span>午餐</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/商超.png" alt/>
					</div>
					<span>商超便利</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/水果.png" alt/>
					</div>
					<span>水果</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/药店.png" alt/>
					</div>
					<span>送药上门</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/甜品.png" alt/>
					</div>
					<span>甜品饮品</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/买菜.png" alt/>
					</div>
					<span>买菜</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/跑腿.png" alt/>
					</div>
					<span>跑腿代购</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/汉堡.png" alt/>
					</div>
					<span>汉堡披萨</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/签到.png" alt/>
					</div>
					<span>签到赢饭钱</span>
				</div>
		  	</mt-swipe-item>
			<!-- 第二页 -->
			<mt-swipe-item class="entry_wrap">
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/炸鸡.png" alt/>
					</div>
					<span>炸鸡炸串</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/快餐.png" alt/>
					</div>
					<span>快餐便当</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/包子粥店.png" alt/>
					</div>
					<span>包子粥店</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/米粉面馆.png" alt/>
					</div>
					<span>米粉面馆</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/饭前买券.png" alt/>
					</div>
					<span>饭前买券</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/麻辣烫.png" alt/>
					</div>
					<span>麻辣烫</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/鸭脖卤味.png" alt/>
					</div>
					<span>鸭脖卤味</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/大牌惠吃.png" alt/>
					</div>
					<span>大牌惠吃</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/鲜花绿植.png" alt/>
					</div>
					<span>鲜花绿植</span>
				</div>
				<div class="foodentry">
					<div class="img_wrap">
						<img src="../assets/吃货卡.png" alt/>
					</div>
					<span>吃货卡</span>
				</div>
			</mt-swipe-item>
		  </mt-swipe>
	  </div>
	  <!-- 推荐商家 -->
	  <div class="shoplist-title">推荐商家</div>
	  <!-- 导航 -->
	  <FilterView @searchFixed="showFilterView"/>
	  <!-- 商家列表 -->
	  <div class="shoplist">
		  <indexShop></indexShop>
	  </div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import FilterView from '../components/filterview.vue'
	import indexShop from '../components/indexShop.vue'
	export default {
		name:"home",
		computed:{
			address(){
				return this.$store.getters.address
			},
			city(){
				return (this.$store.getters.location.addressComponent.city || this.$store.getters.location.addressComponent.province)
			}
		},
		data() {
			return {
				showFilter:false
			}
		},
		methods:{
			showFilterView(isShow){
				this.showFilter = isShow
			}
		},
		components:{
			FilterView,
			indexShop
		}
	}
</script>

<style scoped>
	.home{
		width: 100%;
		height: 100%;
		overflow: auto;
		box-sizing:border-box;
	}
	.header, .search_wrap {
		background-color: #009eef;
		padding:10px 16px
	}
	.header .address_map {
		color: #fff;
		font-weight: bold;
	}
	.address_map i {
		margin: 0 3px;
		font-size: 18px;
	}
	.address_map span {
		display: inline-block;
		width: 80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.search_wrap .shop_search {
		margin-top: 10px;
		background-color: #fff;
		padding: 10px 0;
		border-radius: 4px;
		text-align: center;
		color: #aaa;
	}
	.search_wrap {
		position: sticky;
		top: 0px;
		z-index: 999;
		box-sizing: border-box;
	}
	.swiper {
		height: 100px;
	}
	.swiper img {
		width: 100%;
		height: 100px;
	}
	
	.entries {
		background: #fff;
		height: 47.2vw;
		text-align: center;
		overflow: hidden;
	}
	.foodentry {
		width: 20%;
		float: left;
		position: relative;
		margin-top: 2.933333vw;
	}
	.foodentry .img_wrap {
		position: relative;
		display: inline-block;
		width: 12vw;
		height: 12vw;
	}
	.img_wrap img {
		width: 100%;
		height: 100%;
	}
	.foodentry span {
		display: block;
		color: #666;
		font-size: 0.32rem;
	}
	.shoplist-title {
		display: flex;
		align-items: flex;
		justify-content: center;
		height: 9.6vw;
		line-height: 9.6vw;
		font-size: 16px;
		color: #333;
		background: #fff;
	}
	.shoplist-title:after,
	.shoplist-title:before {
		display: block;
		content: "-";
		width: 5.333333vw;
		height: 0.266667vw;
		color: #999;
	}
	.shoplist-title:before {
		margin-right: 3.466667vw;
	}
	.shoplist-title:after {
		margin-left: 3.466667vw;
	}
	.fixedview{
		width: 100%;
		position: relative;
		top: -50px;
		z-index: 999;
	}
</style>
