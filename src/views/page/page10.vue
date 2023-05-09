<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>综合能源管理</span>
    </div>
    <div class="g-bd ">
      <div class="m-mid">
        <img src="../../assets/img/10-0.png" alt="" >
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width:1080px;margin-left: 100px;">
          <div class="m-box-title-5">
            <div class="u-icon u-icon-4 m-auto">
              <img src="../../assets/img/4-icon-4.png" alt="">
            </div>
            <div class="u-title">
              <span>储能解决方案</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/10-1.png" alt="" >
          </div>
        </div>
        <div class="m-2 pull-left" style="width: 1693px; margin-left: 80px;">
          <div class="m-box-title-5">
            <div class="u-icon u-icon-4 m-auto">
              <img src="../../assets/img/4-icon-5.png" alt="">
            </div>
            <div class="u-title">
              <span>侨银储能产品</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/10-2.png" alt="" >
          </div>
        </div>
       
      </div>
      <div class="m-right" >
        <div class="m-1 pull-left" style="width: 1721px;">
          <div class="m-top" style="height:714px;">
              <div class="m-box-title-5" style="display: flex; justify-content: center; height: 140px;">
                <div class="u-icon u-icon-4">
                  <img src="../../assets/img/4-icon-3.png" alt="">
                </div>
                <div class="u-title" style="display: block; width: auto; margin-left: 120px;">
                  <span>储能发展机遇</span>
                </div>
              </div>
              <div class="m-box-main-5">
                <img src="../../assets/img/10-3.png" alt="" >
              </div>
          </div>
          <div class="m-bottom" style="height:690px;">
              <div class="m-box-title-5" style="display: flex; justify-content: center; height: 140px;">
                <div class="u-icon u-icon-4">
                  <img src="../../assets/img/4-icon-6.png" alt="">
                </div>
                <div class="u-title" style="display: block; width: auto; margin-left: 120px;">
                  <span>储能发展机遇</span>
                </div>
              </div>
              <div class="m-box-main-5">
                <img src="../../assets/img/10-4.png" alt="" >
              </div>
          </div>
        </div>
        <div class="m-1 pull-left" style="width: 1102px; margin-left: 50px;">
          <div class="m-top" style="height:714px;">
              <div class="m-box-title-5" style="display: flex; justify-content: center; height: 140px;">
                <div class="u-icon u-icon-4">
                  <img src="../../assets/img/4-icon-4.png" alt="">
                </div>
                <div class="u-title" style="display: block; width: auto; margin-left: 120px;">
                  <span>业务内容</span>
                </div>
              </div>
              <div class="m-box-main-5">
                <img src="../../assets/img/10-5.png" alt="" >
              </div>
          </div>
          <div class="m-bottom" style="height:690px;">
              <div class="m-box-title-5" style="display: flex; justify-content: center; height: 140px;">
                <div class="u-icon u-icon-4">
                  <img src="../../assets/img/4-icon-5.png" width="160" alt="">
                </div>
                <div class="u-title" style="display: block; width: auto; margin-left: 120px;">
                  <span>平台亮点</span>
                </div>
              </div>
              <div class="m-box-main-5">
                <img src="../../assets/img/10-6.png" alt="" >
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
  width: 3000px;
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
.m-2{
  width: 916px;
  height: 100%;
}
.m-3{
  width: 820px;
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
.m-box{
  background: rgba(9,36,64,0.5);
}
</style>
