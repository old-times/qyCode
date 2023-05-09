<template>
  <div class="relative">
    <div id="caseLine" :style="{ height: height, width: width }" />
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
      default: '300px'
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
      this.chart = echarts.init(this.$el.querySelector('#caseLine'))

      const option = {
        color: '#2fc6dc',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: false,
          data: ['垃圾进厂量', '进厂次数'],
          bottom: 10
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月'],
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
          type: 'log',
          logBase: 2,
          //			type : 'value',
          scale: true,
          name: '(T)',
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
        }, {
          type: 'log',
          logBase: 2,
          //			type : 'value',
          scale: true,
          name: '(次)',
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
            name: '垃圾进厂量',
            type: 'line',
            smooth: true,
            data: [600, 1300, 450, 600, 480],
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
            name: '进厂次数',
            type: 'line',
            smooth: true,
            data: [410, 390, 650, 450, 400],
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
      let res = this.$datautils.getData("城市业务板块/数据中心", "折线图");
      console.log(res[0].vals['类型1'], "数据中心折线图")
      const months = []
      const jcls = []
      const jccs = []
      if (res[0].vals) {
        let arr=res[0].vals['类型1']
        const jclsData = arr[0]
        const jccsData = arr[1]
        // 
        const sorter = (a, b) => {
          return a.month - b.month;
        };
        jclsData.sort(sorter);
        jccsData.sort(sorter);
        jclsData.forEach(k => {
          jcls.push(k.quantity)
        })
        jccsData.forEach(k => {
          months.push(`${k.month}月`)
          jccs.push(k.quantity)
        })
      }
      const obj = {
        xAxis: {
          data: months
        },
        series: [{ data: jcls }, { data: jccs }]
      }
      this.chart.setOption(obj)
    }
  }
}
</script>
  