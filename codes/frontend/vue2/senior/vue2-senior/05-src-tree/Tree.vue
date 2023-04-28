<template>
  <div class="tree">
    <TreeNode v-for="node in data" :node="node" :key="node.id" />
  </div>
</template>
<script>
import TreeNode from './TreeNode.vue';

export default {
  name: 'Tree',

  components: {
    TreeNode,
  },

  props: {
    data: {
      type: Array,
      required: true,
    }
  },
}
</script>

