// home模块的小仓库
import {reqCategoryList,reqGetBannerList,reqGetFloorList}  from '@/api'
// state:仓库存储数据的地方
const state = {
	// 三级菜单的数据
	categoryList:[],
	// 轮播图的数据
	bannerList:[],
	
	floorList:[]
	
	
}
// mutation:修改state的唯一手段
const mutations = {
	CATEGORYLIST(state,categoryList){
		state.categoryList = categoryList.slice(0,15)
	},
	GETBANNERLIST(state,bannerList){
		state.bannerList = bannerList
	},
	GETFLOORLIST(state,floorList){
		state.floorList = floorList
	}
	
}
// actions:可以书写自己的业务逻辑，也可以处理异步
const actions = {
	// 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
	async categoryList({commit}){
		let result= await reqCategoryList()
		 if(result.code==200){
			 commit("CATEGORYLIST",result.data)
		 }
	},
	async getBannerList({commit}){
		let result = await reqGetBannerList()
		if(result.code==200){
			 commit("GETBANNERLIST",result.data)
		}
	},
	async getFloorList({commit}){
		let result = await reqGetFloorList()
		if(result.code==200){
			 commit("GETFLOORLIST",result.data)
		}
	},
	
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