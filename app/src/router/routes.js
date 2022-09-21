// 引入路由组件
import Home from '../pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

// 二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
// 路由配置信息
export default [
		{
			path:"/center",
			component:Center,
			meta:{show:true},
			children:[
				{
					path:'myorder',
					component:MyOrder
				},
				{
					path:'grouporder',
					component:GroupOrder
				},
				{
					path:'/center',
					redirect:'/center/myorder'
				},
			]
		},
		{
			path:"/paysuccess",
			component:PaySuccess,
			meta:{show:true}
		},
		{
			path:"/pay",
			component:Pay,
			meta:{show:true},
			beforeEnter:(to,from,next)=>{
				if(from.path=="/trade"){
					next()
				}else{
					next(false)
				}
			}
		},
		{
			path:"/trade",
			component:Trade,
			meta:{show:true},
			// 路由独享守卫
			beforeEnter:(to,from,next)=>{
				if(from.path=="/shopcart"){
					next()
				}else{
					next(false)
				}
			}
		},
		{
			path:"/shopCart",
			component:ShopCart,
			meta:{show:true}
		},
		{
			path:"/addcartsuccess",
			name:'addCartSuccess',
			component:AddCartSuccess,
			meta:{show:true}
		},
		{
			path:"/detail/:skuid",
			component:Detail,
			meta:{show:true}
		}
		,
		{
			path:"/home",
			component:Home,
			meta:{show:true}
		}
		,
		{
			path:"/search/:keyword?",
			component:Search,
			meta:{show:true},
			name:"search"
		},
		,
		{
			path:"/login",
			component:Login,
			meta:{show:false}
		},
		,
		{
			path:"/register",
			component:Register,
			meta:{show:false}
		},
		,
		// 重定向，在项目跑起来的时候，访问/，立马让它定向到首页
		{
			path:'*',
			redirect:"/home"
		}
	]