import React, { Component, PureComponent } from "react";

// 组件
import Red from './public/red';

export default class Advanced extends PureComponent {
    render () {
        return <div className="advanced">
            advanced
            <Red/>
        </div>
    }

    constructor ( opts ) {
        super( opts )
    }
}
