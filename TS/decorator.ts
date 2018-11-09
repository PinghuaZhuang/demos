/**
 * @file 函数修饰器
 */

function dec ( target, key, describe ) {
    console.log( target, key, describe );
}

interface Person {
    name: string
}

let obj: Person = {
    name: 'xxx'
};

function setName ( name: string ): object {
    obj.name = name;
    return obj;
}

setName( '111' );

console.log( obj );
