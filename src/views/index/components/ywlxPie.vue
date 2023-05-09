<template>
  <div class="relative">
    <div id="ywlxPie" :style="{ height: height, width: width }" />
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ywlxPie',
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
      this.chart = echarts.init(this.$el.querySelector('#ywlxPie'))

      const option = {

        color: ['#10e8aa', '#ffdb15', '#f6b64a', '#23979b', '#2447f7', '#ef7c30', '#24dcf7', '#cd30ef'],

        tooltip: {
          show: true,
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          bottom: "0",
          left: "center",
          textStyle: {
            color: '#fff'
          }
        },
        calculable: true,
        series: {
          name: '业务类型',
          type: 'pie',
          center: ['50%', '50%'],
          radius: ["60%", "70%"],
          labelEmphasis: true,
          data: [{ name: '道路清扫保洁', value: 60 }, { name: '绿化管养', value: 10 },{ name: '餐厨垃圾收运', value:20 },{ name: '水面打捞保洁', value:30 }],
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 16
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
    // 业务类型

    fetchData() {
      let res = this.$datautils.getData("全国业务板块/业务类型", "饼状图");
      let arr = []
      if (res[0].vals && res[0].vals.length > 0) {
        res[0].vals.forEach(item => {
          arr.push(
            { name: item.type, value: item.quantity || 0 }
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
