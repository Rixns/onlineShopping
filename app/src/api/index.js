// 当前模块:API进行统一管理
import requests from './request.js'
import mockRequests from './mockRequest.js'
// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数

// 发请求:返回promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get',})

// 获取banner
export const reqGetBannerList = ()=>mockRequests({url:'/banner',method:'get',})

// 获取floor
export const reqGetFloorList = ()=>mockRequests({url:'/floor',method:'get',})

// 获取search
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:"post",data:params})

// 获取detail
export const reqGetGoodsInfo = (skuid)=>requests({url:`/item/${skuid}`,method:'get',})

// 将产品添加到购物车当中（获取更新某一个产品的个数）
export const reqAddOrUppdateShopCart = (skuId,skuNum) =>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

// 获取购物车列表数据接口
export const reqCartList =()=>requests({url:'/cart/cartList',method:'get'})

// 删除购物产品的接口
export const reqDeleteCartById = (skuId) =>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'},)

// 修改商品选中状态
export const reqUpdateCheckedById = (skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 获取验证码
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 注册
export const reqUserRegister = (data)=>requests({url:`/user/passport/register`,data,method:'post'})

// 登录
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,data,method:'post'})

// 获取用户信息
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'})

// 退出登录
export const reqLogOut = ()=>requests({url:`/user/passport/logout`,method:'get'})

// 获取用户地址信息
export const reqAddressInfo = ()=>requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'})

// 获取商品清单
export const reqOrderInfo = ()=>requests({url:`/order/auth/trade`,method:'get'})

// 获取订单接口
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取支付信息
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 获取支付订单状态
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取个人中心的数据
export const reqMyOrderList = (page,limit) =>requests({url:`/order/auth/${page}/${limit}`,method:'get'})
