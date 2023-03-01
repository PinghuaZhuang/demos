/**
 * 入口文件
 */

import Vue from 'vue'
import VueResource  from 'vue-resource'
import echarts from 'echarts'
import bmap from 'echarts/dist/extension/bmap.min.js'

// 导入主视图
import App from './App.vue'

// 添加 echarts 方法
Vue.prototype.echarts = echarts;

// 使用中间件
Vue.use(VueResource);


var vm = new Vue({

    render: (h) => h(App)

}).$mount("#app");
