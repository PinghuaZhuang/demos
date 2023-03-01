interface Person {
    age: number | string
}

let obj: Person = {
    age: 11
};

function setAge ( age: string | number ): Person {
    // 这里注意必须加括号, 否之先执行的是 age.length
    if ( ( age as string ).length ) {
        obj.age = 'xxx';
    } else {
        obj.age = 111;
    }
    return obj
}

console.log( setAge( 1 ) );
