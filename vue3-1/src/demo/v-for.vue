<template>
    <div id="vFor">
        <h1>V-For</h1>
        <ul>
            <li v-for="(item, index) in lis" :key="index" @click="changeLiHtml(index)">{{ item }}</li>
        </ul>
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

@Component
export default class VFor extends Vue {

    public lis: Array<string> = [ 'a', 'b', 'c', 'd' ]

    changeLiHtml ( index: number ) {
        this.$set( this.lis, index, 'xxx' )
    }
}
</script>
