<template>
    <div class="slot-colors">
        <h2>作用域插槽</h2>
        <slot name="color" v-bind:colors="colors"></slot>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Scope extends Vue {
    public colors: object = {
        color: 'red'
    }
}

</script>
