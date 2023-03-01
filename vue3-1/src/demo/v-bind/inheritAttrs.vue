<template>
    <div id="inheritAttrs">
        <h2>inheritAttrs</h2>
        <h3 @click="changeColor">{{ color }}</h3>
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch, Prop } from 'vue-property-decorator'

@Component( {
    // inheritAttrs: false
} )
export default class InheritAttrs extends Vue {
    @Prop( String ) color!: string

    changeColor () {
        this.color = 'blue';
    }
}
</script>
