<template>
    <div class="test">

        <label for="name">姓名: </label>
        <input type="text" v-model.trim="msg.name" max="9999999999999999999" min="0" debounce="1000">
        <span :class="[ 'tip', { active: active } ]">{{ err.name }}</span>

        <span>{{ arrs[ 0 ] }}</span>

        <vModule v-model="msg.name" />
        <!-- <base-checkbox v-model="lovingVue"></base-checkbox> -->

        <button @click="xxxx">click me</button>

    </div>
</template>

<script>

// 组件
import Vue from 'vue';
import vModule from '@/components/directive/v-module.vue';
import xx from 'aaa';
import EntityCtl from './test/EntityCtl';

Vue.component( 'base-checkbox', {
    model: {
        prop: 'checked',
        event: 'xxx'
    },
    props: {
        checked: String
    },

    template: `
        <div
            type="checkbox"
            v-bind:checked="checked"
            v-on:click="$emit( 'xxx', 'xxx' )">

            {{ checked }}
        </div>
    `
} );

// 错误提示
const ERR_NAME = '请输入用户名';

export default {
    name: 'test',
    components: {
        vModule
    },

    data () {
        return {
            msg: {
                name: 'Hello'
            },

            err: {
                name: ERR_NAME
            },

            // 测试用数据
            arrs: [ '<strong>name</strong>', 'color', 'age' ],
            lovingVue: 'hello'
        };
    },

    computed: {
        active () {
            return !!this.msg.name.length;
        }
    },

    mounted () {
        console.log( 'EntityCtl::', EntityCtl );
    },

    watch: {
        'msg.name' ( val ) {
            console.log( 'val:', val );
        }
    },

    methods: {
        xxxx () {
            console.log( 'jquery:', xx );
        }
    }
};
</script>

<style scoped lang="less">

// 延迟 3s
@delay: 3s;

.tip {
    visibility: visible;
    color: red;
}

.tip.active {
    visibility: hidden;
    transition: visibility 1s ease @delay;
}

</style>
