<template>
  <div id="app">
    <Tree :data="tree"></Tree>
  </div>
</template>
<script>
import Tree from './Tree.vue';

export default {
  components: {
    Tree
  },
  data() {
    return {
      tree: [
        {
          id: '1',
          label: '一级节点-1',
          children: [
            {id: '1-1', label: '二级节点-1'},
            {id: '1-2', label: '二级节点-2'},
          ]
        },
        {
          id: '2',
          label: '一级节点-2',
          children: [
            {id: '2-1', label: '二级节点-1'},
            {
              id: '2-2', label: '二级节点-2',
              children: [
                {id: '2-2-1', label: '三级节点-1'},
                {id: '2-2-2', label: '三级节点-2'},
              ]
            },
          ]
        },
      ]
    };
  },
}
</script>
