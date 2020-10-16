<template>
   <div class="chart"></div>
</template>
<script>
import { merge } from 'lodash';
import echart from 'echarts';
import { BASIC_OPTION } from './default_option';
import { COLOR_ARRAY } from '../color';
import ResizeListener from 'element-resize-detector';

export default {
  name: 'ChartPie',
  props: {
    seriesData: {
      type: Array,
      required: true,
      default: () => []
    },
    extraOption: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    seriesData: {
      deep: true,
      handler() {
        this.updateChartView();
      }
    }
  },
  mounted() {
    this.chart = echart.init(this.$el);
    this.updateChartView();
    window.addEventListener('resize', this.handleWindowResize);
    this.addChartResizeListener();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: {
    /**
     * 将业务数据加入到基础样式配置中
     * @returns {Object} 完整的echart配置
     */
    assembleDataToOption() {
      const formatter = name => {
        const total = this.seriesData.reduce((acc, cur) => acc + cur.value, 0);
        const data = this.seriesData.find(item => item.name === name) || {};
        const percent = data.value
          ? `${Math.round((data.value / total) * 100)}%`
          : '0%';

        return `{a|${name}}{b|${percent}}`;
      };

      return merge(
        {},
        BASIC_OPTION,
        { color: COLOR_ARRAY },
        {
          legend: { formatter },
          series: [{ data: this.seriesData }]
        },
        this.extraOption
      );
    },

    /**
     * 对chart元素尺寸进行监听，当发生变化时同步更新echart视图
     */
    addChartResizeListener() {
      const instance = ResizeListener({
        strategy: 'scroll',
        callOnAdd: true
      });

      instance.listenTo(this.$el, () => {
        if (!this.chart) return;
        this.chart.resize();
      });
    },

    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart) return;

      const fullOption = this.assembleDataToOption();
      this.chart.setOption(fullOption, true);
    },

    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) return;
      this.chart.resize();
    }
  }
};
</script>

<style  scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>