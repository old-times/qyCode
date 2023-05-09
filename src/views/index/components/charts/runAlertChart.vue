<template>
  <div
    id="runAlertChart"
    ref="runAlertChart"
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
        this.chart = echarts.init(this.$refs.runAlertChart);
      }
    },
    //问题版本分布
    initData() {
      let result = [
        { name: '09:00', ai: 25, ai2: 50 },
        { name: '10:00', ai: 50, ai2: 35 },
        { name: '11:00', ai: 29, ai2: 25 },
        { name: '12:00', ai: 26, ai2: 27 },
        { name: '13:00', ai: 30, ai2: 34 },
        { name: '14:00', ai: 70, ai2: 39 },
        { name: '15:00', ai: 75, ai2: 28 },
        { name: '16:00', ai: 26, ai2: 50 },
        { name: '17:00', ai: 36, ai2: 26 },
        { name: '18:00', ai: 62, ai2: 35 },
        { name: '19:00', ai: 43, ai2: 86 },
        { name: '20:00', ai: 75, ai2: 50 },
        { name: '21:00', ai: 26, ai2: 59 },
        { name: '22:00', ai: 24, ai2: 62 }
      ]

      let xData = result.map((item) => {
        return item.name
      })
      let keys = ['ai', 'ai2'],
        seriesData = []
      let color = ['0, 254, 210', '0, 124, 250']
      keys.forEach((key, index) => {
        seriesData.push({
          name: key + '数',
          data: result.map((item) => {
            return item[key]
          }),
          type: 'line',
          yAxisIndex: 0,
          symbol: 'none',
          symbolSize: 7,
          barWidth: 14,
          splitNumber: 6,
          smooth: false,
          itemStyle: {
            color: `rgba(${color[index]},1)`
          },
          lineStyle: {
            color: `rgba(${color[index]},1)`,
            width: 1
          },
          areaStyle: {
            opacity: 1,
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: `rgba(${color[index]},0.35)`
                },
                {
                  offset: 0.8,
                  color: 'rgba(6, 8, 41,.1)'
                }
              ]
            },
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        })
        seriesData.push({
          name: key + '数',
          data: [
            {
              coords: result.map((item) => {
                return [item.name, item[key]]
              })
            }
          ],
          type: 'lines',
          coordinateSystem: 'cartesian2d',
          zlevel: 1,
          polyline: true,
          smooth: true,
          symbol: 'circle',
          effect: {
            show: true,
            trailLength: 0.4,
            symbol: 'circle',
            period: 8,
            symbolSize: 4
          },
          lineStyle: {
            normal: {
              color: `rgba(${color[index]},1)`,
              width: 0,
              opacity: 0,
              curveness: 0
            }
          }
        })
      })

      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          backgroundColor: 'rgba(12, 51, 115,0.8)',
          borderColor: 'rgba(3, 11, 44, 0.5)',
          textStyle: {
            color: 'rgba(255, 255, 255, 1)'
          }
        },
        grid: {
          x: 30,
          y: 10,
          x2: 30,
          y2: 20
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData,
          axisPointer: {
            handle: {
              show: false
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#AEC6DF'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 8,
            interval: 'auto'
          }
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLabel: {
              fontSize: 8,
              interval: 'auto'
            }
          }
        ],
        series: seriesData
      }
    },
  },
};
</script>
<style lang="less" scoped>
ul.baseInfo {
  width: 1083px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    div.left {
      width: 65px;
      height: 65px;
    }
    div.right {
      color: #fff;
    }
  }
}
</style>
