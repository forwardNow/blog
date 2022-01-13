<template>
  <div class="panel">
    <div class="header">
      <slot name="header">header</slot>
    </div>
    <div class="body">
      <slot></slot>

      <slot name="test" :list="list"></slot>
    </div>
    <div class="footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        'a', 'b', 'c'
      ]
    }
  }
}
</script>