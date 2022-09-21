// search模块的小仓库
import {reqGetSearchInfo} from '@/api'
// state:仓库存储数据的地方
const state = {
	searchInfo:{}
}
// mutation:修改state的唯一手段
const mutations = {
	GETSEARCHINFO(state,searchInfo){
		state.searchInfo = searchInfo 
	}
}
// actions:可以书写自己的业务逻辑，也可以处理异步
const actions = {
	async getSearchInfo({commit}, params = {}) {
		let result = await reqGetSearchInfo(params)
		
		if (result.code == 200) {
			commit("GETSEARCHINFO",result.data)
		}
	}
}
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
// 项目中getters主要作用是 简化仓库中的数据
const getters = {
	goodsList(state){
		return state.searchInfo.goodsList||[]
	},
	trademarkList(state){
		return state.searchInfo.trademarkList
	},
	attrsList(state){
		return state.searchInfo.attrsList
	},
	
}
// 对外暴露store类的一个实例
export default {
	state,
	mutations,
	actions,
	getters	
}