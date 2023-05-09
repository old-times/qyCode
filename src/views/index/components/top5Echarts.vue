<template>
  <div id="topChart111" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChart: "",
      charts: {
        cityList: [],
        cityData: [],
      },
    };
  },
  mounted() {
    this.getZaiTop();
    this.getData()
  },
  methods: {
    // 获取在线设备数TOP5
    getZaiTop() {
      let res = this.$datautils.getData("全国业务板块/人员管理", "柱状图");
      res[0].vals.forEach((item) => {
        this.charts.cityList.push(item.type);
        this.charts.cityData.push(item.quantity.split("个")[0]);
      });
      this.getData();
    },
    getData() {
      let charts = this.charts;
      let top10CityList = charts.cityList;
      let top10CityData = charts.cityData;
      let color = [
        "rgba(248,195,248",
        "rgba(100,255,249",
        "rgba(135,183,255",
        "rgba(248,195,248",
        "rgba(100,255,249",
      ];
      let lineY = [];
      for (let i = 0; i < charts.cityList.length; i++) {
        let x = i;
        if (x > color.length - 1) {
          x = color.length - 1;
        }
        let data = {
          name: charts.cityList[i],
          color: color[x] + ")",
          value: top10CityData[i],
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: color[x] + ", 0.3)",
                  },
                  {
                    offset: 1,
                    color: color[x] + ", 1)",
                  },
                ],
                false
              ),
              barBorderRadius: 10,
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
        };
        lineY.push(data);
      }
      this.initChart(color, top10CityList, top10CityData, lineY);
    },
    initChart(color, top10CityList, top10CityData, lineY) {
      this.myChart = echarts.init(document.getElementById("topChart111"));
      let option = {
        title: {
          show: false,
        },
        tooltip: {
          trigger: "item",
        },
        grid: {
          borderWidth: 0,
          top: "10%",
          left: "5%",
          right: "15%",
          bottom: "3%",
        },
        color: color,
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              inside: false,
            },
            data: top10CityList,
          },
          {
            type: "category",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              inside: false,
              textStyle: {
                color: "#b3ccf8",
                fontSize: "14",
                fontFamily: "PingFangSC-Regular",
              },
              formatter: function (val) {
                return `${val}个`;
              },
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data: top10CityData,
          },
        ],
        xAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            zlevel: 2,
            barWidth: "10px",
            data: lineY,
            animationDuration: 1500,
            label: {
              normal: {
                color: "#b3ccf8",
                show: true,
                position: [0, "-24px"],
                textStyle: {
                  fontSize: 16,
                },
                formatter: function (a, b) {
                  return a.name;
                },
              },
            },
          },
        ],
        animationEasing: "cubicOut",
      };
      this.myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>
