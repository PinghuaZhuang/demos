function hello ( person: string ) {
    return person + ' hello word!';
}

hello( 'xxx' );

// 类型推论得出 obj 为 object 对象
// 报错 ??? 因为 object 下没有 name 属性
interface Object {
    name: string
}
interface Object {
    color: number
}
function voidT2 ( obj: object ): void {
    if ( 'name' in obj ) {
        obj.name = 'xxx';
        obj.color = 123;
    }
}
interface Person {
    name: string
}

function voidT ( obj: Person ): void {
    if ( 'name' in obj ) {
        obj.name = 'xxx';
    }
}

var obj: Person = {
    name: '11'
};

let obj2 = {
    name: 'xxx',
    color: 11
}

let arr: string[] = [ '1', '2' ];

voidT( obj );
voidT2( obj2 );
