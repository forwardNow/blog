<template>
  <section
    class="action-icon"
    :class="{ 'action-icon_divider': divider }"
  >
    <slot />
  </section>
</template>
<script>
export default {
  name: 'ActionIcon',
  props: {
    divider: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
