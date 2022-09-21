import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api"
// state:仓库存储数据的地方
const state = {
	cartList:[]
}
// mutation:修改state的唯一手段
const mutations = {
	GETCARTLIST(state,cartList){
		state.cartList =cartList
	}
}
// actions:可以书写自己的业务逻辑，也可以处理异步
const actions = {
	// 获取购物车列表数据
	async getCartList({commit}){
		let result = await reqCartList()
		if(result.code == 200){
			commit('GETCARTLIST', result.data)
		}
	},
	// 删除购物车某一个产品
	async deleteCartListBySkuId({commit},skuId){
		let result =  await reqDeleteCartById(skuId)
		if(result.code == 200){
			return "ok"
		}else{
			return Promise.reject(new Error('fail')) 
		}
	},
	// 修改购物车某一个产品的选中状态
	async updateChecked({commit},{skuId,isChecked}){
		let result = await reqUpdateCheckedById(skuId,isChecked)
		if(result.code == 200){
			return "ok"
		}else{
			return Promise.reject(new Error('fail')) 
		}
	},
	deleteAllCheckedCart({dispatch,getters}){
		let PromiseAll = []
		getters.cartList.cartInfoList.forEach(item=>{
			let promise = item.isChecked ==1 ?dispatch('deleteCartListBySkuId',item.skuId):''
			PromiseAll.push(promise)
		})
		return Promise.all(PromiseAll)
	},
	// 修改全部产品的状态
	updateAllCartIsChecked({dispatch,state},isChecked){
		let promiseAll = []
		state.cartList[0].cartInfoList.forEach(item=>{
			let promise = dispatch("updateChecked",{skuId:item.skuId,isChecked})
			promiseAll.push(promise)
		})
			// 最终返回的结果
			return Promise.all(promiseAll)
	}
}
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {
	cartList(state){
		return state.cartList[0]||{}
	},
	// // 计算出来的购物车属性
	// cartInfoList(state){
	// 	return state.
	// }
}
// 对外暴露store类的一个实例

export default {
	state,
	mutations,
	actions,
	getters	
}