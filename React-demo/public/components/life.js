// 必须应用 React, 太坑了
import React, { Component } from "react";

export default class Life extends Component {

    render () {
        return <div>
            { /* dom.addEventListener( 'click', this.click ) ? */ }
            <button onClick={ this.click }> click me </button>
        </div>
        // onClickCap
    }

    click ( e ) {

        // 这里不能使用 this, this === undefined
        console.log( 'click', e, this );
    }

    // 元素挂载前
    componentWillMount () {
        console.log( 'componentWillMount', this );
    }

    // 元素挂载完成
    componentDidMount () {
        console.log( 'componentDidMount', this );
    }

    // 元素卸载前
    componentWillUnmount () {
        console.log( 'componentWillUnmount', this );
    }

    // 元素卸载完成 === 没有这个钩子函数

    // 元素更新前
    componentWillUpdate () {
        console.log( 'componentWillUpdate', this );
    }

    // 元素更新完成
    componentDidUpdate () {
        console.log( 'componentDidUpdate', this );
    }

    // 捕获异常 ???
    componentDidCatch () {
        console.log( 'componentDidCatch', this );
    }


}
