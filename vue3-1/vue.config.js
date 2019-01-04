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
    }
}
