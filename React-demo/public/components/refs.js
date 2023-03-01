import React, { Component, PureComponent } from "react";

/*
    refs 使用基本与 vue 中一样, 但是 react 可以使用回调函数
*/

export default class Refs extends PureComponent {
    constructor ( opts ) {
        super( opts )

        this.state= {
            value: 'xxxx'
        }

        // 创建使用
        // this.inputRef = React.createRef();

        this.textInput = null;
    }

    // React 将在组件挂载时将 DOM 元素传入ref 回调函数并调用，当卸载时传入 null 并调用它
    // ref 回调函数会在 componentDidMout 和 componentDidUpdate 生命周期函数前被调用
    changeVal ( ele ) {
        console.log( 'changeVal:::', ele, this );
        this.textInput = ele;
    }

    changeInput ( value ) {
        this.setState( {
            value
        } )
    }

    render () {
        return <div>
            <input type="text" value={ this.state.value } ref={ this.changeVal.bind( this ) }
                onChange={ this.changeInput.bind( this ) } />
        </div>
    }
}
