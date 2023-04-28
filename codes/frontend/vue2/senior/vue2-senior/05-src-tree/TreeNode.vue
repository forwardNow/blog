<template>
  <div class="tree-node">
    <div class="tree-node__label">{{ node.label }}</div>
    <div
      v-if="node.children && node.children.length > 0"
      class="tree-node__sub-tree"
    >
      <TreeNode v-for="subNode in node.children" :node="subNode" :key="subNode.id" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
    }
  }
}
</script>
<style>
.tree-node {
  font-size: 14px;
  padding: 8px 16px;
}
.tree-node__label {

}
.tree-node__sub-tree {
  padding-left: 24px;
}
</style>
