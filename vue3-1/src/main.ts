import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import plTable from 'pl-table'

import 'pl-table/themes/index.css' // 引入样式（必须引入)，请查看webpack是否配置了url-loader对woff，ttf文件的引用,不配置会报错哦

import 'pl-table/themes/plTableStyle.css' // 默认表格样式很丑 引入这个样式就可以好看啦（如果你不喜欢这个样式，就不要引入，不引入就跟ele表格样式一样）
import { PlTable, PlTableColumn } from 'pl-table';
Vue.use(plTable);

Vue.use(ElementUI);

Vue.component( PlTable.name, PlTable )
Vue.component( PlTableColumn.name, PlTableColumn )

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
