<template>
  <div class="relative">
    <div id="LjflPie1" :style="{ height: height, width: width }" />
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
      this.chart = echarts.init(this.$el.querySelector('#LjflPie1'))

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
          center: ['50%', '65%'],
          roseType: 'aa',
          radius: '60%',
          data: [
            { name: '道路', value: 60 }, { name: '湖', value: 10 }, { name: '绿化', value: 10 }
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
      let res = this.$datautils.getData("全国业务板块/服务面积", "饼状图");
      console.log(res,'服务面积')
      let arr = []
      if (res[0].vals && res[0].vals.length > 0) {
        res[0].vals.forEach(item => {
          arr.push(
            { name: item.type, value: item.quantity }
          )
        });
      }
      const obj = {
        series: [{ data: arr }]
      }
      // this.chart.setOption(obj)
    }
  }
}
</script>
