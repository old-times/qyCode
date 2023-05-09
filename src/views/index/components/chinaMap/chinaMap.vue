<template>
  <div id="chinaChart" style="width: 90%; height: 90%"></div>
</template>
<script>
import * as echarts from "echarts";
import geoJson from "./china.json"
export default {
  data() {
    return {
      myChart: "",
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      echarts.registerMap("china", geoJson)
      this.myChart = echarts.init(document.getElementById("chinaChart"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            return params.name;
          },
        },
        geo: [
          {
            map: "china",
            aspectScale: 1,
            zoom: 0.60,
            layoutCenter: ["50%", "50%"],
            layoutSize: "180%",
            show: true,
            roam: false,
            label: {
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                borderColor: "#c0f3fb",
                borderWidth: 1,
                shadowColor: "#8cd3ef",
                shadowOffsetY: 10,
                shadowBlur: 120,
                areaColor: "transparent",
              },
            }
          },
          // 重影
          {
            type: "map",
            map: "china",
            zlevel: -1,
            aspectScale: 1,
            zoom: 0.60,
            layoutCenter: ["50%", "51%"],
            layoutSize: "180%",
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 1,
                // borderColor:"rgba(17, 149, 216,0.6)",
                borderColor: "rgba(58,149,253,0.8)",
                shadowColor: "rgba(172, 122, 255,0.5)",
                shadowOffsetY: 5,
                shadowBlur: 15,
                areaColor: "rgba(5,21,35,0.1)",
              },
            },
          },
          {
            type: "map",
            map: "china",
            zlevel: -2,
            aspectScale: 1,
            zoom: 0.60,
            layoutCenter: ["50%", "52%"],
            layoutSize: "180%",
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 1,
                // borderColor: "rgba(57, 132, 188,0.4)",
                borderColor: "rgba(58,149,253,0.6)",
                shadowColor: "rgba(65, 214, 255,1)",
                shadowOffsetY: 5,
                shadowBlur: 15,
                areaColor: "transpercent",
              },
            },
          },
          {
            type: "map",
            map: "china",
            zlevel: -3,
            aspectScale: 1,
            zoom: 0.60,
            layoutCenter: ["50%", "53%"],
            layoutSize: "180%",
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 1,
                // borderColor: "rgba(11, 43, 97,0.8)",
                borderColor: "rgba(58,149,253,0.4)",
                shadowColor: "rgba(58,149,253,1)",
                shadowOffsetY: 15,
                shadowBlur: 10,
                areaColor: "transpercent",
              },
            },
          },
          {
            type: "map",
            map: "china",
            zlevel: -4,
            aspectScale: 1,
            zoom: 0.60,
            layoutCenter: ["50%", "54%"],
            layoutSize: "180%",
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 5,
                // borderColor: "rgba(11, 43, 97,0.8)",
                borderColor: "rgba(5,9,57,0.8)",
                shadowColor: "rgba(29, 111, 165,0.8)",
                shadowOffsetY: 15,
                shadowBlur: 10,
                areaColor: "rgba(5,21,35,0.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "china市数据",
            type: "map",
            map: "china", // 自定义扩展图表类型
            aspectScale: 1,
            zoom: 0.60, // 缩放
            showLegendSymbol: true,
            label: {
              normal: {
                show: true,
                textStyle: { color: "#fff", fontSize: "120%" },
              },
              emphasis: {
                // show: false,
              },
            },
            itemStyle: {
              normal: {
                areaColor: {
                  type: "linear",
                  x: 1200,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(3,27,78,0.75)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(58,149,253,0.75)", // 50% 处的颜色
                    },
                  ],
                  global: true, // 缺省为 false
                },
                borderColor: "#fff",
                borderWidth: 0.2,
              },
              emphasis: {
                show: false,
                color: "#fff",
                areaColor: "rgba(0,254,233,0.6)",
              },
            },
            layoutCenter: ["50%", "50%"],
            layoutSize: "180%",
            markPoint: {
              symbol: "none",
            },
          },
        ],
      };
      this.myChart.setOption(option);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
#chinaChart {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
