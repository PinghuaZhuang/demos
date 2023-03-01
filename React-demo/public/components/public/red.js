import React, { Component, PureComponent } from "react";

// css
// import '../style/red.css'

export default class Red extends PureComponent {

    // 必须需要构造函数
    constructor ( opts ) {
        super( opts )

        // this.state 需要手动初始化
        this.state = {};
        console.log( 'state:::', this.state );
        console.log( 'props:::', this.props );
        console.log( 'children:::', this.props.children );
    }

    render () {
        // class 是关键字, 所以必须使用 className, 其他的按照驼峰命命名
        console.log( 'this:::', this );
        return <div className="red">
            red red { this.props.color }
            { Array.apply( null, { length: this.props.count }).map( ( _, index ) => {
                return <li key={ index }>{ index }</li>
            } ) }
        </div>
    }
}
