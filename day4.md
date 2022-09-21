1.开发search模块中的TypeNav商品分类菜单（过度动画效果）
过度动画：前提组件或者元素务必要有v-if或v-show指令才可以进行过度动画

2.对商品分类三级列表进行优化
	在app根组件mounted发请求

3. 合并参数【params和query】

4. 开发home首页当中ListContainer和Floor组件
	服务器返回的数据只有商品分类菜单分类数据，对于上面的组件没有提供
	mock数据（模拟）：需要用到一个插件mockjs
	使用步骤
	1.在项目中src文件夹中创建mock文件夹
	2.准备json数据(mock文件夹中创建相应的json文件)
	3.把mock数据需要的图片放置到public文件夹中
	4.创建mockServe.js通过mockjs插件实现模拟数据
	5.mockServe.js在入口文件引入（至少需要执行一次才能模拟数据）
	
5.ListContainer开发重点
	安装Swiper插件
	使用步骤：
	1.引入相应依赖包（swiper.js|swiper.css）
	2.页面中的结构必须要有
	3.初始化swiper实例，给轮播图添加动态效果
	
	watch+nextTick ：数据监听 监听已有的数据变化
	nextTick：在下次DOM更新 循环结束之后执行延迟回调 在修改数据之后，立刻使用这个方法