import React, { Component, PureComponent } from 'react'

/*
    样式使用 webpack 加载
*/

// 组件
import Example from './example'
import Red from './public/red'

// 1. 可以使用变量代表组件明年
let Ch = Red

// 2. 没有传递值的时候, 默认是布尔值 true
// 3. 可以使用对象扩展符来传递 props { /* name: 'xxxx' ( error, 这里是表达式 ) */ }
//      这里传递 children 没用
let props = { color: undefined, people: {}, children: 'xxx', count: 10 }

// 4. props children
//      4.1 可以是标签文本节点内容
//      4.2 JSX 会移除空行和开始与结尾处的空格。
//          标签邻近的新行也会被移除，字符串常量内部的换行会被压缩成一个空格
//`     4.3 可以像其它属性一样传递任何数据，而不仅仅是 React 元素
// 下面的例子:  1. 换行些会去除开始结尾的空格, 不换行些, 不会去除开头的空格,
//             2. component 组件
//             3. 虚拟 DOM

// 5. React 组件也可以通过数组的形式返回多个元素
// 6. false、null、undefined 和 true 都是有效的子代，但它们不会直接被渲染

export default class Advanced extends PureComponent {
    render () {
        return <div className="advanced">
            advanced
            <Ch { ...props }>    today
                { Example }
                { false }
                <div>
                    有没有去除空行
                </div>
            </Ch>
        </div>
    }

    constructor ( opts ) {
        super( opts )
    }
}
