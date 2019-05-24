import { delay } from 'lodash'
import Vue from 'vue'

const _resolve = Symbol( 'resolve' )

export default class Demo {

    constructor ( opt ) {

        // 这么写时机不对

        this.next = new Promise( ( resolve, reject ) => this.init[ _resolve ] = resolve )
        Vue.set( this, 'color', 'blue' )
    }

    setColor () {
        this.next.then( ( { color } ) => {
            console.log( 'xxxx', color )
            this.color = color
        } )
    }

    init ( fn ) {
        fn( this.init[ _resolve ] )
    }
}
