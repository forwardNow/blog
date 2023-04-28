import * as echarts from 'echarts';

const chartDom = document.getElementById('graph');
const myChart = echarts.init(chartDom);
const option = {
  title: {
    text: '三年级平均分'
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
      formatter: '{value} 分'
    },
    axisLine: {
      show: true,
    },
    // scale:true,
    min: 88,
    max: 98,
  },
  series: [
    {
      name: '平均分',
      type: 'line',
      data: [
        94.43,
        92.86,
        96.44,
        95.18,
        92.67,
        91.80,
        95.95,
        90.15,
        93.40,
        92.40,
        93.73,
        92.19,
      ],
      markPoint: {
        // data: [
        //   { type: 'max', name: 'Max' },
        //   { type: 'min', name: 'Min' }
        // ],

      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      },
      label: {
        show: true,
        // padding: 40,
      }
    },

  ]
};

// option && myChart.setOption(option);


