<template>
    <div class="promise">
        <h1 @click="demo.setColor()">{{ color }}</h1>
    </div>
</template>

<script>
import axios from 'axios'
import Demo from './class/Demo'

export default {

    data () {
        return {
            demo: new Demo(),
        }
    },

    created () {

        let http = axios.create( /* {
            header: ''
        } */ )

        let a = http.get( '/mork/index.json' )
        let b = a.catch( ( data ) => {
            console.log( 'catch' )
            return new Promise( ( _, reject ) => { /* reject( 1 ) */ } )
        } )

        // a.then( ( data ) => {
        //     console.log( 'aaaa' )
        //     return new Promise( ( _, reject ) => reject() )
        // } ).catch( ( data ) => {
        //     console.log( 'a.catch', data )
        // } )

        this.demo.init( ( next ) => {
            b.then( ( { data } ) => {
                next( data )
            } )
        } )

        // b.then( ( data ) => {
        //     console.log( 'bbbb' )

        // } ).catch( ( data ) => {
        //     console.log( 'b.catch', data )
        // } )

    },


    computed: {
        color () {
            return this.demo.color
        }
    }

}
</script>

<style>

</style>
