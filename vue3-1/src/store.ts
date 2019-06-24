import Vue from 'vue'
import Vuex from 'vuex'
import Item from './Class/Item'
import Test from './assets/test.js'
console.log( 'name', Test.name )

// 内置 Logger 对象
import createLogger from 'vuex/dist/logger'

const logger = createLogger( {
    collapsed: false, // 自动展开记录的 mutation
    filter ( mutation, stateBefore, stateAfter ) {
        // 若 mutation 需要被记录，就让它返回 true 即可
        // 顺便，`mutation` 是个 { type, payload } 对象
        return mutation.type === 'addCount'
    },
    transformer ( state ) {
        // 在开始记录之前转换状态
        // 例如，只返回指定的子树
        return ( state as any ).count + 'xxx'
    },
    mutationTransformer ( mutation ) {
        // mutation 按照 { type, payload } 格式记录
        // 我们可以按任意方式格式化
        return mutation.type
    },
    // 修改 logger 对象, 最好不要修改
    // logger: window.console, // 自定义 console 实现，默认为 `console`
} )

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
    color: 'red',
    item: new Item(),
    lang: 'en'
}

var store = new Vuex.Store( {
    state: state,
    mutations: {
        addCount ( state, num: number ) {
            num == null ?
                state.count++ :
                state.count + num
        },

        setColor ( state, color: string ) {
            state.item.setColor( color )
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
        },
        logger
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
