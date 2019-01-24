<template>
    <div class="v-model">
        <input type="radio" name="name" id="name" @change="$emit( 'xxx', 0 )">
        <label for="name">姓名</label>
        <input type="radio" name="name" id="age" @change="$emit( 'xxx', 1 )">
        <label for="age">年龄</label>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator'

/* 自定义 v-model */

// 写成函数必须有一个参数
@Component
export default class VmodelDemo extends Vue {
    @Model( 'xxx', { type: Number } ) checked!: Boolean
}
</script>
