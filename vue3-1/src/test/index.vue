<template>

</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// plugins
// import z from '../../../../z/src/index.js'
import axios from 'axios'
import Arr from '../../../../class/src/Class/Arr.js'
import Async from '../../../../class/src/Class/Async'

// 组件
// import VModel from './v-model.vue'

// Register the router hooks with their names
Component.registerHooks( [
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
] )

@Component( {
    components: {
        // VModel,
    }
} )
export default class Plugins extends Vue {
    // checked: Number = 0

    // @Watch( 'checked', { immediate: true, deep: true } )
    // onCheckedChange ( old: Number, val: Number ) {
    //     console.log( 'changeChecked:', old, val )
    // }

    mounted () {

        let http = axios.create( /* {
            header: ''
        } */ )

        let arr = new Arr( [ 1, 2, 3 ], {
            type: Number
        } )
        console.log( 'arr', arr )

        let custromPromise = new Async( {
            _describe: 'xxxx'
        } )

        let customPromise3 = new Async( {
            _describe: 'xxxx'
        } )

        customPromise3.then( ( data ) => {
            console.log( '3333', data )
        } )

        custromPromise.chain( customPromise3 )

        let customPromise2 = custromPromise.done( ( data ) => {
            console.log( 'data-customPromise', data )
            throw new Error( 'xxx' )
        } ).fail( ( error ) => {
            console.log( 'fail', error )
        } )
        // // customPromise2.promise.catch( ( error ) => {
        // //     console.log( 'xxxx', error )
        // // } )
        // console.log( 'Async', custromPromise, customPromise2 )

        http.get( '/mork/index.json' ).then( ( data ) => {
            custromPromise.start( data )
            // throw new Error( 'opop' )
        } ).catch( ( error ) => {
            console.log( error )
        } )


    }
}
</script>
