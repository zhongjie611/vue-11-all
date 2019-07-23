// vue 区域
import Vue from 'vue'
import app from './App.vue'
//router区域
//11入VueRouter构造函数
import VueRouter from 'vue-router'
//12安装router
Vue.use(VueRouter)
//13导入router实例
import router from './router.js'
// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
Vue.http.options.root = 'http://chenzhongjie.top/dyh';
//mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
// mint ui
// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

var vm  = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})