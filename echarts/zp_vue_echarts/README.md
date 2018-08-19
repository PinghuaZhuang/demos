# 打开方式
+ 使用 `npm install` 安装依赖包
+ 执行 npm run dev
+ 用 localhost 打开 dist 目录下 index.html文件


# 关于要求

+ 思路

  把 `echarts` 作为子组件, 外面嵌套一层  `vue` ;

  使用 `vue` 绑定 `option`, 使用 `watch` 方法对齐 `deep` 监视. 调用 `myChart.setOption()` 方法更新视图;

  在 `mounted` 初始化 `echarts`, 利用父子组件通信, 传递 `option` , 在子组件中`watch` 监视 `opton` 更新视图;

+ OD 数据假定 20 条, 放在 /src/static/config/constant.js 里面;

+ 拥挤色判断也是假定数据;

+ 地图是使用 百度地图 作为地图, echarts 官方网站现在不提供下载;

+ 效果参考网络上的人口迁徙图;

+ 坐标系是百度坐标;

# 目录树

├─src
│  ├─static
│  │  ├─images
│  │  ├─js
│  │  │  ├─lib
│  │  │  └─charts
│  │  ├─css
│  │  │  └─charts
│  │  └─config
│  ├─view
│  └─asset
│      └─echarts
│          ├─theme
│          ├─js
│          └─json
├─test
├─doc
└─dist

​	├─js
​	└─css

