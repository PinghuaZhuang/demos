<template>
    <div id="v-model">
        <VModelDemo v-model="checked"></VModelDemo>
        <button class="add-router" @click="addRouter">点击动态添加路由</button>
        <br />
        <button @click="$router.push( { name: 'async-router' } )">
            点击跳转到 async-router
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator'

// 组件
import VModelDemo from './v-model.vue'

@Component( {
    components: {
        VModelDemo,
    }
} )
export default class VModel extends Vue {
    checked: Number = 0

    @Watch( 'checked', { immediate: true, deep: true } )
    onCheckedChange ( old: Number, val: Number ) {
        console.log( 'changeChecked:', old, val )
    }

    mounted () {
        console.log( 'this:', this )

        let hasInstantiated = this.$router.resolve( { name: 'demo' } )

        console.log( 'routers:', hasInstantiated )
    }

    addRouter () {
        window.setTimeout( () => {
            this.$router.addRoutes( [ {
                path: 'async-router',
                name: 'async-router',
                component: () => import( '@/demo/async-router.vue' ),
            } ] )
        }, 5000 )
    }
}
</script>
