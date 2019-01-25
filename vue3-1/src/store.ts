import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

interface State {
    count: number,
    color: string
}
interface Cache {
    count: number[],
    color: Array<string>
}

var cache: Cache = {
    count: [],
    color: []
}

var state = {
    count: 0,
    color: 'red'
}

var store = new Vuex.Store( {
    state: state,
    mutations: {
        addCount ( state, num: number ) {
            num == null ?
                state.count++ :
                state.count + num
        }
    },
    actions: {

    },
    plugins: [
        ( store ) => {
            store.subscribe( ( { type, payload }, state ) => {
                // cache[]( state.count )
                if ( 'addCount' === type ) {
                    cache.count.push( state.count )
                }
                console.log( 'plugins:', type, payload, state )
            } )
        }
    ]
} )

// type StateType = 'color' | 'count'

// export const getCache = function ( type: StateType ): any {
//     var state = store.state

//     if ( state[ type ] == null ) {
//         return null
//     } else {
//         return cache[ type ]
//     }
// }

export default store
