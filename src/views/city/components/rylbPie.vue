<template>
  <div class="relative">
    <div id="casePie" :style="{ height: height, width: width }" />
  </div>
</template>
  
<script>
import * as echarts from 'echarts'
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
          name: '人员职位占比图',
          type: 'pie',
          center: ['50%', '50%'],
          roseType: 'aa',
          radius: ['35%', '68%'],
          smooth: true,
          labelEmphasis: true,
          data: [],
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 21
              },
              formatter: "{b} : {c}  "
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
    // 人员列表

    fetchData() {
      let res = this.$datautils.getData("城市业务板块/人员列表", "饼状图");
      let arr = []
      if (res[0].vals && res[0].vals.length > 0) {
        res[0].vals.forEach(item => {
          arr.push(
            { name: item.post, value: item.peopleNum }
          )
        });
      }
      const obj = {
        series: [{ data: arr }]
      }
      this.chart.setOption(obj)
    }
  }
}
</script>
  