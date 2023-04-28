<template>
  <div ref="graph" class="ww-graph"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  name: 'App',

  props: [
    'title',
    'list',
    'min',
    'max',
    'unit'
  ],

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
        { clazz: '三 3',  average: 96.44, passRate: 100, excellentRate: 100 },
        { clazz: '三 4',  average: 95.18, passRate: 100, excellentRate: 95.74 },
        { clazz: '三 5',  average: 92.67, passRate: 96.15, excellentRate: 94.23 },
        { clazz: '三 6',  average: 91.80, passRate: 100, excellentRate: 93.87 },
        { clazz: '三 7',  average: 95.95, passRate: 100, excellentRate: 98.11 },
        { clazz: '三 8',  average: 90.15, passRate: 100, excellentRate: 85.36 },
        { clazz: '三 9',  average: 93.40, passRate: 97.96, excellentRate: 93.87 },
        { clazz: '三 10', average: 92.40, passRate: 100, excellentRate: 89.79 },
        { clazz: '三 11', average: 93.73, passRate: 100, excellentRate: 97.91 },
        { clazz: '三 12', average: 92.19, passRate: 98.11, excellentRate: 94.34 },
      ],

      averages: [

      ]
    };
  },

  mounted() {
    const colorPalette = [
      '#5ab1ef','#b6a2de','#5ab1ef','#ffb980','#d87a80',
      '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
      '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
      '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
    ];

    const theme = {
      color: colorPalette,
    };

    echarts.registerTheme('macarons', theme);


    const chartDom = this.$refs.graph;
    const myChart = echarts.init(chartDom, 'macarons');
    const option = {
      title: {
        text: '三年级 - ' + this.title
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {

        },
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [
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
        ]
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}' + this.unit
        },
        axisLine: {
          show: true,
        },
        // scale:true,
        min: this.min,
        max: this.max,
      },
      series: [
        {
          name: this.title,
          type: 'line',
          smooth: true,
          data: this.list,
          markPoint: {
            // data: [
            //   { type: 'max', name: 'Max' },
            //   { type: 'min', name: 'Min' }
            // ],

          },
          markLine: {
            symbol: 'none',
            data: [{ type: 'average', name: '平均' }]
          },
          label: {
            show: true,
            // padding: 40,
          }
        },

      ]
    };

    myChart.setOption(option);
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
