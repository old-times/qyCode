<template>
  <div class="relative">
    <div id="caseBar" :style="{ height: height, width: width }" />
  </div>
</template>
  
<script>
import * as echarts from 'echarts'
export default {
  name: 'ZzzqkBar',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      chart: null,
      queryParam: {
        sljsdw: undefined,
      },
      nfsjList: []
    }
  },
  created() {

  },
  mounted() {
    this.initChart()
    this.fetchData()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el.querySelector('#caseBar'))

      const option = {
        color: '#2fc6dc',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: false,
          data: ['案件数'],
          bottom: 10
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '4%',
          containLabel: true
        },
        yAxis: [{
          type: 'category',
          // boundaryGap: false,
          data: ['垂直式(个)', '日处理量(吨/个)', '水平分体式(个)', '日处理量(吨/个)', '水平式移动压缩箱(个)'],
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 21
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: 'rgba(25, 139, 255, 0.3)'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(25, 139, 255, 0.3)'
            }
          }
        }],
        xAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 21
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: 'rgba(25, 139, 255, 0.3)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(25, 139, 255, 0.3)'
            }
          }
        }],
        series: [
          {
            name: '案件数',
            type: 'bar',
            barWidth: 30,
            data: [64.2, 79.5, 130.1, 130.1, 130.1],
            showBackground: true,

            backgroundStyle: {
              color: 'rgba(110, 193, 244, 0.2)',
            },
          }
        ]
      }

      this.chart.setOption(option)
    },
    fetchData() {
      let arr = this.$datautils.getData("城市业务板块/中转站情况", "列表");
      if (arr[0].vals && arr[0].vals.length > 0) {
        this.zzzqkData = arr[0].vals
      }
      // console.log(arr, '中转站情况-lb')
      const titles = []
        const numData = []
        arr[0].vals.forEach(k => {
          titles.push(k.item)
          numData.push(k.num)
        })

        const obj = {
          yAxis: {
            data: titles
          },
          series: [{ data: numData }]
        }
        this.chart.setOption(obj)
    }
  }
}
</script>
  