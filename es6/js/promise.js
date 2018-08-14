window.onload = function () {
    let b = 1;
    let a = new Promise( ( resolve, reject ) => {
        if ( 2 === b ) {
            resolve( 'resolve' );
        } else {
            reject( 'reject' );
        }
    } );

    a = a.then( num => {
        console.log( 'num:', num );
        return num;
    }, num => {
        console.log( 'num:', num );
        return new Error( num );
    } );

    a.then( num => {
        console.log( 'num:', num );
    }, num => {
        console.log( 'num:', num );
    } );

    // a = a.then( num => {
    //     console.log( 'num:', num );
    // } ).catch( num => {
    //     console.log( 'num:', num );
    // } );

    // a.then( num => {
    //     console.log( 'num:', num );
    // } ).catch( num => {
    //     console.log( 'num:', num );
    // } );
};
