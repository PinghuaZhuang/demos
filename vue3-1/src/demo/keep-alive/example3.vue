<template>
    <h1>{{ txt }}</h1>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

@Component( {
    name: 'example3'
} )
export default class keepAliveExample3 extends Vue {
    @Prop( String ) txt !: string
}
</script>
