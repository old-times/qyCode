<template>
  <div class="relative">
    <div id="SjzxLine" :style="{ height: height, width: width }" />
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'SjzxLine',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '280px'
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
    // this.fetchData()
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
      this.chart = echarts.init(this.$el.querySelector('#SjzxLine'))

      const option = {
        color: '#2fc6dc',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: false,
          data: ['投资金额', '中标金额'],
          bottom: 10
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['2009', '2010', '2012', '2013', '2014'],
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
              width: 1,
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
        yAxis: [{
          type: 'value',
          nameTextStyle: {
            color: '#fff',
            fontSize: 14
          },
          max: function (value) {
            return value.max;
          },
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
              width: 1,
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
            name: '投资金额',
            type: 'line',
            smooth: true,
            data: [600, 450, 1000, 480, 380, 460],
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: 'rgba(42,212,89,0.7)' // 0% 处的颜色
                  }, {
                    offset: 0.5, color: 'rgba(42,212,89,0.3)'
                  }, {
                    offset: 1, color: 'rgba(42,212,89,0.0)' // 100% 处的颜色
                  }]
                }
              }
            }//区域颜色渐变
          },
          {
            name: '中标金额',
            type: 'line',
            smooth: true,
            data: [620, 390, 600, 700, 520, 400],
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: 'rgba(3,198,254,0.7)' // 0% 处的颜色
                  }, {
                    offset: 0.5, color: 'rgba(3,198,254,0.3)'
                  }, {
                    offset: 1, color: 'rgba(3,198,254,0.0)' // 100% 处的颜色
                  }]
                }

              }
            }//区域颜色渐变
          }
        ]
      }

      this.chart.setOption(option)
    },

    fetchData() {
      let res = this.$datautils.getData("全国业务板块/投资趋势", "折线图");
      console.log(res[0].vals, "投资趋势")
      // const months = []
      // const jcls = []
      // const jccs = []
      // if (res[0].vals) {
      //   let arr=res[0].vals['类型1']
      //   const jclsData = arr[0]
      //   const jccsData = arr[1]
      //   //
      //   const sorter = (a, b) => {
      //     return a.month - b.month;
      //   };
      //   jclsData.sort(sorter);
      //   jccsData.sort(sorter);
      //   jclsData.forEach(k => {
      //     jcls.push(k.quantity)
      //   })
      //   jccsData.forEach(k => {
      //     months.push(`${k.month}月`)
      //     jccs.push(k.quantity)
      //   })
      // }
      // const obj = {
      //   xAxis: {
      //     data: months
      //   },
      //   series: [{ data: jcls }, { data: jccs }]
      // }
      // this.chart.setOption(obj)
    }
  }
}
</script>
