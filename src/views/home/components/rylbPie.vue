<template>
  <div class="relative">
    <div id="casePie" :style="{ height: height, width: width }" />
  </div>
</template>
  
<script>
import * as echarts from 'echarts'
import api from '@/api'
export default {
  name: 'RylbPie',
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
      this.chart = echarts.init(this.$el.querySelector('#casePie'))

      const option = {

        color: ['#2a49d0', '#536bde', '#8092d7', '#bac7f3', '#63c8dd', '#88d8e4', '#99e6d7'],

        tooltip: {
          show: true,
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: {
          name: '案件类型申请占比图',
          type: 'pie',
          center: ['65%', '55%'],
          roseType: 'aa',
          radius: ['35%', '68%'],
          smooth: true,
          labelEmphasis: true,
          data: [
            { name: '总经理', value: 10 }, { name: '副经理', value: 10 }, { name: '张三', value: 10 }, { name: '李四', value: 10 }, { name: '王五', value: 10 }, { name: '总经理', value: 10 }
          ],
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 21
              },
              formatter: "{b} : {c} "
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
        }
      }

      this.chart.setOption(option)
    },
    fetchData() {
      api.queryCasePetitionListForLine(this.queryParam).then(res => {
        const months = []
        const ajs = []
        const xfs = []
        res.forEach(k => {
          months.push(`${k.month}月`)
          ajs.push(k.ajs)
          xfs.push(k.xfs)
        })

        const obj = {
          xAxis: {
            data: months
          },
          series: [{ data: ajs }, { data: xfs }]
        }
        this.chart.setOption(obj)
      })
    }
  }
}
</script>
  