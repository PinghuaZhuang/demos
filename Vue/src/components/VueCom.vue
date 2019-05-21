<template>
    <div class="vue-com">

    </div>
</template>

<script>

/**
 * 不能使用类, 这是 vue-cli 3.0 的用法
 */

import Vue from 'vue';

export default class VueCom extends Vue {
    constructor ( opt ) {
        super( opt )
        this.color = 'xxx'
    }

    created () {
        console.log( 'created===:', this )
    }
}
</script>

<style lang="less">
.vue-com {
    width: 100%;
    height: 100%;
}
</style>
