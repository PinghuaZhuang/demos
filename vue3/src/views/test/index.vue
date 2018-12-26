<template>
    <div id="test">
        <div class="demo">{{ color }}</div>
        <button @click="changeColor">changeColor</button>
        <SubCom/>
    </div>
</template>

<script lang='ts'>
import { Component, Inject, Provide, Vue } from 'vue-property-decorator';

// 组件
import SubCom from './sub.vue';

@Component( {
    components: {
        SubCom,
    }
} )
export default class TestCom extends Vue {
    color: string = 'green'

    created () {
        console.log( 're:', this.color );
    }

    // 不要同时注册, 不会报错, 但是不规范
    // 也是定义
    @Provide( 'xcolor' ) xcolor = {
        color: this.color
    }

    // method
    changeColor () {
        // this.color = 'blue';
        this.xcolor.color = 'blue';

        console.log( this.xxx );
        this.xxx = 'red';
        console.log( this.xxx );
    }

    // computed
    get xxx (): string {
        return this.color + 'xxx';
    }
    set xxx ( value: string ) {
        this.color = value;
    }
}

</script>
