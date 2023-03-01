import Vue from 'vue'

export default class Item {

    constructor () {
        Vue.set( this, 'color', 'red' )
    }

    get name () {
        return `${this.color}-item`
    }

    // 遵循响应原理, 就可以自定义计算属性
    setColor ( color ) {
        this.color = color
    }

}
