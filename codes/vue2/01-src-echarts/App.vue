<template>
  <div id="app">

    <Graph title="平均分" :list="classes.map(item => item.average)" :min="88" :max="98" unit=" 分" />
    <Graph title="合格率" :list="classes.map(item => item.passRate)" :min="95" :max="101" unit="" />
    <Graph title="优良率" :list="classes.map(item => item.excellentRate)" :min="84" :max="101" unit="" />
  </div>
</template>
<script>
import Graph from './Graph.vue';


export default {
  name: 'App',

  components: {
    Graph,
  },

  data() {
    return {
      xAxis:  [
        '三 1',
        '三 2',
        '三 3',
        '三 4',
        '三 5',
        '三 6',
        '三 7',
        '三 8',
        '三 9',
        '三 10',
        '三 11',
        '三 12',
      ],

      classes: [
        { clazz: '三 1',  average: 94.43, passRate: 100, excellentRate: 96 },
        { clazz: '三 2',  average: 92.86, passRate: 100, excellentRate: 95.74 },
        { clazz: '三 3',  average: 96.66, passRate: 100, excellentRate: 100 }, // 96.44 -> 96.66
        { clazz: '三 4',  average: 95.18, passRate: 100, excellentRate: 95.74 },
        { clazz: '三 5',  average: 92.67, passRate: 96.15, excellentRate: 94.23 },
        { clazz: '三 6',  average: 91.80, passRate: 100, excellentRate: 93.87 },
        { clazz: '三 7',  average: 95.95, passRate: 100, excellentRate: 98.11 },
        { clazz: '三 8',  average: 90.15, passRate: 100, excellentRate: 85.36 },
        { clazz: '三 9',  average: 93.75, passRate: 97.96, excellentRate: 93.87 }, // 93.40 -> 93.75
        { clazz: '三 10', average: 92.40, passRate: 100, excellentRate: 89.79 },
        { clazz: '三 11', average: 93.73, passRate: 100, excellentRate: 97.91 },
        { clazz: '三 12', average: 92.19, passRate: 98.11, excellentRate: 94.34 },
      ],

      averages: [

      ]
    };
  },

  mounted() {
  }
}
</script>
<style>
.ww-graph {
  width: 800px;
  height: 600px;

  margin: 40px;
}
</style>
