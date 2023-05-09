<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>特色经营</span>
    </div>
    <div class="g-bd">
      <div class="m-mid">
        <img src="../../assets/img/6-0.png" alt="">
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width: 1022px">
          <div class="m-box-title u-left">
            <div class="u-title">城市软装案例</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/6-1.png" alt="">
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width: 1088px;">
          <div class="m-box-title u-left">
            <div class="u-title">侨银方案</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/6-2.png" alt="">
          </div>
        </div>
        <div class="m-3 pull-left m-ml-25" style="width: 838px;">
          <div class="m-box-title u-left">
            <div class="u-title">城市软装—夜市经济</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/6-3.png" alt="">
          </div>
        </div>
      </div>
      <div class="m-right" >
        <div class="m-3 pull-left" style="width:816px;">
          <div class="m-box-title u-left">
            <div class="u-title">农贸市场改造-智慧化系统</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/6-4.png" alt="">
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width:1077px;">
          <div class="m-box-title u-left">
            <div class="u-title">业务模式</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/6-5.png" alt="">
          </div>
        </div>
        <div class="m-1 pull-left m-ml-25" style="width:1058px;">
          <div class="m-top">
            <div class="m-box-title u-left">
              <div class="u-title">业务延展</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/6-6.png" alt="">
            </div>
          </div>
          <div class="m-bottom">
            <div class="m-box-title u-left">
              <div class="u-title">案例效果</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/6-7.png" alt="">
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
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}
.m-ml-25{
  margin-left: 25px;
}
</style>
