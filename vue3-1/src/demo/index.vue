<template>
    <div id="demo">
        <router-view />
        <VModel v-model="checked"></VModel>
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// 组件
import VModel from './v-model.vue'

// Register the router hooks with their names
Component.registerHooks( [
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
] )

@Component( {
    components: {
        VModel,
    }
} )
export default class TestCom extends Vue {
    checked: Number = 0

    @Watch( 'checked', { immediate: true, deep: true } )
    onCheckedChange ( old: Number, val: Number ) {
        console.log( 'changeChecked:', old, val )
    }
}
</script>
