import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import { Button ,MessageBox} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 三级联动组件--全局组件
import Pagination from '@/components/Pagination'
import TypeNav from '@/components/TypeNav'
Vue.use(VueLazyload)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
// 注册全局组件
Vue.component(Button.name, Button);
// 挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入路由
import router from './router/index.js'

// 引入仓库
import store from '@/store'
Vue.config.productionTip = false

// 引入mock数据
import '@/mock/mockServe.js'
// 引入样式
import "swiper/css/swiper.css"
// 统一接口api文件夹里面全部请求函数
// 统一引入
import * as API from '@/api'
// 引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  
  beforeCreate() {
  	Vue.prototype.$bus = this
	Vue.prototype.$API = API
  },
  // 注册路由
  // 注册路由信息:当这里书写router的时候,组件身上都拥有￥route，￥router属性
  router,
  store
  // 注册仓库:组件实例身上会多一个属性$store
}).$mount('#app')
