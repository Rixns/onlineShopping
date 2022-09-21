import { reqAddressInfo ,reqOrderInfo } from "@/api"
// state:仓库存储数据的地方
const state = {
	address:[],
	orderInfo:{}
}
// mutation:修改state的唯一手段
const mutations = {
	GETADDRESSINFO(state,address){
		state.address = address
	},
	GETORDERINFO(state,orderInfo){
		state.orderInfo = orderInfo
	}
}
// actions:可以书写自己的业务逻辑，也可以处理异步
 const actions = {
	async getAddressInfo({commit},data){
		let result = await reqAddressInfo()
		if(result.code == 200){
			commit('GETADDRESSINFO', result.data)
			return 'ok'
		}else{
			return Promise.reject(new Error('fail'))
		}
	},
	async getOrderInfo({commit}){
		let result = await reqOrderInfo()
		if(result.code == 200){
			commit('GETORDERINFO', result.data)
			return 'ok'
		}else{
			return Promise.reject(new Error('fail'))
		}
	}
}
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {}
// 对外暴露store类的一个实例
export default {
	state,
	mutations,
	actions,
	getters	
}
