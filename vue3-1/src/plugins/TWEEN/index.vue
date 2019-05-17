<template>
    <div class="tween">
        <button @click="click1">click1</button>
        <button @click="click2">click2</button>
        <button @click="click3">click3</button>
        <div class="wrap">
            <div class="demo" :style="{
                top: coor.y + 'px',
                left: coor.x + 'px'
            }"></div>
            <div class="demo2" :style="{
                top: 250 + 'px',
                left: 250 + 'px'
            }"></div>
            <div class="demo3" :style="{
                top: 500 + 'px',
                left: 500 + 'px'
            }"></div>
        </div>
    </div>
</template>

<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'
import TWEEN from '@tweenjs/tween.js'

@Component
export default class Plugins extends Vue {
    coor = {
        x: 0,
        y: 0
    }

    $t: any

    timer: any

    updataStop: any

    value: any

    start: any

    end: any

    mounted () {
        // console.log( TWEEN, 'this', this, this.coor )

        this.action = this.action.bind( this )
        this.action()

        this.$t = new TWEEN.Tween( this.coor )
            .to( { x: 500, y: 500 }, 10000 )
            .onUpdate( ( point ) => {
                // console.log( this.coor.x, this.coor.y, this.$t._startTime )
                console.log( new Date().getTime() - this.start )
            } )
        // this.start = new Date().getTime()

        console.log( this.$t._startTime )
    }

    action () {
        this.timer = window.requestAnimationFrame( this.action )
        TWEEN.update()
        // console.log( 'xxxx' )
    }

    click1 () {
        // this.$t.delay( 5000 ) // 延迟
        // this.action()
        // console.log( this.$t, this.$t._startTime )
        this.$t.start()
        this.start = new Date().getTime()
        // this.end = new Date().getTime()
        // console.log( this.$t, this.$t._startTime )
        console.log( this.end - this.start )
    }

    click2 () {
        // window.cancelAnimationFrame( this.timer ) // 使用 update 要先清除
        // TWEEN.update( 5000 ) // 执行到具体时间
        // this.$t.update()
        // this.updataStop = true
        // this.$t._startTime = 5000
        this.$t.stop()
        this.end = new Date().getTime()

        // window.setTimeout( () => {
            // this.action()
        // }, 100 )
        console.log( '$t:', this.$t, this.$t._startTime, this.end - this.start )
    }

    click3 () {
        // this.action()
        // this.$t.update( 10000 )
        TWEEN.update( 10300 ) // 执行到具体时间
    }
}
</script>

<style lang="less">
.tween {
    width: 100%;
    height: 100%;
    padding: 100px;

    .wrap {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        .demo, .demo2, .demo3 {
            position: absolute;
            left: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background-color: blue;
        }

        .demo2 {
            background-color: green;
        }
        .demo3 {
            background-color: red;
        }
    }
}
</style>
