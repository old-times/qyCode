<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>现代化城市全域综合治理</span>
    </div>
    <div class="g-bd">
      <div class="m-mid">
        <img src="../../assets/img/12-0.png" alt="">
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width: 1054x">
          <div class="m-box-title u-left">
            <div class="u-title">城市全域综合治理服务案例</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/12-1.png" alt="">
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width: 930px;">
          <div class="m-box-title u-left">
            <div class="u-title">智慧平台</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/12-2.png" alt="">
          </div>
        </div>
        <div class="m-3 pull-left m-ml-25 " style="width: 990px;">
          <div class="m-box-title u-left">
            <div class="u-title">城市六大核心功能模块</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/12-3.png" alt="">
          </div>
        </div>
      </div>
      <div class="m-right" >
        <div class="m-3 pull-left" style="width:1170px;">
          <div class="m-box-title u-left">
            <div class="u-title">城市优势</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/12-4.png" alt="">
          </div>
        </div>
        
        <div class="m-1 pull-left" style="width:1500px; margin-left: 100px;">
          <div class="m-box-title u-left">
            <div class="u-title">背景形式</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/12-5.png" alt="">
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
  width: 3030px;
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
