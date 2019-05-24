<template>
    <div id="scope">
        <h1>Scope</h1>
        <Colors #color="data">
            <!-- 默认访问的当前组件的作用域, 可以利用 slot-scope 访问子组件的作用域 -->
            <!-- <h3 slot="color" slot-scope="data">{{ data.colors.color }}</h3> -->
            <h3 slot="color">{{ data.colors.color }}</h3>
        </Colors>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

// 组件
import Colors from './children/colors.vue'

@Component( {
    components: {
        Colors
    }
} )
export default class Slot extends Vue {
    public colors: Object = {
        name: 'Slot',
        age: '11',
        color: 'blue'
    }
}
</script>
