const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
  }

module.exports = {
    /*
        原有的必须在原有的上面修改
        不能使用浅拷贝
    */
    configureWebpack: config => {
        // console.log( config, 'xxxxxxxxxxxxxxxxxxxxx' );
        config.resolve.alias[ '@types' ] = '@/types'
        // Object.assign( config, {
        //     resolve: {
        //         alias: {
        //             '@types': '@/types'
        //         }
        //     }
        // } );
    },

    chainWebpack: config => {
        // config.module
        //   .rule('vue')
        //   .use('vue-loader')
        //     .loader('vue-loader')
        //     .tap(options => {
        //       // 修改它的选项...
        //       return options
        //     })

        // config.resolve.alias
        //     .set('@$', resolve('src'))
        //     .set('assets',resolve('src/assets'))
        //     .set('components',resolve('src/components'))
        //     .set('layout',resolve('src/layout'))
        //     .set('base',resolve('src/base'))

        // console.log( 'xxxx:', config.plugins );

        // 修改模板文件位置
        config
            .plugin('html')
                .tap(args => {
                    args[0].template = resolve( './src/index.html' )
                    return args
                })

        // 定义全局常量
        config
            .plugin('env')
                .use(require.resolve('webpack/lib/EnvironmentPlugin'), [{ 'XXX': 'aaa' }])
    },

    // css: {
    //     loaderOptions: {
    //         less: {
    //             // 没有生效
    //             data: `@import "./less/params.less";`
    //         }
    //     }
    // },

    // pluginOptions: {
    //     'style-resources-loader': {
    //             preProcessor: 'less',
    //             patterns: [ '@/less/params.less' ]
    //     }
    // }

    // rules: [{
    //     test: /\.less$/,
    //     use: [ 'style-loader', 'css-loader', 'less-loader', {
    //         loader: 'style-resources-loader',
    //         options: {
    //             patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),
    //             injector: 'append'
    //         }
    //     } ]
    // }]
}
