<template>
    <div class="test">

        <label for="name">姓名: </label>
        <input type="number" v-model.trim="msg.name" max="9999999999999999999" min="0">
        <span :class="[ 'tip', { active: active } ]">{{ err.name }}</span>

    </div>
</template>

<script>

// 错误提示
const ERR_NAME = '请输入用户名';

export default {
    name: 'test',

    data () {
        return {
            msg: {
                name: ''
            },

            err: {
                name: ERR_NAME
            }
        };
    },

    computed: {
        active () {
            return !!this.msg.name.length;
        }
    }
}
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
