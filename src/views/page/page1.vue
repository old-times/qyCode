<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>公厕革新</span>
    </div>
    <div class="g-bd m-wg">
      <div class="m-mid">
        <img src="../../assets/img/1-0.png" alt="">
      </div>
      <div class="m-left g-h100">
        <div class="m-1 pull-left">
          <div class="m-top">
           <div class="m-box-title u-left">
              <div class="u-title">产品参数及解决方案</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/1-1.png" alt="">
            </div>
          </div>
          <div class="m-bottom">
           <div class="m-box-title u-left">
              <div class="u-title">应用场景</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/1-2.png" alt="">
            </div>
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25">
          <div class="m-box-title u-left">
            <div class="u-title">自消化式化粪池处理器</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/1-3.png" alt="">
          </div>
        </div>
      </div>
      <div class="m-right g-h100">
        <div class="m-2 pull-left">
          <div class="m-box-title u-left">
            <div class="u-title">一体化无废智慧公厕</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/1-4.png" alt="">
          </div>
        </div>
        <div class="m-1 pull-right m-ml-25">
          <div class="m-top">
            <div class="m-box-title u-left">
              <div class="u-title">新型智慧厕所解决方案</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/1-5.png" alt="">
            </div>
          </div>
          <div class="m-bottom">
            <div class="m-box-title u-left">
              <div class="u-title">应用场景</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/1-6.png" alt="">
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

.m-left{
  float: left;
}
.m-1{
  width: 2130px;
  height: 100%;
  .m-top{
    width: 100%;
    height: 815px;
  }
  .m-bottom{
    width: 100%;
    height: calc(100% - 30px - 815px);
    margin-top: 30px;
  }
}
.m-2{
  width: 918px;
  height: 100%;
  padding: 0 40px;
  background: rgba(9,36,64,50,0.8);
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
