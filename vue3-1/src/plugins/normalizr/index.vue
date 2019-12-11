<template>
    <div class="plugins-normalizr">
        plugins-normalizr
    </div>
</template>

<script>
import { normalize, schema } from 'normalizr'

export default {
    name: 'PluginsNormalizr',

    created () {
        import( './data.json' ).then( res => {
            let data = JSON.parse( res.data )
            console.log( 'data', data )

            let rows1 = new schema.Entity( 'rows' )
            let rowsOpt1 = new schema.Array( rows1 )

            let parents = new schema.Entity( 'pids', {}, {
                idAttribute: 'pid',
            } )
            let pids = new schema.Array( parents/* {
                rows: rows1,
                pids: parents,
            } */, ( input, parent, key ) => {
                console.log( 'params', input, parent, key )
            } )

            let ret1 = normalize( data, rowsOpt1 )
            let ret2 = normalize( data, pids )
            console.log( 'ret:', ret2 )

            // let row = new schema.Entity( 'self' )

            // let rows = new schema.Entity( 'child', {
            //     child: [ row ],
            // } )
            // let ret = normalize( rowsData2, rows )
            // console.log( 'ret:', ret )
        } )
    },
}
</script>
