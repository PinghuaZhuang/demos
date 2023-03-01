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


@Component
export default class MyEvent extends Vue {

}
</script>
