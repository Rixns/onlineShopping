<template>
	<div class="order-right">
		<div class="order-content">
			<div class="title">
				<h3>我的订单</h3>
			</div>
			<div class="chosetype">
				<table>
					<thead>
						<tr>
							<th width="29%">商品</th>
							<th width="31%">订单详情</th>
							<th width="13%">收货人</th>
							<th>金额</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="orders">
				<!-- 每一笔订单 -->
				<table class="order-item" v-for="(order,index) in myOrder.records" :key="order.id">
					<thead>
						<tr>
							<th colspan="5">
								<span class="ordertitle">{{order.createTime}}　订单编号：{{order.outTradeNo}} <span
										class="pull-right delete"><img src="../images/delete.png"></span></span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(cart,index) in order.orderDetailList" :key="cart.id">
							<td width="60%">
								<div class="typographic">
									<img :src="cart.imgUrl" style="width: 100px; height: 100px;">
									<a href="#" class="block-text">{{cart.skuName}}</a>
									<span>x{{cart.skuNum}}</span>
									<a href="#" class="service">售后申请</a>
								</div>
							</td>
							<td :rowspan="order.orderDetailList.length" v-if="index == 0" width="8%" class="center">{{order.consignee}}</td>
							<td :rowspan="order.orderDetailList.length" v-if="index == 0" width="13%" class="center">
								<ul class="unstyled">
									<li>总金额¥{{order.totalAmount}}</li>
									<li>在线支付</li>

								</ul>
							</td>
							<td :rowspan="order.orderDetailList.length" v-if="index == 0" width="8%" class="center">
								<a href="#" class="btn">{{order.orderStatusName}} </a>
							</td>
							<td :rowspan="order.orderDetailList.length" v-if="index == 0" width="13%" class="center">
								<ul class="unstyled">
									<li>
										<a href="mycomment.html" target="_blank">评价|晒单</a>
									</li>

								</ul>
							</td>
						</tr>
					</tbody>
				</table>

			</div>
			<div class="choose-order">
				<Pagination
				:pageNo="page" 
				:pageSize="limit"
				:total="myOrder.total"
				:continues="5"
				@getPageNo="getPageNo"
				></Pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myOrder',
		data() {
			return {
				// 当前第几页
				page: 1,
				// 每一页展示的数据个数
				limit: 3,
				// 存储我的订单数据
				myOrder: {}
			}
		},
		mounted() {
			//获取我的订单的数据方法
			this.getData()
		},
		methods: {
			async getData() {
				// 解构参数
				const {
					page,
					limit
				} = this
				let result = await this.$API.reqMyOrderList(page, limit)
				if (result.code == 200) {
					this.myOrder = result.data
				}
			},
			// 获取当前点击的那一页
			getPageNo(page){
				// 修改组件相应式数据
				this.page = page
				this.getData()
			}
		}
	}
</script>

<style>
</style>
