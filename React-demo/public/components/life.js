// 必须应用 React, 太坑了
// JSX 回调函数中的 this !!!!
// 属性元素的界面原理与 vue 一样, 都是利用 虚拟 dom 数
// props 变化, setState 变化都会使组件整个刷新, 调用 render 函数
// 可以使用 shouldComponentUpdate 来优化
// setState 是浅拷贝, 类似于 Object.assign
import React, { Component, PureComponent } from "react";

var obj = {
    className: 'name',
    color: {
        value: 'blue'
    }
}


// pureComponent: 没有去除 shouldComponentUpdate 方法, 还是会比较
// PurerComponent: state 和 props 没有变化, 不触发 render
export default class Life extends PureComponent {
    constructor ( opts ) {
        super( opts )

        // 跟 html 绑定的数据写在这里
        this.state = {
            className: 'xxx',
            color: {
                value: 'red'
            }
        }

        // 定义定时器
        // 这种方式不能触发页面更新
        this.timer = null;
    }

    render () {
        console.count( 'render' );
        return <div className={ this.state.className }>
            { /* dom.addEventListener( 'click', this.click ) ? */ }
            <button onClick={ this.click.bind( this, 'red' ) }> click me { this.state.color.value } </button>
        </div>
        // onClickCap
    }

    // This syntax ensures `this` is bound within click.
    // Warning: this is *experimental* syntax.
    click ( e, color ) {
        // JSX 回调函数中的 this !!!!
        // 这里不能使用 this, this === undefined, 需要手动绑定
        console.log( 'click', e, color );

        // 浅拷贝, 坑
        this.setState( obj );
        obj.color.value = 'xxxxxxxxxx';
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

    // 捕获异常
    // 如果 render() 函数抛出错误，则会触发该函数
    componentDidCatch ( error ) {
        console.log( 'componentDidCatch', this, error );
    }

    // 判断是否更新组件
    // 返回 false 阻止更新组件
    // shouldComponentUpdate ( nextProps, nextState ) {
    //     console.log( 'shouldComponentUpdate', this );

    //     // 这里有个问题, 如果 className 没变, 其他变了 ??
    //     // 可能判断会变的复杂
    //     if ( nextState.className === this.state.className ) {
    //         return false
    //     }

    //     return true
    // }
}
