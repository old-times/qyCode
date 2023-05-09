<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>物业管理服务</span>
    </div>
    <div class="g-bd">
      <div class="m-mid">
        <img src="../../assets/img/8-0.png" alt="">
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width: 1067x">
          <div class="m-top" style="height: 1160px;">
            <div class="m-box-title u-left">
              <div class="u-title">服务能力</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-1.png" alt="">
            </div>
          </div>
          <div class="m-bottom" style="height: 325px;">
            <div class="m-box-title u-left">
              <div class="u-title">展望未来</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-2.png" alt="">
            </div>
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width: 1020px;">
          <div class="m-top" style="height: 890px;">
            <div class="m-box-title u-left">
              <div class="u-title">居住物业</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-3.png" alt="">
            </div>
          </div>
          <div class="m-bottom" style="height: 625px;">
            <div class="m-box-title u-left">
              <div class="u-title">园区物业</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-4.png" alt="">
            </div>
          </div>
        </div>
        <div class="m-3 pull-left m-ml-25 m-box" style="width: 835px;">
          <div class="m-top" style="height: 690px;">
            <div class="m-box-title u-left">
              <div class="u-title">公共物业</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-5.png" alt="">
            </div>
          </div>
          <div class="m-bottom" style="height: 830px;">
            <div class="m-box-title u-left">
              <div class="u-title">商写物业</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-6.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="m-right" >
        <div class="m-3 pull-left m-box" style="width:838px;">
          <div class="m-box-title u-left">
            <div class="u-title">服务内容</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/8-7.png" alt="">
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width:1020px;margin-left: 35px;">
          <div class="m-top" style="height: 770px;">
            <div class="m-box-title u-left">
              <div class="u-title">服务标准</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-8.png" alt="">
            </div>
          </div>
          <div class="m-bottom" style="height: 750px;">
            <div class="m-box-title u-left">
              <div class="u-title">业务板块</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-9.png" alt="">
            </div>
          </div>
        </div>
        <div class="m-1 pull-left m-ml-25" style="width:1030px; margin-left: 35px;">
          <div class="m-box-title u-left">
              <div class="u-title">服务业态</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/8-10.png" alt="">
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
