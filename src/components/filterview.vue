<template>
  <div :class="{'open':isSort}" @click.self="hideView">
	<div class="filter_wrap">
		<aside class="filter">
			<div class="filter-nav" :class="{'filter-bold':currentFilter===0}" @click="filterSort(0)">
				<span>{{Almost}}</span>
				<i class="fa fa-caret-down"></i>
			</div>
			<div class="filter-nav" :class="{'filter-bold':currentFilter===1}" @click="filterSort(1)">
				<span>距离最近</span>
			</div>
			<div class="filter-nav" :class="{'filter-bold':currentFilter===2}" @click="filterSort(2)">
				<span>品质联盟</span>
			</div>
			<div class="filter-nav" :class="{'filter-bold':currentFilter===3}" @click="filterSort(3)">
				<span>筛选</span>
				<i class="fa fa-filter"></i>
			</div>
		</aside>
	</div>
	<!-- 排序 -->
	<section class="filter-extend" v-if="isSort">
		<ul>
			<li @click="selectSort(0)">
				<span :class="{'selectName':currentSort == 0}">{{Almost_extend[0]}}</span>
				<i v-show="currentSort == 0" class="fa fa-check"></i>
			</li>
			<li @click="selectSort(1)">
				<span :class="{'selectName':currentSort == 1}">配送费最低</span>
				<i v-show="currentSort == 1" class="fa fa-check"></i>
			</li>
			<li @click="selectSort(2)">
				<span :class="{'selectName':currentSort == 2}">人均从低到高</span>
				<i v-show="currentSort == 2" class="fa fa-check"></i>
			</li>
			<li @click="selectSort(3)">
				<span :class="{'selectName':currentSort == 3}">人均从高到低</span>
				<i v-show="currentSort == 3" class="fa fa-check"></i>
			</li>
			<li @click="selectSort(4)">
				<span :class="{'selectName':currentSort == 4}">通用排序</span>
				<i v-show="currentSort == 4" class="fa fa-check"></i>
			</li>
		</ul>
	</section>
  </div>
</template>

<script>
	export default {
		name:"FilterView",
		data(){
			return {
				currentFilter:Number,
				isSort:false,
				currentSort:Number,
				Almost:'综合排序',
				Almost_extend:[
					'配送最快','配送费最低','人均从低到高','人均从高到低','通用排序'
				]
			}
		},
		methods:{
			filterSort(a){
				this.currentFilter = a
				this.isSort = true
				this.$emit("searchFixed",true)
				if((a!==0)&&(a!==1)&&(a!==2)&&(a!==3)){
					this.hideView()
				}
			},
			hideView(){
				this.isSort = false;
				this.$emit("searchFixed",false)
			},
			selectSort(index){
				this.currentSort = index
				this.Almost = this.Almost_extend[index]
				this.hideView()
			}
		}
	}
</script>

<style scoped>
	.filter_wrap {
		background:#fff;
		position: sticky;
		top: 54px;
		z-index: 100;
	}
	.filter {
		position: relative;
		border-bottom: 1px solid #ddd;
		ling-height:10.4vw;
		z-index: 101;
		height: 6.666667vw;
		display: flex;
		justify-content: space-around;
	}
	.filter-nav {
		flex: 1;
		text-align: center;
		color: #666;
		font-size: 0.8333rem;
	}
	.filter-nav i {
		width: 1.6vw;
		height: 0.8vw;
		margin-left:1.333333vw;
		margin-bottom: 0.533333vw;
		fill: #333;
		will-change: transform;
	}
	.filter-bold{
		font-weight: 600;
		color: #333;
	}
	.open {
		position: fixed;
		top: -30px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		transition: all 0.3s ease-in-out;
		z-index: 3;
	}
	.filter-extend {
		background-color: #fff;
		color: #333;
		padding-top: 2.133333vw;
		position: absolute;
		width: 100%;
		z-index: 4;
		left: 0;
		top: 24.533333vw;
	}
	.filter-extend li {
		position: relative;
		padding-left: 5.333333vw;
		line-height: 10.666667vw;
		overflow: hidden;
	}
	.fa-check {
		position: relative;
		top: 8px;
		float: right;
		color: #009eef;
		margin-right: 3.733333vw;
		ling-height:10.666667vw;
	}
	.selectName {
		color: #009eef;
	}
</style>
