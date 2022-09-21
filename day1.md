node_modules文件夹:项目依赖文件夹

public文件夹:一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，
	webpack进行打包带额时候，会原封不动打包到dist文件夹中

src文件夹（程序员源代码文件夹）:
	assets文件夹:一般是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置
		在assets文件夹里面的静态资源，在webpack打包的时候，webpack会把静态资源当做一个模块
		，打包到JS文件里面
	
	component文件夹:放置的是非路由组件（全局组件）
	
	App.vue:唯一的根组件
	
	main.js:程序入口文件，程序中最先执行的文件
	
babel.config.js:配置文件（bebel相关）

package.json文件:认为是项目“身份证”，记录项目叫什么，项目中有哪些依赖，项目怎么运行

package-lock.json文件:缓存性文件

2.项目的其他配置:
2.1 package.json
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  
2.2 eslint校验功能关闭
	在根目录下，创建一个vue.config.js
	
2.3 src文件夹简写方式，配置别名。【@代表的是src文件夹，这样将来文件过多找的时候方便很多】
	{
		"compileOptions":{
			"baseUrl": "./",
			"paths":{
				"@/*": [
					"src/*"]
			}
		},
		"exclude":[
			"ndoe_modules","dist"]
	}
	
3.项目路由的分析
	vue-router
	前端所谓路由:KV键值对
	key:URL
	value:相应的路由组件
	
	路由组件:
	Home首页路由组件、Search路由组件、Login登录组件、Register注册路由
	非路由组件:
	Header【首页、搜索页】
	Footer【首页、搜索页】
	
4. 完成非路由组件Header与Footer业务
	在开发项目的时候:
	1.书写静态页面
	2.拆分组件
	3.获取服务器的数据动态展示
	4.完成相应的动态业务逻辑
	
	注意1.创建组件的时候，组件结构+组件样式+图片资源
	注意2.项目采用less样式，浏览器不识别less样式，需要通过less、less-loader
		安装@5版本进行处理less，把less样式转换为css样式，浏览器才可以识别
	注意3.如果想让组件识别less样式，需要在style标签上加lang=less
4.1 使用组件的步骤（非路由组件）
	-创建或者定义
	-引入
	-注册
	-使用
	
5.路由组件的搭建
	vue-router
	在上面分析的时候，路由组件应该有四个:Home、Search、Login、Register
	-components文件夹:经常放置的非路由组件(共用全局组件)
	-pages|view文件夹:经常放置路由组件
	5.1配置路由:
	项目当中配置的路由一般放置在router文件夹中
	
5.2总结
路由组件与非路由组件的区别？
1.路由组件一般放置在pages|views文件夹，非路由组件一般放置在components文件夹中
2.路由组件一般需要在router文件夹中注册，非路由组件在使用的时候，一般以标签展示
3.注册完路由，不管是路由组件还是非路由组件，身上都有$route、$router属性
$route:一般获取路由信息【路径、query、params等等】
$router:一般进行编程式导航进行路由跳转【push|replace】

5.3路由的跳转
路由的跳转有两种形式:声明式导航router-link，可以进行路由的跳转
					编程式导航push|replace，可以进行路由跳转
编程式导航：声明式导航能做的，编程式导航都能做，但是编程式导航除了可以进行路由跳转
			还可以做一些其他的业务逻辑。

6.Footer组件的显示与隐藏
显示或者隐藏组件: v-show|v-if
Footer组件:在Home、Search显示
Footer组件:在登录、注册的时候隐藏

6.1我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏。
6.2配置路由的时候，可以给路由添加路由元信息【meta】
	
8.路由传参
8.1路由跳转有几种方式？
	声明式导航:router-link
	编程式导航:$router.push|replace
	
8.2路由传参:参数有几种写法？
params参数
query参数