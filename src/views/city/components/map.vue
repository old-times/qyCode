<template>
  <div class="m-map">
    <div id="container" :style="{ height: height, width: width }" />
  </div>
</template>
  
<script>
export default {
  name: 'Map',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '1525px'
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
      this.map = new AMap.Map('container', {
        viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
        // animateEnable: false, //是否允许平移动画
        zoomEnable: false, //是否允许缩放
        dragEnable: false, //是否允许拖拽
        zoom: 12, // 初始化地图层级
        mapStyle:'amap://styles/darkblue',
        center: [113.08, 22.58]// 初始化地图中心点
      })
    },

  }

}
</script>
<style lang="less" scoped>
.m-map {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
  