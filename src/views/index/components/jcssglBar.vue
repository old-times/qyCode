<template>
  <div class="relative">
    <div id="jcssglBar" :style="{ height: height, width: width }" />
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "jcssglBar",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "480px"
    }
  },
  data() {
    return {
      chart: null,
      queryParam: {
        sljsdw: undefined
      },
      nfsjList: []
    };
  },
  created() {},
  mounted() {
    this.initChart();
    this.fetchData();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el.querySelector("#jcssglBar"));

      const option = {
        color: "#2fc6dc",
        tooltip: {
          trigger: "axis"
        },
        legend: {
          show: false,
          data: ["案件数"],
          bottom: 10
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "4%",
          containLabel: true
        },
        yAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: [
              "填埋场",
              "餐厨厂",
              "中转站",
              "公厕",
              "车辆",
              "船舶",
              "环卫专用器械",
              "垃圾桶",
              "物联网智能设备"
            ],
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 21
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 2,
                color: "rgba(25, 139, 255, 0.3)"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(25, 139, 255, 0.3)"
              }
            }
          }
        ],
        xAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 21
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 2,
                color: "rgba(25, 139, 255, 0.3)"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(25, 139, 255, 0.3)"
              }
            }
          }
        ],
        series: [
          {
            name: "基础设施管理",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 5, 5, 0] // 设置柱状图顶部为圆角
              }
            },
            label: {
              show: true,
              position: "right", // 设置标签显示在柱状图顶部
              fontSize: 18,
              valueAnimation: true,
              color: "#ffffff"
            },
            data: [
              64.2,
              79.5,
              130.1,
              130.1,
              // 130.1,
              {
                value: 130.1,
                itemStyle: {
                  color: {
                    type: "linear", // 线性渐变
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(244,127,61)" // 0%处的颜色为红色
                      },
                      {
                        offset: 1,
                        color: "rgba(244,206,61)" // 100%处的颜色为蓝
                      }
                    ]
                  }
                }
              },
              60,
              57,
              92,
              45
            ],
            showBackground: true,
            backgroundStyle: {
              color: "rgba(110, 193, 244, 0.2)"
            }
          }
        ]
      };

      this.chart.setOption(option);
    },
    fetchData() {
      let arr = this.$datautils.getData("全国业务板块/基础设施管理", "柱状图");
      console.log(arr, "基础设施");
      if (arr[0].vals && arr[0].vals.length > 0) {
        this.zzzqkData = arr[0].vals;
      }
      // console.log(arr, '中转站情况-lb')
      const titles = [];
      const numData = [];
      arr[0].vals.forEach(k => {
        titles.push(k.type);
        numData.push(k.quantity);
      });

      const obj = {
        yAxis: {
          data: titles
        },
        series: [{ data: numData }]
      };
      this.chart.setOption(obj);
    }
  }
};
</script>
