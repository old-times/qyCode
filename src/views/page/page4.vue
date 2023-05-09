<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>共享电单车</span>
    </div>
    <div class="g-bd ">
      <div class="m-mid">
        <img src="../../assets/img/4-0.png" alt="" >
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" style="width:1038px;">
          <div class="m-box-title-5">
            <div class="u-icon u-icon-4 m-auto">
              <img src="../../assets/img/4-icon-1.png" alt="">
            </div>
            <div class="u-title">
              <span>侨银共享电动自行车能为社会做什么</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/4-1.png" alt="" >
          </div>
        </div>
        <div class="m-2 pull-left" style="width: 1016px; margin-left: 50px;">
          <div class="m-box-title-5">
            <div class="u-icon u-icon-4 m-auto">
              <img src="../../assets/img/4-icon-2.png" alt="">
            </div>
            <div class="u-title">
              <span>电动自行车减碳效应明显</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/4-2.png" alt="" >
          </div>
        </div>
        <div class="m-2 pull-left" style="width: 775px;margin-left: 50px;">
          <div class="m-box-title-5">
            <div class="u-icon u-icon-4 m-auto">
              <img src="../../assets/img/4-icon-3.png" alt="">
            </div>
            <div class="u-title">
              <span>共享电动自行车助力碳中和</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/4-3.png" alt="" >
          </div>
        </div>

      </div>
      <div class="m-right" >
        <div class="m-2 pull-left" style="width: 775px;">
          <div class="m-box-title-5">
            <div class="u-icon u-icon-4 m-auto">
              <img src="../../assets/img/4-icon-4.png" alt="">
            </div>
            <div class="u-title">
              <span>现阶段技术及解决方案</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/4-4.png" alt="" >
          </div>
        </div>
        <div class="m-2 pull-left" style="width: 775px; margin-left: 50px;">
          <div class="m-box-title-5">
            <div class="u-icon u-icon-4 m-auto">
              <img src="../../assets/img/4-icon-5.png" alt="">
            </div>
            <div class="u-title">
              <span>宏观&市场</span>
            </div>
          </div>
          <div class="m-box-main-5">
            <img src="../../assets/img/4-5.png" alt="" >
          </div>
        </div>
        <div class="m-1 pull-left" style="width:1327px; margin-left: 50px;">
          <div class="m-top" style="height:708px">
            <div class="m-box-title-5">
              <div class="u-icon u-icon-4 m-auto">
                <img src="../../assets/img/4-icon-6.png" alt="">
              </div>
              <div class="u-title">
                <span>共享电动自行车符合新国标规范</span>
              </div>
            </div>
            <div class="m-box-main-5">
              <img src="../../assets/img/4-6.png" alt="" >
            </div>
          </div>
<!--          <div class="m-bottom" style="margin-top:10px; height:785px">-->
<!--            <div class="m-box-title-5">-->
<!--              <div class="u-icon u-icon-4 m-auto">-->
<!--                <img src="../../assets/img/4-icon-4.png" alt="">-->
<!--              </div>-->
<!--              <div class="u-title">-->
<!--                <span>居民出行方式</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="m-box-main-5" style="margin-top:0;">-->
<!--              <img src="../../assets/img/4-7.png" alt="" >-->
<!--            </div>-->
<!--          </div>-->
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
.m-box-main-5 {
  height: 1245px;
  img {
    height: 100%;
  }
}
</style>
