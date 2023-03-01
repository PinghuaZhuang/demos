var promise = $.get( './json/data.json', {

    success: function (data) {
        console.log( 'dataxxx:', data );
    }
} );

// $.when( promise, $.getJSON( './json/data1.json' ).done( function (data) {
//     console.log( 124 );
//     return { xxx: '1111' }
// } ) )
//     .then( function (data, data2) {
//         console.log( 'xxxx:', data, data2 );
//     } )

// console.dir( 'promise:', promise, Object.prototype.toString.call( promise ) );
