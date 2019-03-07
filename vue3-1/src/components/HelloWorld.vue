<template>
  <div class="hello">
    <h1>{{ msg }} {{ color }} {{ color2 }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { COLOR } from '@/assets/abcde/common.js'
import { COLOR2 } from '@/assets/a2/t.js'

@Component
export default class HelloWorld extends Vue {
  color = COLOR
  color2 = COLOR2
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
