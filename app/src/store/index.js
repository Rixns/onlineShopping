import Vue from "vue"
import Vuex from 'vuex'
// 使用插件一次
Vue.use(Vuex)

import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from  './user'
import trade from './trade'
// // state:仓库存储数据的地方
// const state = {}
// // mutation:修改state的唯一手段
// const mutations = {}
// // actions:可以书写自己的业务逻辑，也可以处理异步
// const actions = {}
// // getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
// const getters = {}
// // 对外暴露store类的一个实例
export default new Vuex.Store({
	// 实现Vuex仓库模块式开发存储数据
	modules:{
		home,
		search,
		detail,
		shopcart,
		user,
		trade
	}
	
	
})