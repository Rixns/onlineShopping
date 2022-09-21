// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js'
import store from '@/store'

// 使用插件
Vue.use(VueRouter);

// 配置路由
let router = new VueRouter({
	// 配置路由
	routes,
	scrollBehavior (to, from, savedPosition) {
	    // return 期望滚动到哪个的位置
		return {y:0}
	  }
})
router.beforeEach( async (to,from,next)=>{
	// 用户登录了才有token
	let token = store.state.user.token
	// 用户信息
	let name = store.state.user.userInfo.name
	if(token){
		if(to.path=='/login'){
			next('/home')
		}else{
			if(name){
				next()
			}else{
				try{
					await store.dispatch('getUserInfo')
					next()
				}catch(e){
					//TODO handle the exception
					alert(e.message)
				}
			}
		}
	}else{
		let toPath = to.path
		if(toPath.indexOf("/trade")!=-1|| toPath.indexOf("/pay")!=-1|| toPath.indexOf("/center")!=-1){
			// 把未登录的时候向去而没去成的的信息存储与地址栏当中
			next('/login?redirect='+toPath)
		}else{
			next()
		}
		
	}
})


export default router