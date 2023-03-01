import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import test from '@/components/test';
// import common from '@/components/common';
import VueCom from '@/components/VueCom'

Vue.use( Router );

export default new Router( {
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        // {
        //     path: '/vue',
        //     name: 'vue',
        //     component: VueCom
        // },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
} );
