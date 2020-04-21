const path = require('path')

// 返回一个全局的实例
// config/styleguide.root.js

module.exports = {
  // 标题
  title: "Default Style Guidexxxxxxxx",
  // 包含文件
  components: 'src/components/button/*.vue',
  // 是否使用jsx
  jsxInExamples: true,
  // build目录
  styleguideDir: 'dist',
  // 排除文件
  // ignore: ['**/*.spec.vue', '**/components/Button.vue'],
  // 全局引入
  require: [
		path.join(__dirname, 'src/styleguide.main.js'),
		path.join(__dirname, 'node_modules/element-ui/lib/theme-chalk/index.css'),
		path.join(__dirname, 'mock.js'),
  ],
  // 全局root实例
  renderRootJsx: path.join(__dirname, 'src/styleguide.root.js'),
  skipComponentsWithoutExample: true,
  // defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: "expand",
  // 右上角的图标
  ribbon: {
		text: 'Back to examples',
		url: `/home`
  },
};
