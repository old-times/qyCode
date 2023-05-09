<template>
  <div class="relative">
    <div id="casePie" :style="{ height: height, width: width }" />
  </div>
</template>
  
<script>
import * as echarts from 'echarts'
export default {
  name: 'LjflPie2',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
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

        color: [ '#09736c','#659c34', '#8092d7', '#bac7f3', '#63c8dd', '#88d8e4', '#99e6d7'],

        tooltip: {
          show: true,
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: {
          name: '服务户数',
          type: 'pie',
          center: ['50%', '60%'],
          roseType: 'aa',
          radius: '50%',
          data: [
            { name: '城市分类亭数量', value: 60 }, { name: '乡村分类亭数量', value: 50 }
          ],
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 18
              },
              formatter: "{b} \n \n  {c} "
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: true
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
  