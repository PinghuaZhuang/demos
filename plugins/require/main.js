/* eslint-disable no-undef */
require.config( {

    // baseUrl: '../node_modules',

    // 注意不能添加 .js
    paths: {

        // 不能使用 jQuery, 这在 jQuery 中已经定义好了
        jquery: '../node_modules/jquery/dist/jquery.min',
        hello: './js/hello'
    },

    // 这是不支持 AMD 的时候配置
    shim: {
        hello: {

            // 可以是对象, 可以说函数, 但是不能使用 es6
            exports: 'hello'
        }
    }
} );

define( [

    // './js/define.js',
    'jquery',
    'hello'
], function ( $, obj ) {
    console.log( '$:', $ );
    console.log( 'obj:', obj );
} );
