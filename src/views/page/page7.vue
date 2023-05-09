<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>循环经济</span>
    </div>
    <div class="g-bd">
      <div class="m-mid">
        <img src="../../assets/img/7-0.png" alt="">
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width: 1060x">
          <div class="m-top" style="height: 805px;">
            <div class="m-box-title u-left">
              <div class="u-title">标杆项目</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/7-1.png" alt="">
            </div>
          </div>
          <div class="m-bottom" style="height: 680px;">
            <div class="m-box-title u-left">
              <div class="u-title">未来规划</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/7-2.png" alt="">
            </div>
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width: 1060px;">
          <div class="m-box-title u-left">
            <div class="u-title">业务效益</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/7-3.png" alt="">
          </div>
        </div>
        <div class="m-3 pull-left m-ml-25 m-box" style="width: 856px;">
          <div class="m-box-title u-left">
            <div class="u-title">资源再生流程</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/7-4.png" alt="">
          </div>
        </div>
      </div>
      <div class="m-right" >
        <div class="m-3 pull-left m-box" style="width:802px;">
          <div class="m-box-title u-left">
            <div class="u-title">业务规划</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/7-5.png" alt="">
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width:1046px;margin-left: 35px;">
          <div class="m-box-title u-left">
            <div class="u-title">国家战略</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/7-6.png" alt="">
          </div>
        </div>
        <div class="m-1 pull-left m-ml-25" style="width:1065px; margin-left: 35px;">
          <div class="m-top" style="height: 595px;">
            <div class="m-box-title u-left">
              <div class="u-title">行业现状</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/7-7.png" alt="">
            </div>
          </div>
          <div class="m-bottom" style="height: 875px;">
            <div class="m-box-title u-left">
              <div class="u-title">企业战略</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/7-8.png" alt="">
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "page1",
  components: {},

  props: [""],

  data() {
    return {};
  },

  created() {},

  methods: {}
};
</script>
<style lang="less" scoped>
.g-layout{
  width: 100%;
  height: 100%;
  background: #00040f url(../../assets/img/1-wg.png)  no-repeat;
}

.m-left,.m-right{
  float: left;
  height: 100%;
  // background: url(../../assets/img/img_wg.png) repeat;
}
.m-1{
  width: 1076px;
  height: 100%;
  .m-top{
    width: 100%;
    height: 840px;
  }
  .m-bottom{
    width: 100%;
    height: calc(100% - 30px - 840px);
    margin-top: 30px;
  }
}
.m-2{
  width: 1086px;
  height: 100%;
}
.m-3{
  width: 896px;
  height: 100%;
}
.m-right{
  float: right;
}
.m-mid{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}
.m-ml-25{
  margin-left: 25px;
}
</style>
