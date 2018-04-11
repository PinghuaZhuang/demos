<template>
    <div class="hello">
        <h1 @click="add">count add</h1>
        <h1 @click="test( 1000 )">count test</h1>
        <h1 @click="callback">count callback</h1>
        <h1 @click="callback2">count callback2</h1>
        <h1 @click="msg='xxx'">count callback2</h1>
        <h1>{{ $store.state.name }}</h1>
        <img src="../../static/images/111.png" alt=""
            ref="img">
    </div>
</template>

<script>

/**
 * 不能在 Mutations 中使用异步函数是因为追踪不了, 但是可以改变 state 的值, 监听不到
 * 放在 Actions 中是可以监听到的, 也返回一个 Promise 对象
 */

import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',

            // 注册不了 onload 事件
            // fn: new Promise( ( a, b ) => {
            //     console.log( 'refs', this.$refs )
            //     a();
            // } )
        };
    },

    created () {
        console.log( 'this:', this.$store );

        // 监听数据变化
        this.$store.watch( ( store, getters ) => {
            // 响应式
            return this.$store.state.count;
        }, data => {
            console.log( '==============:', data );
        } );
    },

    mounted () {
        this.$nextTick( _ => {
            let fn = new Promise( ( resolve, reject ) => {
                this.$refs.img.onload = resolve;
            } );
            this.callback2( fn );
        } );
    },

    methods: {
        ...mapMutations( [
            'add', 'callback'
        ] ),

        ...mapMutations( {

            // commit 是默认的
            test: ( commit, num ) => {
                // commit( 'add', num );
                commit( {
                    type: 'add',
                    num: 1000
                } );
            }
        } ),

        ...mapActions( [
            'callback2'
        ] )
    },

    watch: {
        '$store.state.count' ( val, oldVal ) {
            console.log( 'WatchAdd:', val, oldVal );
        },
        name ( val ) {
            return val;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
