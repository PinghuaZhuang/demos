<template>
    <div class="vuex-plugins">
        <button class="btn" @click="btnClick">addCount</button>
        <br />
        <input type="text" name="mapState" id="" v-model="count">
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapMutations } from 'vuex'
// import { getCache } from '@/store'

function mapState ( params: Array<string> ): object {
    let obj: any = { }
    params.forEach( ( item: any ) => ( obj[ item ] = {
        set ( val: number ): void {
            this.$store.state[ item ] = val
        },
        get (): number {
            return this.$store.state.count
        }
    } ) )
    return obj
}

@Component( {
    computed: {
        ...mapState( [
            'count'
        ] )
    },
    methods: {
        ...mapMutations( [
            'addCount'
        ] )
    }
} )
export default class VuexPluginsImp extends Vue {

    btnClick (): void {

        // 这叫自找麻烦, 用什么 ts
        ( this as any ).addCount()
    }

    mounted () {
        console.log( 'this:', this )

        let hasInstantiated = this.$router.resolve( { name: 'demo' } )

        console.log( 'routers:', hasInstantiated )
    }
}
</script>
