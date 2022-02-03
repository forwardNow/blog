<template>
  <div
    v-show="visible"
    class="dialog"
  >
    <div class="dialog__head">{{ title }}</div>
    <div class="dialog__body">{{ content }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String,
  },

  data() {
    return {
      visible: false,
    }
  },

  methods: {
    show() {
      this.visible = true;
    },

    hide() {
      this.visible = false;

      if (typeof this.$$destroy === 'function') {
        this.$$destroy();
      }
    },
  }
}
</script>
