import { Component, Provide, Vue, Watch, Prop } from 'vue-property-decorator'

// let exclude: Array<string> = [];

// Register the router hooks with their names
// Component.registerHooks( [
//   'beforeRouteEnter',
//   'beforeRouteLeave',
//   'beforeRouteUpdate' // for vue-router 2.2+
// ] )

@Component
export default class JSX extends Vue {
    @Prop( String ) msg !: string

    render () {
        return ( <div>
            <h1>JSX</h1>
            <h2>{ ( this as any ).$props.msg }</h2>
        </div> )
    }
}
