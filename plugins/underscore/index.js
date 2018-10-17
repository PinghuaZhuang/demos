var _ = require( './underscore.js' );

console.log( typeof _ );

var arr = [ 1, 2, 3, 4 ];

var arr1 = _.filter( arr, function ( ele, index ) {
    console.log( ele, index );
    return ele % 2;
} ).map( function ( ele, index ) {
    return ele + 10;
} );

console.log( 'arr:::', arr, arr1 );
