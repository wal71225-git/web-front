<template>
  <div>
      <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div ref="chart" style="width: 600px;height:400px;"></div>
    <div ref="chart2" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  name: 'demo1',
  data() {
    return {
      optipn: {
        title: {
          text: 'ECharts 入门示例',
          link: 'www.baidu.com'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: '65%',
            data: [
              { value: 250, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    const myChart = this.$echarts.init(this.$refs.chart)
    myChart.setOption(this.optipn)
  }
}
</script>
