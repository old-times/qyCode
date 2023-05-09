<template>
  <div
    id="trafficAnalysisChart"
    ref="trafficAnalysisChart"
    :style="{ height: height, width: width }"
  ></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    width: {
      type: String,
      default: "1083px",
    },
    height: {
      type: String,
      default: "440px",
    },
    params: {
      type: Object,
    },
  },
  data() {
    return {
      option: {},
      chart: null,
    };
  },
  watch: {
    params: {
      handler() {
        this.restoreChart();
      },
      deep: true,
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.chart.resize();
    });
  },
  mounted() {
    //问题版本分布
    this.restoreChart();
  },
  methods: {
    restoreChart() {
      this.initData();
      this.initEchart();
      this.refreshChart();
    },
    // 绘制图表
    refreshChart() {
      if (!this.chart) return false;
      this.chart.setOption(this.option || {}, true);
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    },
    initEchart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.trafficAnalysisChart);
      }
    },
    //问题版本分布
    initData() {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          right: '0',
          // data: ["Forest", "Steppe", "Desert", "Wetland"],
        },
        grid: {
          left: '0',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLabel: { color: '#b3b5bb' },
            data: ['一级', '二级', '三级'],
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位（次）',
            nameTextStyle: {
              color: '#b3b5bb',
              alighn: 'end',
              padding: [0, 0, 0, -15],
            },
            nameGap: 30,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { color: '#b3b5bb' },
            // 修改y轴分割线
            splitLine: {
              lineStyle: {
                color: '#e6e6e6',
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: '新增',
            type: 'bar',
            barGap: '10%',
            emphasis: {
              focus: 'series',
            },
            data: [2500, 6000, 4200],
            itemStyle: {
              color: '#0091ff',
            },
          },
          {
            name: '修改',
            type: 'bar',
            barGap: '10%',
            emphasis: {
              focus: 'series',
            },
            itemStyle: {
              color: '#44d7b6',
            },
            data: [5900, 4100, 7900],
          },
          {
            name: '删除',
            type: 'bar',
            barGap: '10%',
            emphasis: {
              focus: 'series',
            },
            itemStyle: {
              color: '#f7b500',
            },
            data: [2500, 5800, 4100],
          },
          {
            name: '导出',
            type: 'bar',
            barGap: '10%',
            emphasis: {
              focus: 'series',
            },
            itemStyle: {
              color: '#fa1f1f',
            },
            data: [1800, 1500, 1900],
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped></style>
