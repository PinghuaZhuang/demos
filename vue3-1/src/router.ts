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
            component: () => import( '@/views/test/index.vue' )
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import( '@/demo/index.vue' ),
            children: [ {
                path: 'vuex-plugins',
                name: 'vuex-plugins',
                component: () => import( '@/demo/vuex-plugins.vue' )
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
            }, {
                path: 'v-for',
                name: 'v-for',
                component: () => import( '@/demo/v-for' )
            }, {
                path: 'slot',
                name: 'slot',
                component: () => import( '@/demo/slot/index.vue' )
            }, {
                path: 'v-model',
                name: 'v-model',
                component: () => import( '@/demo/v-model/index.vue' )
            }, {
                path: 'jsx',
                name: 'jsx',
                component: () => import( '@/demo/jsx/index.tsx' )
            }, {
                path: 'v-bind',
                name: 'v-bind',
                component: () => import( '@/demo/v-bind/index.vue' )
            }, {
                path: 'store',
                name: 'store',
                component: () => import( '@/demo/store/index.vue' )
            }, {
                path: 'vuex-class',
                name: 'vuex-class',
                component: () => import( '@/demo/store/class.vue' )
            }, {
                path: 'less',
                name: 'less',
                component: () => import( '@/demo/less/index.vue' )
            }, {
                path: 'layout',
                name: 'layout',
                component: () => import( '@/demo/layout/index.vue' )
            }, {
                path: 'promise',
                name: 'promise',
                component: () => import( '@/demo/promise/index.vue' )
            }, {
                path: 'lodash',
                name: 'lodash',
                component: () => import( '@/demo/loadsh/index.vue' )
            }, {
                path: 'extend',
                name: 'extend',
                component: () => import( '@/demo/extend/index.vue' ),
                children: [
                    {
                        path: 'exp1',
                        name: 'exp1',
                        component: () => import( '@/demo/extend/exp1.vue' )
                    },
                    {
                        path: 'exp2',
                        name: 'exp2',
                        component: () => import( '@/demo/extend/exp2.vue' )
                    }
                ]
            } ]
        },
        {
            path: '/plugins',
            name: 'plugins',
            component: () => import( '@/plugins/index.vue' ),
            children: [ {
                path: 'axios',
                name: 'axios',
                component: () => import( '@/plugins/axios.vue' )
            }, {
                path: 'jquery',
                name: 'jquery',
                component: () => import( '@/plugins/jquery.vue' )
            }, {
                path: 'qrcode',
                name: 'qrcode',
                component: () => import( './plugins/qrcode.jsx' )
            }, {
                path: 'tween',
                name: 'tween',
                component: () => import( './plugins/TWEEN/index.vue' )
            }, {
                path: 'xlxs',
                name: 'xlxs',
                component: () => import( './plugins/js-xlsx/xlxs.vue' )
            }, {
                path: 'xlxs-upload',
                name: 'xlxs-upload',
                component: () => import( './plugins/js-xlsx/index.vue' )
            }, {
                path: 'pubuliu',
                name: 'pubuliu',
                component: () => import( './plugins/pubuliu.vue' )
            }, {
                path: 'normalizr',
                name: 'normalizr',
                component: () => import( './plugins/normalizr/index.vue' )
            } ]
        }, {
            path: '/components',
            name: 'components',
            component: () => import( '@/components/index.vue' ),
            children: [
                {
                    path: 'download',
                    name: 'download',
                    component: () => import( '@/components/download/index.vue' )
                }
            ]
        }, {
            path: '/element-ui',
            name: 'element-ui',
            component: () => import( '@/element-ui/index.vue' ),
            children: [ {
                path: 'table',
                name: 'el-table',
                component: () => import( '@/element-ui/table.vue' )
            } ]
        },

        {
            path: '/animation',
            name: 'animation',
            component: () => import( '@/animation/index.vue' ),
            children: [
                {
                    path: 'transition',
                    name: 'transition',
                    component: () => import( '@/animation/transition.vue' )
                }
            ]
        },

        {
            path: '/fix',
            name: 'fix',
            component: () => import( '@/fix/index.vue' ),
            children: [
                {
                    path: 'tabel',
                    name: 'tabel',
                    component: () => import( '@/fix/table.vue' )
                }
            ],
        }

        // {
        //     path: '/test2',
        //     name: 'test2',
        //     component: () => import( './test/index.vue' )
        // },
        // {
        //     path: '/less',
        //     name: 'less',
        //     component: () => import( './less/index.vue' )
        // }
    ]
})
