<template>
    <div id="h1">
        <h1>this is h1.vue</h1>
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

@Component
export default class H1 extends Vue {
}
</script>
