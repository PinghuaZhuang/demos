<script>
import Exp1 from './exp1'
import Vue from 'vue'
import Component from 'vue-class-component'
import 'core-js/es7/reflect';

console.log( 'xxxxx', Exp1 )

// Exp1.methods.changeMsg = function () {
//     this.msg = '000'
// }
let b = {
    ...Exp1,
    methods: {
        ...Exp1.methods,
        changeMsg () {
            this.msg = '00000'
        }
    },
    created () {
        console.log( 'xxxxxx', this, this.msg )
    }
}

/* 在严格模式下, this 的指向是 undefined */
let created = function () {
    console.log( 'xxxxxx', this, this.msg )
}
const Exp1Constructor = Vue.extend( b )

console.dir( Exp1Constructor )

// let c = {
//     msg: '90909009090909'
// }

// created()
// created.call( c )

// @Component
// Reflect.defineMetadata()
// function xx ( target, b, c, d ) {
//     console.log( target, b, c, d )
//     Reflect.defineMetadata(b, c.value, target)
// }

// class Exp2Constructor extends Exp1Constructor {
//     @xx
//     changeMsg () {
//         console.log( 4 )
//         this.msg = '222222'
//     }
// }
// @Component
// export default Exp1Constructor

export default {
    extends: Exp1,
    methods: {
        changeMsg () {
            console.log( 4 )
            this.msg = '222222'
        },
    },
    created () {
        console.log( 2, this )
    },
}
</script>
