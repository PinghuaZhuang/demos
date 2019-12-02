<template>
    <div class="jquery">
        jquery
    </div>
</template>

<script>
// import $ from 'jquery'
import { extend } from './jquery.aio'

export default {
    name: 'Jquery',
    created () {
        let a = [], b = [ 1, 2, 3 ], c
        // console.log( 'z', $ )
        c = extend( true, a, b )
        console.log( 'a', a, c )
        window.extend = extend
    },
}
</script>
