1.完成一级分类动态添加背景颜色
第一种解决方案:采用样式完成
第二种解决方案:通过JS完成

2.演示卡顿现象
正常：事件触发非常频繁，而且每一次触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）

节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果快速触发，只会执行一次
	lodash插件：封装了防抖与节流的业务【闭包+延迟器】
	
3.完成三级联动节流操作

4.三级联动组件的路由跳转与传递参数
	三级联动用户可以点击的:一级分类、二级分类、三级分类，当你点击的时候
	Home模块跳转到Search模块，一级会把用户选中的产品在路由跳转的时候进行
	传递
	
	路由跳转：
	声明式导航：router-link
	编程式导航：push|replace
	
	三级联动：如果使用声明式导航router-link，可以实现路由的跳转与传递参数
	但是需要注意，出现卡顿现象
5.完成三级联动组件的路由跳转与传递参数