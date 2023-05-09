<template>
  <div class="relative">
    <div id="casePie" :style="{ height: height, width: width }" />
  </div>
</template>
  
<script>
import * as echarts from 'echarts'
export default {
  name: 'LjflPie1',
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

        color: [ '#004bbb','#027e99', '#8092d7', '#bac7f3', '#63c8dd', '#88d8e4', '#99e6d7'],

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
            { name: '城市服务户数', value: 60 }, { name: '乡村服务户数', value: 10 }
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
              show: true,
              length: 50,
              lineStyle: {
                  width: 1,
                  type: 'solid'
              }
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
  