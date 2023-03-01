<template>
    <div id="less">
        <h1>LESS {{ color }}</h1>
    </div>
</template>

<script lang='tsx'>
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

import { COLOR } from '@/assets/abcde/common.js'

@Component
export default class Less extends Vue {
    public color = COLOR
}
</script>

<style lang="less" scoped>
#less {
    h1 {
        color: @color;
    }
}
</style>
