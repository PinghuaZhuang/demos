<template>
    <div id="layout">
        <h1 @click="changeTitle">layout</h1>
        <keep-alive>
            <component :is="Title"></component>
        </keep-alive>
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// 组件
import H1 from './h1.vue'
import H2 from './h2.vue'

@Component( {
    components: {
        H1: () => import( `./h1.vue` ),
        H2: () => import( `./h2.vue` )
    }
} )
export default class Layout extends Vue {
    public Title = H1

    changeTitle () {
        this.Title = this.Title === H1 ? H2 : H1
    }

    mounted () {
        console.log( this );
    }

}
</script>
