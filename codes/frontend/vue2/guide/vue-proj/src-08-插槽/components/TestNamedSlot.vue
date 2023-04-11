<template>
  <div class="test-box">
    <div class="header">header</div>

    <div class="body">
      <slot name="body">body</slot>
    </div>

    <div class="footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
