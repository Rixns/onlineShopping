// axios二次封装
import axios from "axios"
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
// start:进度条开始
// done:进度条结束

// 1.利用axios对象方法create，创造一个axios实例
// 2.request就是axios
const requests = axios.create({
	// 配置对象
	// 基础路径，发请求的时候，路径中会出现api
	baseURL:'/mock',
	// 代表请求超时时间5s
	timeout:5000,
})
// 请求拦截器:可以在发请求之前,请求拦截器可以检测到，处理一些业务

requests.interceptors.request.use((config)=>{
	// config:配置对象，对象里面有一个属性很重要，headers请求头
	nprogress.start()
	return config;
})
// 响应拦截器：当服务器数据返回以后，响应拦截器可以检测到，可以处理一些事情
requests.interceptors.response.use((res)=>{
	nprogress.done()
	return res.data
},(error)=>{
	return Promise.reject(new Error('fail'))
})



export default requests;
