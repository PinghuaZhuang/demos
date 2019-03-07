<template>
    <div id="less">
        <h1>LESS</h1>
    </div>
</template>

<script lang='tsx'>
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Less extends Vue {
}
</script>

<style lang="less" scoped>
#less {
    h1 {
        color: @color;
    }
}
</style>
