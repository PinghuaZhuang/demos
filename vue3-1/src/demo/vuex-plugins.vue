<template>
    <div class="vuex-plugins">
        <button class="btn" @click="btnClick">addCount</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapMutations } from 'vuex'
import { getCache } from '@/store'
console.log( getCache )

@Component( {
    methods: {
        ...mapMutations( [
            'addCount'
        ] )
    }
} )
export default class VuexPluginsImp extends Vue {

    btnClick () {
        // 打印历史记录
        getCache( 'count' )

        // 这叫自找麻烦, 用什么 ts
        ( this as any ).addCount()
    }
}
</script>
