/* eslint-disable no-undef */
require.config( {

    // 注意不能添加 .js
    paths: {

        // 不能使用 jQuery, 这在 jQuery 中已经定义好了
        jquery: '../node_modules/jquery/dist/jquery.min',
        xtpl: '../node_modules/art-template/lib/template-web'
    }
} );

define( [
    'jquery',
    'xtpl'
], function ( $, xtpl ) {
    console.log( '$:', $ );
    console.log( { xtpl } );

    var html = xtpl( 'tpl', {
        list: [ 'xx', '22', '33' ]
    } );
    document.getElementById( 'content' ).innerHTML = html;
} );
