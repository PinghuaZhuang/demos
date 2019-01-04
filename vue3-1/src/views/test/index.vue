<script lang='tsx'>
/// <reference path="../../types/types.d.ts" />
import { Component, Provide, Vue } from 'vue-property-decorator'
import SubCom from '@/views/test/sub.vue'

// Register the router hooks with their names
Component.registerHooks( [
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
] )

@Component( {
    components: {
        SubCom,
    }
} )
export default class TestCom extends Vue {

    render () {
        var lis: Array<JSX.Element> = [], i = 0;
        for ( ; i < 10; i++ ) {
            lis.push( <li>{ i }</li> )
        }
        return <div id="test">
            <div className="demo">{ this.color }</div>
            <button onClick={ this.changeColor }>changeColor</button>
            { lis }
            <SubCom/>
        </div>
    }

    @Provide() data: Color = {
        color: 'green'
    }

    // computed
    get color () {
        return this.data.color
    }
    set color ( value: string ) {
        this.data.color = value
    }

    // method
    changeColor () {
        if ( 'green' === this.color ) {
            this.color = 'blue'
        } else {
            this.color = 'green'
        }
    }

    // router
    beforeRouteEnter ( to: any, from: any, next: any ) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        // 要想跳转必须调用 next 方法
        // 跳转成功后会调用回调函数, 在回调函数里面可以使用 vm 实例

        // if ( to.name === 'test' ) {
        //     return
        // }
        next( ( vm: Vue ) => {
            console.log( 'vm:', vm, to, from, next );
        } )
    }
}
</script>
