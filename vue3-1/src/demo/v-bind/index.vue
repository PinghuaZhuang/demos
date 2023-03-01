<template>
    <div id="VBind">
        <h1>v-bind</h1>
        <InheritAttrs :color="color" />
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// 组件
import InheritAttrs from './inheritAttrs.vue'

@Component( {
    components: {
        InheritAttrs
    }
} )
export default class VBind extends Vue {
    public color: string = 'red'
}
</script>
