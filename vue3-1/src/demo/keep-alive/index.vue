<template>
    <div id="keepAlive">
        <h1>keepAlive</h1>

        <button @click="changeTxt(0)">example1</button>
        <button @click="changeTxt(1)">example2</button>
        <button @click="changeTxt(2)">example3</button>

        <div class="content">

            <!-- 只能渲染动态组件 -->
            <!-- 动态改变的时候需要传递 数组 -->
            <!-- 使用 name 匹配的化, 必须一致, 不是正则匹配的 -->
            <!-- <keep-alive :exclude="excludeArr"> -->
            <!-- 正则匹配 -->
            <!-- <keep-alive :exclude="/example/"> -->

            <keep-alive :exclude="excludeArr">
                <router-view :txt.sync="txt" />
            </keep-alive>
        </div>
    </div>
</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// 组件

let txtMap = [
    'example1',
    'example2',
    'example3',
];

// let exclude: Array<string> = [];

// Register the router hooks with their names
Component.registerHooks( [
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
] )

@Component
export default class keepAlive2 extends Vue {
    public txt :string = ''
    public excludeArr :Array<string> = []

    get exclude (): string {
        return JSON.stringify( this.excludeArr )
    }

    changeTxt ( index: number ) {
        this.txt = txtMap[ index ]
        this.$router.push( { name: txtMap[ index ] } )
    }

    beforeRouteEnter ( to: any, from: any, next: Function ) {
        console.log( 'beforeRouteEnter' )
        next()
    }

    beforeRouteUpdate ( to: any, from: any, next: Function ) {
        console.log( 'beforeRouteUpdate' )
        console.log( to, from )
        if ( to.meta.unKeepAlive && !this.excludeArr.some( item => item === to.name ) ) {
            console.log( 'push name' )
            this.excludeArr.push( to.name )
        }
        next()
    }

    beforeRouteLeave ( to: any, from: any, next: Function ) {
        console.log( 'beforeRouteLeave' )
        next()
    }
}
</script>
