interface Color {
    ( color?: string ): string
}

// 规范: 参数不能与函数名一样.
let color: Color = function ( val = 'red' ) {
    return val;
}

console.log( color() );

let color2: ( val?: string ) => string = function ( val: string = 'red' ) {
    return val;
}

console.log( color2() );

function color3 ( val: string = 'red' ): string {
    return val
}

console.log( color3() );

// 重载
function add ( num1: number, num2: number ): number;
function add ( num1: string, num2: string ): string;
function add ( num1, num2 ) {
    return num1 + num2;
}

console.log( add( 1, 1 ) );
console.log( add( '1', '1' ) );

interface Person {
    name: string
}

interface Test {

    // 这种定义是不会报错的
    // 最好都是传递基本数据类型
    ( num: Person ): number
    ( str: string ): string
}

let getP: Test = function ( param ) {
    return param;
}

let getP2: ( param: number ) => number = function ( num ) {
    return num += 10;
}

getP( '1' );
getP2( 12 );
