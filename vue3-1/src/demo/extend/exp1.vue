<template>
    <div class="exp1" @click="changeMsg">
        {{ msg }}{{ name }}
    </div>
</template>

<script>
export default {
    name: 'Exp1',
    data () {
        return {
            msg: 'xxxxx1213131234'
        }
    },
    props: {
        name: {
            type: String
        }
    },

    created () {
        console.log( 1 )
    },

    methods: {
        changeMsg () {
            console.log( 3 )
            this.msg = 'xxxxxxxxxxx'
        },
    },
}
</script>
