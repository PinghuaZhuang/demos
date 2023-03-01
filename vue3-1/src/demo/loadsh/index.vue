<template>
    <div class="demo-lodash">
        lodash
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'DemoLodash',

    data () {
        return {
            // countArr: Array.from( { length: 100 } )
        }
    },

    created () {
        let { debounce } = _

        let fn = () => {
            console.log( 1 )
        }

        let fn1 = debounce( fn, 1000, { maxWait: 1000 } )

        // window.setInterval( () => {
        //     // console.log( '' )
        //     console.log( 'interval' )
        //     fn1()
        // }, 20 )
    },
}
</script>
