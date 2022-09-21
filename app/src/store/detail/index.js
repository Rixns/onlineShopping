import  {reqGetGoodsInfo,reqAddOrUppdateShopCart} from '@/api'
// 封装游客身份模块uuid
import {getUUID} from '@/utils/uuid_token'
// state:仓库存储数据的地方
const state = {
	goodsInfo :{},
	uuid_token:getUUID()
}
// mutation:修改state的唯一手段
const mutations = {
	GETGOODSINFO(state,goodsInfo){
		state.goodsInfo = goodsInfo
	}
}
// actions:可以书写自己的业务逻辑，也可以处理异步
const actions = {
	// 获取产品信息
	async getGoodsInfo({commit},skuid){
		let result =await reqGetGoodsInfo(skuid)
		if (result.code == 200){
			commit('GETGOODSINFO',result.data)
		}
	},
	// 将产品添加到购物车中
	async addOrUppdateShopCart({commit}, {skuId,skuNum}){
		// 加入购物车返回的结果
		
		let result =await reqAddOrUppdateShopCart(skuId,skuNum)
		if(result.code == 200){
			return "ok"
		}else{
			return Promise.reject(new Error('fail'))
		}

	}
}
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {
	categoryView(state){
		// 当前计算出的categoryView至少是一个空对象，假的报错不会有了
		return state.goodsInfo.categoryView || {}
	},
	skuInfo(state){
		return state.goodsInfo.skuInfo || {}
	},
	spuSaleAttrList(state){
		return state.goodsInfo.spuSaleAttrList||[]
	}
	
}
// 对外暴露store类的一个实例
export default {
	state,
	mutations,
	actions,
	getters	
}