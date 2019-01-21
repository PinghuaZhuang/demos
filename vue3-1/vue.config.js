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
        config
            .plugin('html')
            .tap(args => {
                args[0].template = resolve( './src/index.html' )
                return args
            })
      }
}
