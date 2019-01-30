import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

@Component
export default class VFor extends Vue {

    render () {
        let lis: Array<JSX.Element> = [];

        this.lis.forEach( ( item, index ) => lis.push( <li onClick={ ( ( index ) => this.changeLiHtml.bind( this, index ) )( index ) }>{ item }</li> ) )

        return <div id="vFor">
            <h1>V-For</h1>
            <ul>{ lis }</ul>
        </div>
    }

    public lis: Array<string> = [ 'a', 'b', 'c', 'd' ]

    changeLiHtml ( index: number ) {
        this.$set( this.lis, index, 'xxx' )
    }
}
