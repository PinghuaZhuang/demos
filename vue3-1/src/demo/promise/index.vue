<template>
    <div class="promise">

    </div>
</template>

<script>
import axios from 'axios'
export default {

    created () {

        let http = axios.create( /* {
            header: ''
        } */ )

        let a = http.get( '/mork2/index.json' )
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

        b.then( ( data ) => {
            console.log( 'bbbb' )
        } ).catch( ( data ) => {
            console.log( 'b.catch', data )
        } )
    }

}
</script>

<style>

</style>
