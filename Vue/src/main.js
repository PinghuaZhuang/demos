// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios'

axios.get( '/local/get2' ).then( data => {
    console.log( 'xxxxxx2', data )
} )

Vue.config.productionTip = false;



/* eslint-disable no-new */
window.vm = new Vue( {
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
} );
