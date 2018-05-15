<template>
    <div class="common">
        <h1>common.vue</h1>
    </div>
</template>

<script>
import z from 'template/jQuery-umd-es5';

export default {
    name: 'common',

    created () {
        console.log( 'z:', z );
    }
};
</script>

<style lang="less" scoped>

</style>
