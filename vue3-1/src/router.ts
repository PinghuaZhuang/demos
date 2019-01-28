import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import D404 from './views/404.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: '404',
            component: D404
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/test/:color?',
            name: 'test',
            component: () => import( './views/test/index.vue' )
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import( './demo/index.vue' ),
            children: [ {
                path: 'vuex-plugins',
                name: 'vuex-plugins',
                component: () => import( './demo/vuex-plugins.vue' )
            }, {
                path: 'keep-alive',
                name: 'keep-alive',
                component: () => import( './demo/keep-alive/index.vue' ),
                children: [ {
                    path: 'example1',
                    name: 'example1',
                    component: () => import( './demo/keep-alive/example1.vue' )
                }, {
                    path: 'example2',
                    name: 'example2',
                    component: () => import( './demo/keep-alive/example2.vue' ),
                    meta: {
                        unKeepAlive: true
                    }
                }, {
                    path: 'example3',
                    name: 'example3',
                    component: () => import( './demo/keep-alive/example3.vue' )
                } ]
            } ]
        },
        {
            path: '/plugins',
            name: 'plugins',
            component: () => import( './plugins/index.vue' ),
            children: [ {
                path: 'axios',
                name: 'axios',
                component: () => import( './plugins/axios.vue' )
            } ]
        }
    ]
})
