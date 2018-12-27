<template>
    <div id="test">
        <div class="demo">{{ color }}</div>
        <!-- <button @click="changeColor">changeColor</button>
        <SubCom/> -->
        <div v-html="html"></div>
    </div>
</template>

<script lang='tsx'>
/* elsint-disable */
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

    html = '<div></div>'

    // html = <div>
    //     <button onClick={ this.changeColor.bind( this ) }>changeColor</button>
    //     <SubCom/>
    // </div>

    created () {
        console.log( 're:', this.color );
    }

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
