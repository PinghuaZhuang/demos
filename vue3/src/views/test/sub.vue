<template>
    <div id="sub" :style="{ background: xcolor.color }">
    </div>
</template>

<script lang='ts'>
import { Component, Inject, Provide, Vue } from 'vue-property-decorator';

@Component
export default class SubCom extends Vue {
    @Inject() data!: string
}
</script>

<style lang="less">
#sub {
    width: 200px;
    height: 200px;
    // background-color: red;
}
</style>
