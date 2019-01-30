import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

// 组件
import VModel from './v-model.vue'

@Component
export default class VFor extends Vue {

    render () {
        let lis: Array<JSX.Element> = [];

        this.lis.forEach( ( item, index ) => lis.push( <li onClick={ ( ( index ) => this.changeLiHtml.bind( this, index ) )( index ) }>{ item }</li> ) )

        let props = {
            checked: this.val
        }

        return ( <div id="vFor">
            <h1>V-For</h1>
            <ul>{ lis }</ul>
            {/* 这里不能使用 vue 模板语法 */}
            <VModel { ...props } checked={ this.val } onXxx={ this.xxx.bind( this ) }/>
        </div> )
    }

    public lis: Array<string> = [ 'a', 'b', 'c', 'd' ]
    public val: Number = 0

    changeLiHtml ( index: number ) {
        this.$set( this.lis, index, this.lis[ index ] + 'x' )
    }

    xxx ( val ) {
        this.val = val
    }
}
