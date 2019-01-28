<template>
    <h1 @click="changeBgc" :style="{ backgroundColor: color }">{{ txt }}</h1>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

@Component( {
    name: 'example1'
} )
export default class keepAliveExample1 extends Vue {

    public color :string = 'blue'

    @Prop( String ) txt !: string

    changeBgc () {
        this.color = 'red'
    }
}
</script>
