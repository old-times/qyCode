<template>
  <div class="relative">
    <div id="caseRadar" :style="{ height: height, width: width }" />
  </div>
</template>
  
<script>
import * as echarts from 'echarts'
export default {
  name: 'YghxRadar',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
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
      this.chart = echarts.init(this.$el.querySelector('#caseRadar'))
      let dataMax = [
        {
          name: '工作负荷指数',
          max: 100
        },
        {
          name: '作业工具折损',
          max: 100
        },
        {
          name: '业主扣款溯源',
          max: 100
        },
        {
          name: '卫生质量事件',
          max: 100
        },
        {
          name: '健康状态评估',
          max: 100
        },
        {
          name: '作业安全分析',
          max: 100
        },
      ]
      const option = {

        radar: {
          indicator: dataMax,  //配置各个维度的最大值
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 21
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(25, 139, 255, 0.3)',
            },
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: 'rgba(25, 139, 255, 0.15)', // 图表背景的颜色
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: 'rgba(255, 255, 255, 0.3)', // 设置网格的颜色
            },
          },
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                name: '张三',
                value: [80, 90, 80, 82, 90, 60]
              }
            ],

            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#1ed2ec',
                },
              }
            },
            areaStyle: {
              normal: {
                color: '#1ed2ec'
              }
            }//区域颜色渐变
          }
        ]
      }

      this.chart.setOption(option)
    },
    fetchData() {
      let res = this.$datautils.getData("城市业务板块/员工画像", "多边形");
      // res.forEach(item => {
      //   this.sjzrs = item.val || 0
      // });
      console.log(res, '员工画像')
      // const obj = {
      //   xAxis: {
      //     data: months
      //   },
      //   series: [{ data: ajs }, { data: xfs }]
      // }
      // this.chart.setOption(obj)
    }
  }
}
</script>
  