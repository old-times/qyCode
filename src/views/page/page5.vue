<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>全域自动化</span>
    </div>
    <div class="g-bd ">
      <div class="m-mid">
        <img src="../../assets/img/5-0.png" alt="" >
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width:707px;">
          <div class="m-box-title-5">
            <div class="u-icon m-auto">
              <img src="../../assets/img/5-icon-1.png" alt="">
            </div>
            <div class="u-title">
              <span>项目内容</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/5-1.png" alt="" >
          </div>
        </div>
        <div class="m-1 pull-left" style="width:619px; margin-left: 25px;">
          <div class="m-box-title-5">
            <div class="u-icon m-auto">
              <img src="../../assets/img/5-icon-2.png" alt="">
            </div>
            <div class="u-title">
              <span>项目运作模式</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/5-2.png" alt="" >
          </div>
        </div>
        <div class="m-1 pull-left" style="width:707px;  margin-left: 25px;">
          <div class="m-box-title-5">
            <div class="u-icon m-auto">
              <img src="../../assets/img/5-icon-3.png" alt="">
            </div>
            <div class="u-title">
              <span>绿色金融</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/5-3.png" alt="" >
          </div>
        </div>
        <div class="m-1 pull-left" style="width:619px; margin-left: 25px;">
          <div class="m-box-title-5">
            <div class="u-icon m-auto">
              <img src="../../assets/img/5-icon-2.png" alt="">
            </div>
            <div class="u-title">
              <span>侨银解决方案构想</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/5-4.png" alt="" >
          </div>
        </div>
       
      </div>
      <div class="m-right" >
        <div class="m-1 pull-left" style="width:619px;">
          <div class="m-box-title-5">
            <div class="u-icon m-auto">
              <img src="../../assets/img/5-icon-4.png" alt="">
            </div>
            <div class="u-title">
              <span>换电元年</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/5-5.png" alt="" >
          </div>
        </div>
        <div class="m-1 pull-left" style="width:863px; margin-left: 67px;">
          <div class="m-box-title-5">
            <div class="u-icon m-auto">
              <img src="../../assets/img/5-icon-4.png" alt="">
            </div>
            <div class="u-title">
              <span>国家政策×换电元年</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/5-6.png" alt="" >
          </div>
        </div>
        <div class="m-1 pull-left" style="width:1193px; margin-left: 67px;">
          <div class="m-box-title-5">
            <div class="u-icon m-auto">
              <img src="../../assets/img/5-icon-5.png" alt="">
            </div>
            <div class="u-title">
              <span>项目愿景与规划</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/5-7.png" alt="" >
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
  // width: 3000px;
  height: 100%;
}
.m-1{
  width: 1038px;
  height: 100%;
  .m-top{
    width: 100%;
    height: 527px;
  }
  .m-bottom{
    width: 100%;
    height: 930px;
    margin-top: 60px;
  }
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
.m-box{
  background: rgba(9,36,64,0.5);
}
</style>
