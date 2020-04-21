<template>
  <el-button type="primary">color: {{ color }}</el-button>
</template>

<script>
export default {
  name: "ZButton",
  props: {
    /**
     * The color for the button.
     * @see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names)
     * @see See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for a list of color names
     */
    color: {
      type: String,
      default: '#333'
    },
    /**
     * The size of the button
     * `small, normal, large`
     * @since Version 1.0.1
     */
    size: {
      type: String,
      default: 'normal'
    },
  },
  created() {
    console.log('xxxx', this)
  },
};
</script>
