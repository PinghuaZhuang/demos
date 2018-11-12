/*
    1. 接口定义属性必须实现
*/

interface Person {
    name: string,
    age: number
}

let lin: Person = {
    name: 'xxx',
    age: 12,

    // 不能定义多余属性
    // color: 'red'
}

// 接口继承
interface Person2 extends Person {

    color?: string

    // 下面已经定义了任何属性都是 string 或者 number
    // 这里不能定义 布尔值
    // date: boolean,

    // 这里要填上所有属性可能的类型
    [ props: string ]: string | number
}

// 可以定义任意属性
let lin2: Person2 = {
    name: 'ooo',
    age: 90,
    color: 'red',
    isShy: 1
}

// lin.color = 'red';
