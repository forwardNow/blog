<template>
  <div id="app">
    <Panel>
      内容
    </Panel>

    <Panel>
      内容

      <template v-slot:footer>
        页脚
      </template>
    </Panel>

    <Panel>
      <template v-slot:test="{ list }">
        <div v-for="item in list" :key="item">{{ item }}</div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from './Panel.vue';

export default {
  name: 'App',
  components: {
    Panel
  }
}
</script>
