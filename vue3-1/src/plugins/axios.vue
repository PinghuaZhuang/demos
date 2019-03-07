<template>

</template>


<script lang='tsx'>
// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// plugins
import axios from 'axios'
import $ from 'jquery'

// 组件
// import VModel from './v-model.vue'

// Register the router hooks with their names
Component.registerHooks( [
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
] )

@Component( {
    components: {
        // VModel,
    }
} )
export default class Plugins extends Vue {
    // checked: Number = 0

    // @Watch( 'checked', { immediate: true, deep: true } )
    // onCheckedChange ( old: Number, val: Number ) {
    //     console.log( 'changeChecked:', old, val )
    // }

    mounted () {
        console.log( 'axios:', axios, axios.interceptors )
        console.dir( axios )

        // 默认配置
        const ax = axios.create( {
            headers: {
                // 这里不能小写
                'content-type': 'application/x-www-form-urlencoded'
            }
        } )

        // axios 拦截器
        ax.interceptors.request.use( ( config ) => {
            console.log( 'config:', config )
            return config
        } )

        // var axPromise = axio.get( 'http://wthrcdn.etouch.cn/weather_mini', {
        var axPromise = ax.get( 'http://wthrcdn.etouch.cn/weather_mini', {

            // get: params, post: data
            params: {
                city: '深圳'
            }
        } )

        // var doubanPr = axios.get( 'http://api.douban.com/v2/movie/in_theaters?count=10&start=0' )

        // doubanPr.then( data => {
        //     console.log( 'doubanData:', data )
        // } )

        var testLocal = axios.get( '/local/get' )

        testLocal.then( data => {
            console.log( 'local/get:', data )
        } )

        // $.get( 'http://api.douban.com/v2/movie/in_theaters?count=10&start=0', data => {
        //     console.log( 'doubanData:', data )
        // } )

        // console.dir( axPromise )

        // axPromise.then( data => {
        //     console.log( 'data:', data )
        // } )
    }
}
</script>
