### Import

```js static
import Zbutton from "@/components/button";
```

### JSX

```jsx
import Zbutton from "@/components/button";
/**
 * Component is described here.
 * @displayName Wonderful Button
 * @example [none]
 */
export default {
  render() {
    return <Zbutton color={ this.colorDemo }></Zbutton>
  }
}
```

### VUE

```vue
<template>
  <Zbutton :color="'grey'"></Zbutton>
</template>

<script>
import Zbutton from "@/components/button";

/**
 * Component is described here.
 * @displayName Wonderful Button
 * @example [none]
 */
export default {
  name: "ViewButton",
  components: {
    Zbutton
  }
};
</script>
```
