import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';

Vue.use( Vuex );

const modulesA = {
    state: {
        name: 'xxx'
    }
};

const store = new Vuex.Store( {
    state: {
        count: 0,
        ...state
    },

    modules: {

        // this.$store.state.a.name === 'xxx';
        a: modulesA
    },

    mutations: {

        // num 不传入的话默认的为 $event 事件
        add ( state, { num } ) {
            Object.prototype.toString.call( num ) === '[object Number]' ?
                state.count += num :
                state.count++;
        },

        // 虽然可以使用异步函数, 但是追踪不到
        callback ( state ) {
            window.setTimeout( () => {
                state.count = 999;
            }, 1000 );
        }
    },

    actions: {

        callback2 ( { dispatch, commit }, fn ) {
            fn.then( _ => {
                commit( {
                    type: 'add',
                    num: 1000
                } )
            } );
        }
    }
} );

export default store;
