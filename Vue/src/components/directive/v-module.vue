<template>
    <div class="v-test">
        <span @click="changeMsg">{{ msg }}</span>
    </div>
</template>

<script>
/**
 * @description 自定义组件的使用方法
 */

export default {
    model: {
        prop: 'msg',
        event: 'xxx'
    },
    props: {
        msg: String
    },

    methods: {
        changeMsg () {
            console.log( 'click:' );
            this.$emit( 'xxx', '123123123123' );
        }
    }
};
</script>
