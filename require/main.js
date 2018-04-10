require.config( {
    baseUrl: '../node_modules',

    // 注意不能添加 .js
    paths: {

        // 不能使用 jQuery, 这在 jQuery 中已经定义好了
        jquery: 'jquery/dist/jquery.min'
    }
} );

define( [

    // './js/define.js',
    'jquery'
], function ( $ ) {
    console.log( '$:', $ );
} );
