window.onload = function () {
    let inp = document.querySelector( '#inp' );

    // 页面刚进入的时候自动聚焦不会触发这个事件
    inp.onfocus = () => {
        console.log( 'xxxxx:' );

        window.setTimeout( () => {

            // 有这个方法
            inp.blur();
        }, 2000 );
    }
}
