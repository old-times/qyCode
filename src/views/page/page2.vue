<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>共享充电桩</span>
    </div>
    <div class="g-bd">
      <div class="m-mid">
        <img src="../../assets/img/2-0.png" alt="">
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width: 1076px">
          <div class="m-top">
            <div class="m-box-title m-auto">
              <div class="u-title">平台客户两种合作方式</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/2-1.png" alt="">
            </div>
          </div>
          <div class="m-bottom">
            <div class="m-box-title m-auto">
              <div class="u-title">社会责任</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/2-2.png" alt="">
            </div>
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25">
          <div class="m-box-title m-auto" style="height:180px;">
            <div class="u-title" style="line-height: 50px;">基于大数据平台<br/>实时监测目的地的共享充电站状况</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/2-3.png" alt="">
          </div>
        </div>
        <div class="m-3 pull-left m-ml-25">
          <div class="m-box-title m-auto">
            <div class="u-title">侨银方案</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/2-4.png" alt="">
          </div>
        </div>
      </div>
      <div class="m-right" style="width:3046px">
        <div class="m-3 pull-left">
          <div class="m-box-title m-auto">
            <div class="u-title">行业概览</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/2-5.png" alt="">
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width:960px;">
          <div class="m-box-title m-auto">
            <div class="u-title">侨银生活服务充电解决方案</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/2-6.png" alt="">
          </div>
        </div>
        <div class="m-1 pull-left m-ml-25" style="width:1123px;">
          <div class="m-box-title m-auto">
            <div class="u-title">侨银生活服务充电配套设施&服务场景</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/2-7.png" alt="">
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
  width: 3160px;
  height: 100%;
  // background: url(../../assets/img/img_wg.png) repeat;
}
.m-1{
  width: 1076px;
  height: 100%;
  .m-top{
    width: 100%;
    height: 550px;
  }
  .m-bottom{
    width: 100%;
    height: calc(100% - 30px - 550px);
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
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}
.m-ml-25{
  margin-left: 25px;
}
</style>
