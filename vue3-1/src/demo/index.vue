<template>
    <div id="demo">
        <router-view />
        <VModel v-model="checked"></VModel>
        <button class="add-router" @click="addRouter">点击动态添加路由</button>
        <br />
        <button @click="$router.push( { name: 'async-router' } )">
            点击跳转到 async-router
        </button>
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

    mounted () {
        console.log( 'this:', this )

        let hasInstantiated = this.$router.resolve( { name: 'demo' } )

        console.log( 'routers:', hasInstantiated )
    }

    addRouter () {
        this.$router.addRoutes( [ {
            path: 'async-router',
            name: 'async-router',
            component: () => import( '@/demo/async-router.vue' ),
        } ] )
    }
}
</script>
