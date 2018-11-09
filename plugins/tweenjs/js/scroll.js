 /* eslint-disable */
var btn = document.querySelector( '#btn' );
var wrap = document.querySelector( '.wrap' );

window.onclick = function () {
    // var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // console.log( scrollTop );
    // 特效
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    // });

    // // 瞬动到指定坐标
    // window.scrollTo( x, y );
}

 // Setup the animation loop.
 var coords = { x: 0, y: 0 }; // Start at (0, 0)
 var position = { top: 0 };
 function animate ( ) {
     requestAnimationFrame( animate );
     TWEEN.update( );
 }
 // requestAnimationFrame( animate );

 var tween = new TWEEN.Tween( position ) // Create a new tween that modifies 'coords'.
     // .to( { x: 300, y: 200 }, 1000 ) // Move to (300, 200) in 1 second.
     .to( { top: 0 }, 500 )
     .easing( TWEEN.Easing.Quadratic.Out ) // Use an easing function to make the animation smooth.
     .onUpdate( function ( ret ) { // Called after tween.js updates 'coords'.
         // Move 'box' to the position described by 'coords' with a CSS translation.
         // box.style.setProperty( 'transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)' );
        //  box.style.setProperty( 'transform', `rotate(${Math.round( position.position )}deg)` );
        window.scrollTo( 0, ret.top );
     })
     // .start() // Start the tween immediately.
    //  .repeat( Infinity ) // 循环动画
     .onStop( function () {
         console.log( position.top  );
     } )
     .onComplete( function () {
         console.log( 'xxxxxx:', position.top );
     } )

btn.onclick = function () {
    position.top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    animate();
    tween.start();
}

//  animate();
//  tween.start();
