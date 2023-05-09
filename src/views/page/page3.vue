<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>碳资产开发管理及碳金融交易</span>
    </div>
    <div class="g-bd">
      <div class="m-mid">
        <img src="../../assets/img/3-0.png" alt="" >
      </div>
      <div class="m-left">
        <div class="m-1 pull-left" >
          <div class="m-top m-box">
            <div class="m-box-title-1">
              <div class="u-title">侨银碳资产企业服务</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/3-1.png" alt="">
            </div>
          </div>
          <div class="m-bottom">
            <div style="width:877px;" class="pull-left g-h100 m-box">
              <div class="m-box-title-1 ">
                <div class="u-title">企业联合专题活动</div>
              </div>
              <div class="m-box-main">
                <img src="../../assets/img/3-2.png" alt="">
              </div>
            </div>
            <div style="width:calc(100% - 877px - 30px); height: 524px; margin-left:30px;" class="pull-left m-box">
              <div class="m-box-title-1 m-long">
                <div class="u-title">碳普惠城市方案建设原则及周期</div>
              </div>
              <div class="m-box-main">
                <img src="../../assets/img/3-3.png" alt="">
              </div>
            </div>
            <div style="width:calc(100% - 877px - 30px); height: 356px; margin-left:30px; margin-top:50px" class="pull-left m-box">
              <div class="m-box-title-1 m-long">
                <div class="u-title">城市方案系统平台成果</div>
              </div>
              <div class="m-box-main">
                <img src="../../assets/img/3-4.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25">
          <div class="m-top m-box" style="height: 1000px;">
            <div class="m-box-title-1 m-long" >
              <div class="u-title">侨银碳积分——低碳生活</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/3-5.png" alt="">
            </div>
          </div>
          <div class="m-botom m-box" style="height: 467px; margin-top: 50px;">
            <div class="m-box-title-1" >
              <div class="u-title">侨银碳积分优势</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/3-6.png" alt="">
            </div>
          </div>
        </div>
       
      </div>
      <div class="m-right" style="width:3046px">
        <div class="m-3 pull-left m-box">
          <div class="m-box-title-1 m-long">
            <div class="u-title">碳普惠机制案例、账户管理、标准场景</div>
          </div>
          <div class="m-box-main">
            <img src="../../assets/img/3-7.png" alt="">
          </div>
        </div>
        <div class="m-2 pull-left m-ml-25" style="width:1030px;">
          <div class="m-top m-box" style="height:900px">
            <div class="m-box-title-1 m-long">
              <div class="u-title">全球气候变化及国际组织应对办法</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/3-8.png" alt="">
            </div>
          </div>
          <div class="m-bottom m-box" style="margin-top:50px; height:544px">
            <div class="m-box-title-1">
              <div class="u-title">世界主要经济体的承诺</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/3-9.png" alt="">
            </div>
          </div>
        </div>
        <div class="m-1 pull-left m-ml-25" style="width:1035px;">
          <div class="m-top m-box" style="height:900px">
            <div class="m-box-title-1 m-long">
              <div class="u-title">生态环境部出台相关指导文件</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/3-10.png" alt="">
            </div>
          </div>
          <div class="m-bottom m-box" style="margin-top:50px; height:544px">
            <div class="m-box-title-1">
              <div class="u-title">中国国家自主贡献</div>
            </div>
            <div class="m-box-main">
              <img src="../../assets/img/3-11.png" alt="">
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
  width: 3160px;
  height: 100%;
  // background: url(../../assets/img/img_wg.png) repeat;
}
.m-1{
  width: 2097px;
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
  bottom: -25px;
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
