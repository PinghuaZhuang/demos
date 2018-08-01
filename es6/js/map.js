window.onload = function () {
    let de = document.querySelector( '.demo' );

    let map = new WeakMap();

    map.set( document.querySelector( '.demo' ), 111 );

    console.log( 'map:', map.get( de ) );

    window.setTimeout( () => {

        console.log( 'de:', de.parentElement.removeChild( de ) );       // 111
        console.log( 'map:', map.get( de ), map.get( document.querySelector( '.demo' ) ) ); // undefinded
    }, 1000 );
};
