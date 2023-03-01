<template>
    <h1 @click="changeTxt" :style="{ backgroundColor: color }">{{ txt }}</h1>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

@Component( {
    name: 'example2'
} )
export default class keepAliveExample2 extends Vue {
    @Prop( String ) txt !: string

    public color :string = 'black'
    // public name: string = 'example2'

    changeTxt () {
        this.color = 'red'
        this.$emit( 'update:txt', 'examplexxxx' )
    }
}
</script>
