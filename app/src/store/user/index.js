// 登录与注册模块
import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogOut} from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'
// state:仓库存储数据的地方
const state = {
	code:'',
	token:getToken(),
	userInfo:{}
}
// mutation:修改state的唯一手段
const mutations = {
	GETCODE(state,code){
		state.code = code
	},
	USERLOGIN(state,token){
		state.token = token
	},
	GETUSERINFO(state,userInfo){
		state.userInfo = userInfo
	},
	CLEAR(state){
		// 把仓库中相关用户信息清空
		state.token = ''
		state.userInfo = {}
		// 本地存储信息清空
		removeToken()
	}
}
// actions:可以书写自己的业务逻辑，也可以处理异步
const actions = {
	// 获取验证码
	async getCode({commit},phone){ 
		// 获取验证码的这个接口，把验证码返回了，但正常情况，后台把验证码发到用户发到用户手机上
		let result = await reqGetCode(phone)
			if(result.code == 200){
				commit('GETCODE', result.data)
				return 'ok'
			}else{
				return Promise.reject(new Error('fail'))
			}
		
	},
	// 用户注册
	async userRegister({commit},user){
		let result = await reqUserRegister(user)
		if(result.code == 200){
			return 'ok'
		}else{
				return Promise.reject(new Error('fail'))
			}
	},
	// 登录【token】
	async userLogin({commit},data){
		let result = await reqUserLogin(data)
		
		if(result.code == 200){
			commit('USERLOGIN',result.data.token)
			// 持久化存储
			setToken(result.data.token)
			return 'ok'
		}else{
				return Promise.reject(new Error('fail'))
			}
	},
	// 获取用户信息
	async getUserInfo({commit}){
		let result =  await reqUserInfo()
		if(result.code == 200){
			commit('GETUSERINFO',result.data)
			return 'ok'
		}else{
				return Promise.reject(new Error('fail'))
			}
	},
	// 退出登录
	async userLogOut({commit}){
		// 只是向服务器发起一次请求，通知服务器清除token
		let result = await reqLogOut()
		
		if(result.code == 200){
			commit('CLEAR')
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
