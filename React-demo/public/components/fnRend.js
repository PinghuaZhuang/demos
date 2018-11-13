import React from 'react';
import ReactDOM from 'react-dom';

function Hello ( props ) {
    // 在 jsx 中使用 `,` 会标红, 但是可以使用, 不建议使用
    // 不能使用对象输出, 下面去除掉 toLocaleTimeString() 会报错
    // { } 里面就是代码执行, 不推荐单行注释
    return <div>
    xxxx::
        { /* props.date.toLocaleTimeString(), props.color */ }
        { props.color }
        { props.date + 111 }
    </div>
}

// 这个时候还没有 .app 的元素
// ReactDOM.render( <Hello/>, document.querySelector( '.app' ) )
export default Hello
