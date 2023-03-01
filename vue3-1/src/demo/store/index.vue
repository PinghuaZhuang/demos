<template>
    <div id="store">
        <h1>VUX</h1>
        <h2 @click="lang = ('zh-CN')">{{ lang }}</h2>
        <!-- <h2 @click="lang = ('zh-CN')">{{ XXX }}</h2> -->
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

@Component
export default class VStore extends Vue {
    get lang () {
        return this.$store.state.lang
    }

    set lang ( value ) {
        this.$store.state.lang = value
    }

    // public aaa = 'bbb'

    mounted () {
        console.log( '=======', process.env.XXX )
    }
}
</script>
