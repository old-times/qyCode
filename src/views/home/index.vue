<template>
  <div class="g-layout">
    <div class="g-hd">
      <span>城市运营监管</span>
    </div>
    <div class="g-bd m-wg">
      <div class="m-mid">
        <Map></Map>
      </div>
      <div class="m-left g-h100">
        <div class="m-1">
          <div class="m-box-title u-left">
            <div class="u-title">基础信息</div>
          </div>
          <div class="m-box-main">
            <div class="m-jc-box color1">
              <div class="u-name">项目数量</div>
              <div class="u-num">23499</div>
            </div>
            <div class="m-jc-box color2">
              <div class="u-name">合同金额</div>
              <div class="u-num">23499</div>
            </div>
            <div class="m-jc-box color3">
              <div class="u-name">投资总金额</div>
              <div class="u-num">23499</div>
            </div>
            <div class="m-jc-box color3">
              <div class="u-name">在运营项目</div>
              <div class="u-num">23499</div>
            </div>
            <div class="m-jc-box color3">
              <div class="u-name">投建项目</div>
              <div class="u-num">23499</div>
            </div>
          </div>
        </div>
        <div class="m-2">
          <div class="m-2-1">
            <div class="m-box-title u-left" style="margin-top: 8px;;">
              <div class="u-title">服务概览</div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <ul>
                <li class="m-line-box">
                  <span class="u-title">服务区域</span>
                  <span class="u-txt">服务区域服务区域服务区域服务区域</span>
                </li>
                <li class="m-line-box">
                  <span class="u-title">服务区域性质</span>
                  <span class="u-txt">城区/乡镇/农村</span>
                </li>
                <li class="m-line-box">
                  <span class="u-title">是否智慧环卫服务</span>
                  <span class="u-txt">是/否</span>
                </li>
                <li class="m-line-box">
                  <span class="u-title">是否环卫一体化</span>
                  <span class="u-txt">是/否</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="m-2-1">
            <div class="m-box-title-5" style="height: 102px;">
              <div class="u-title" style="margin-top: 0;">
                <span>服务项目类型</span>
              </div>
            </div>
            <div class="m-box-main-5" style="margin-top: 0;">
              <ul>
                <li class="m-line-box">
                  <span class="u-title">道路清扫保洁</span>
                </li>
                <li class="m-line-box">
                  <span class="u-title">水域保洁</span>
                </li>
                <li class="m-line-box">
                  <span class="u-title">垃圾收运</span>
                </li>
                <li class="m-line-box">
                  <span class="u-title">公厕</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="m-3" style="margin-top:30px">
          <div class="m-2-1">
            <div class="m-box-title u-left" style="margin-top: 8px;;">
              <div class="u-title">人员列表</div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <div class="m-rylb-1">
                <div class="u-name">实际总人数</div>
                <div class="u-num">
                  <span class="u-num-1">15000</span>
                  <span class="u-num-2">人</span>
                </div>
              </div>
              <div class="m-rylb-2">
                <RylbPie></RylbPie>
              </div>
            </div>
          </div>
          <div class="m-2-1">
            <div class="m-box-title-5" style="height: 102px;">
              <div class="u-title" style="margin-top: 0;">
                <span>员工画像</span>
              </div>
            </div>
            <div class="m-box-main-5" style="margin-top: 0;">
              <YghxRadar></YghxRadar>
            </div>
          </div>
        </div>
        <div class="m-4" style="margin-top: 30px;;">
          <div class="m-box-title u-left">
            <div class="u-title">项目风采</div>
          </div>
          <div class="m-box-main" style="margin-top:28px;">
            <div class="u-img">ddd</div>
            <div class="u-img">ddd</div>
            <div class="u-img">ddd</div>
            <div class="u-img">ddd</div>
          </div>
        </div>

      </div>
      <div class="m-right g-h100">
        <div class="g-h100 m-2-1">
          <!-- 1 -->
          <div class="g-w100" style="height:545px;">
            <div class="m-box-title u-left">
              <div class="u-title">数据中心</div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <div class="m-sjzx-1">
                <div class="g-h100 m-2-1">
                  <div class="u-icon">
                    <img src="../../assets/img/11-sjzx-1.png" alt="">
                  </div>
                  <div class="u-main">
                    <div class="u-num">
                      <span class="num-1">1517.30 </span>
                      <span>T</span>
                    </div>
                    <div class="u-name">本月垃圾进厂量</div>
                  </div>
                </div>
                <div class="g-h100 m-2-1 pull-right">
                  <div class="u-icon">
                    <img src="../../assets/img/11-sjzx-2.png" alt="">
                  </div>
                  <div class="u-main">
                    <div class="u-num" style="color:#1787ea">
                      <span class="num-1">999 </span>
                      <span>次</span>
                    </div>
                    <div class="u-name">进场次数</div>
                  </div>
                </div>
              </div>
              <div class="m-sjzx-2">
                <SjzxLine></SjzxLine>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="g-w100" style="height:400px; margin-top: 30px;">
            <div class="m-box-title u-left">
              <div class="u-title">公厕情况</div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <div class="m-gcqk-1">
                <div class="u-list">
                  <div class="u-icon">
                    <img src="../../assets/img/11-gcqk-1.png" alt="">
                  </div>
                  <div class="u-main">
                    <div class="u-num">123</div>
                    <div class="u-name">水厕（环保）/座</div>
                  </div>
                </div>
                <div class="u-list">
                  <div class="u-icon">
                    <img src="../../assets/img/11-gcqk-2.png" alt="">
                  </div>
                  <div class="u-main">
                    <div class="u-num">123</div>
                    <div class="u-name">旱厕/座</div>
                  </div>
                </div>
                <div class="u-list">
                  <div class="u-icon">
                    <img src="../../assets/img/11-gcqk-3.png" alt="">
                  </div>
                  <div class="u-main">
                    <div class="u-num">123</div>
                    <div class="u-name">移动公厕（环保）/座</div>
                  </div>
                </div>
              </div>
              <div class="m-gcqk-2">
                <ul>
                  <li class="u-list">
                    <div class="u-type">水厕(环保)</div>
                    <div class="u-address">江门市某某大道某某大道某某大道某某大道</div>
                  </li>
                  <li class="u-list">
                    <div class="u-type">水厕(环保)</div>
                    <div class="u-address">江门市某某大道某某大道某某大道某某大道</div>
                  </li>
                  <li class="u-list">
                    <div class="u-type">旱厕</div>
                    <div class="u-address">江门市某某大道某某大道某某大道某某大道</div>
                  </li>
                  <li class="u-list">
                    <div class="u-type">水厕(环保)</div>
                    <div class="u-address">江门市某某大道某某大道某某大道某某大道</div>
                  </li>
                  <li class="u-list">
                    <div class="u-type">移动公厕(环保)</div>
                    <div class="u-address">江门市某某大道某某大道某某大道某某大道</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="g-w100" style="height:405px; margin-top: 30px;">
            <div class="m-box-title u-left">
              <div class="u-title">车辆列表</div>
              <div class="u-clsl"><span>车辆数</span><span style="font-size: 50px;">123</span></div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <dl class="m-tablebox">
                <dt class="m-tablebox-list m-tablebox-hd">
                  <div class="m-item m-hd-item" style="width:40%;">
                    车牌号
                  </div>
                  <div class="m-item m-hd-item" style="width:30%;">
                    类型
                  </div>
                  <div class="m-item m-hd-item" style="width:30%;">
                    作业长度
                  </div>
                </dt>
                <div class="m-tablebox-inner">
                  <!-- <dd class="m-tablebox-list m-talbebox-bd" v-for="(item, index) in observerData.ktggData" :key="index" style="margin:0;"> -->
                  <dd class="m-tablebox-list m-talbebox-bd">
                    <div class="m-item m-bd-item" style="width:40%;">
                      粤A123456
                    </div>
                    <div class="m-item m-bd-item" style="width:30%; color: #33a4dc;">
                      压路式垃圾车
                    </div>
                    <div class="m-item m-bd-item" style="width:30%;">
                      62(km)
                    </div>
                  </dd>
                  <dd class="m-tablebox-list m-talbebox-bd">
                    <div class="m-item m-bd-item" style="width:40%;">
                      粤A123456
                    </div>
                    <div class="m-item m-bd-item" style="width:30%; color: #33a4dc;">
                      压路式垃圾车
                    </div>
                    <div class="m-item m-bd-item" style="width:30%;">
                      62(km)
                    </div>
                  </dd>
                  <dd class="m-tablebox-list m-talbebox-bd">
                    <div class="m-item m-bd-item" style="width:40%;">
                      粤A123456
                    </div>
                    <div class="m-item m-bd-item" style="width:30%;color: #33a4dc;">
                      压路式垃圾车
                    </div>
                    <div class="m-item m-bd-item" style="width:30%;">
                      62(km)
                    </div>
                  </dd>
                  <dd class="m-tablebox-list m-talbebox-bd">
                    <div class="m-item m-bd-item" style="width:40%;">
                      粤A123456
                    </div>
                    <div class="m-item m-bd-item" style="width:30%;color: #33a4dc;">
                      压路式垃圾车
                    </div>
                    <div class="m-item m-bd-item" style="width:30%;">
                      62(km)
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="g-h100 m-2-1">
          <!-- 1 -->
          <div class="g-w100" style="height:370px;">
            <div class="m-box-title u-left">
              <div class="u-title">垃圾收运</div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <div class="m-2-1">
                <div class="m-ljsy-icon">
                  <img src="../../assets/img/11-ljsy-1.png" alt="">
                </div>
                <div class="m-ljsy-box">
                  <div class="u-name-1">城市</div>
                  <div class="u-name-1">垃圾收运量</div>
                  <div class="u-name-2">
                    <span class="num1">164</span>
                    <span class="num2">吨/日</span>
                  </div>
                </div>
              </div>
              <div class="m-2-1 pull-right">
                <div class="m-ljsy-icon">
                  <img src="../../assets/img/11-ljsy-1.png" alt="">
                </div>
                <div class="m-ljsy-box">
                  <div class="u-name-1">乡村</div>
                  <div class="u-name-1">垃圾收运量</div>
                  <div class="u-name-2">
                    <span class="num1">164</span>
                    <span class="num2">吨/日</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="g-w100" style="height:400px; margin-top: 30px;">
            <div class="m-box-title u-left">
              <div class="u-title">垃圾分类</div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <div class="m-2-1">
                <div class="m-ljfl">
                  <LjflPie1></LjflPie1>
                </div>
              </div>
              <div class="m-2-1">
                <div class="m-ljfl">
                  <LjflPie2></LjflPie2>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="g-w100" style="height:730px; margin-top: 30px;">
            <div class="m-box-title u-left">
              <div class="u-title">中转站情况</div>
            </div>
            <div class="m-box-main" style="margin-top:28px;">
              <ul class="m-zzzqk-1">
                <li class="u-zzzqk-1">
                  <!-- <div class="u-icon">icon</div> -->
                  <div class="u-main">
                    <div class="u-name">总数量</div>
                    <div class="u-num">9289</div>
                  </div>
                </li>
                <li class="u-zzzqk-1">
                  <!-- <div class="u-icon">icon</div> -->
                  <div class="u-main">
                    <div class="u-name">城市（含县城）</div>
                    <div class="u-num">9289</div>
                  </div>
                </li>
                <li class="u-zzzqk-1">
                  <!-- <div class="u-icon">icon</div> -->
                  <div class="u-main">
                    <div class="u-name">乡镇（含村）</div>
                    <div class="u-num">9289</div>
                  </div>
                </li>
              </ul>
              <div class="m-zzzqk-2">
                <ZzzqkBar></ZzzqkBar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ZzzqkBar from './components/zzzqkBar';
import SjzxLine from './components/SjzxLine';
import RylbPie from './components/rylbPie';
import YghxRadar from './components/YghxRadar';
import LjflPie1 from './components/LjflPie1'
import LjflPie2 from './components/LjflPie2'
import Map from './components/Map'
export default {
  name: 'home',
  components: {
    ZzzqkBar,
    SjzxLine,
    RylbPie,
    YghxRadar,
    LjflPie1,
    LjflPie2,
    Map
},

  data() {
    return {
      
    }
  },

  created() {
  },

  mounted() {

  },

  methods: {
    
  },

  filters: {

  },

  computed: {

  },

  watch: {

  },

  destroyed() {

  }

}
</script>
<style lang="less" scoped>
.g-layout {
  width: 100%;
  height: 100%;
  background: #00040f url(../../assets/img/1-wg.png) no-repeat;
}

.m-left,
.m-right {
  float: left;
  width: 2128px;
}

.m-1 {
  width: 100%;
  height: 332px;

  .m-jc-box {
    float: left;
    width: calc(100% / 5 - 50px);
    height: 203px;
    margin-left: 50px;
    text-align: center;
    padding: 22px 0;

    &:first-child {
      margin-left: 0;
    }

    &.color1 {
      border-top: 5px solid #ffa000;
      border-bottom: 15px solid rgba(255, 160, 0, 0.72);
      background-image: linear-gradient(to bottom, rgba(255, 160, 0, 0.72), transparent);
    }

    &.color2 {
      border-top: 5px solid #00a2ff;
      border-bottom: 15px solid rgba(0, 162, 255, 0.72);
      background-image: linear-gradient(to bottom, rgba(0, 162, 255, 0.72), transparent);
    }

    &.color3 {
      border-top: 5px solid #00ffa8;
      border-bottom: 15px solid rgba(0, 255, 166, 0.72);
      background-image: linear-gradient(to bottom, rgba(0, 255, 166, 0.72), transparent);
    }

    .u-name {
      line-height: 40px;
      font-size: 40px;
      color: #fff;
    }

    .u-num {
      margin-top: 15px;
      color: #fff;
      font-size: 90px;
      line-height: 90px;
    }
  }
}

.m-2 {
  width: 100%;
  height: 370px;
}

.m-2-1 {
  float: left;
  width: calc(100% / 2 - 25px);
  margin-left: 50px;
  height: 100%;

  &:first-child {
    margin-left: 0;
  }

}

.m-line-box {
  margin-top: 15px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: rgba(25, 139, 255, 0.15);
  border-radius: 15px;
  padding: 0 38px;
  font-size: 22px;

  &:nth-child(even) {
    background: rgba(106, 133, 160, 0.08);
  }

  .u-title {
    float: left;
    width: 200px;
    color: #fff;
  }

  .u-txt {
    float: left;
    color: #3091de;
  }
}

.m-3 {
  width: 100%;
  height: 418px;
}

.m-4 {
  width: 100%;
  height: 348px;

  .u-img {
    float: left;
    width: calc(100% / 4 - 50px);
    height: 230px;
    margin-left: 50px;
    border: 1px solid #3091de;

    &:first-child {
      margin-left: 0;
    }
  }
}

// 人员列表
.m-rylb-1 {
  float: left;
  width: 40%;
  text-align: center;
  height: 286px;
  padding-top: 80px;
  background: url(../../assets/img/11-img-bg.png) center no-repeat;

  .u-name {
    font-size: 27px;
    color: #fff;
  }

  .u-num {
    color: #ffc567;

    .u-num-1 {
      font-size: 57px;
    }

    .u-num-2 {
      font-size: 27px;
    }
  }
}

.m-rylb-2 {
  float: left;
  width: 60%;
}

// 数据中心
.m-sjzx-1 {
  width: 100%;
  height: 96px;
  padding: 0 10%;

  .u-icon {
    float: left;
    width: 86px;
  }

  .u-main {
    margin-left: 20px;
    margin-top: 3px;
    float: left;
    width: calc(100% - 106px);
    height: 100%;

    .u-num {
      width: 100%;
      color: #08f3ae;

      .num-1 {
        font-size: 50px;
      }

      .num-2 {
        font-size: 42px;
      }
    }

    .u-name {
      width: 100%;
      font-size: 20px;
      color: #fff;
    }
  }
}

// 垃圾收运
.m-ljsy-icon {
  float: left;
  width: 210px;
  height: 190px;
}

.m-ljsy-box {
  float: left;
  width: calc(100% - 230px);
  height: 190px;
  margin-left: 20px;
  color: #fff;

  .u-name-1 {
    width: 100%;
    height: 38px;
    font-size: 27px;
  }

  .u-name-2 {
    margin-top: 10px;

    .num1 {
      font-size: 80px;
    }

    .num2 {
      font-size: 27px;
      margin-left: 10px;
    }
  }
}

// 公厕情况
.m-gcqk-1 {
  float: left;
  width: 30%;
  height: 230px;

  .u-list {
    width: 100%;
    height: calc(100% / 3 - 15px);
    margin-top: 40px;

    &:first-child {
      margin-top: 0;
    }

    .u-icon {
      float: left;
      width: 67px;
    }

    .u-main {
      float: left;
      margin-left: 20px;
      width: calc(100% - 90px);
      height: 100%;

      .u-num {
        font-size: 38px;
        color: #d3e2f5;
        font-family: MicrosoftYaHei;
        line-height: 36px;
        text-shadow: 3px 1px 1px rgba(0, 174, 255, 0.4);
      }

      .u-name {
        margin-top: 3px;
        font-size: 18px;
        color: #fff;
      }
    }
  }
}

.m-gcqk-2 {
  float: left;
  width: 70%;

  .u-list {
    margin-top: 10px;
    width: 100%;
    height: 44px;
    border-radius: 15px;
    padding: 0 30px;
    font-size: 18px;
    color: #fff;
    background: rgba(25, 139, 255, 0.15);

    &:first-child {
      margin-top: 0;
    }

    &:nth-child(even) {
      background: rgba(25, 139, 255, 0.08);
    }

    .u-type {
      position: relative;
      float: left;
      width: 28%;
      height: 100%;
      line-height: 44px;
      padding-left: 30px;

      &::before {
        position: absolute;
        top: 16px;
        left: 0;
        content: '';
        width: 12px;
        height: 12px;
        background-color: #26c1fd;
      }
    }

    .u-address {
      position: relative;
      float: left;
      width: 72%;
      height: 100%;
      line-height: 44px;
      padding-left: 30px;

      &::before {
        position: absolute;
        top: 5px;
        left: 0;
        content: url(../../assets/img/11-icon.png);
        width: 14px;
        height: 20px;
      }
    }
  }
}

// 垃圾分类
.m-ljfl {
  width: 100%;
  height: 250px;
  background: url(../../assets/img/11-ljfl-bg.png) center bottom no-repeat;
}

// 中转站情况
.m-zzzqk-1 {
  width: 100%;
  height: 120px;

  .u-zzzqk-1 {
    float: left;
    width: calc(100% / 3 - 20px);
    height: 100%;
    padding: 15px;
    margin-left: 30px;
    background: url(../../assets/img/11-zzzqk-1.png) no-repeat;

    &:first-child {
      margin-left: 0;
    }

    .u-icon {
      float: left;
      width: 98px;
    }

    .u-main {
      float: left;
      margin-left: 115px;
      width: calc(100% - 115px);
      height: 100%;

      .u-name {
        width: 100%;
        height: 24px;
        font-size: 20px;
        color: #fff;
      }

      .u-num {
        margin-top: 6px;
        width: 100%;
        font-size: 40px;
        color: #f4ce3d;
      }
    }
  }
}

.m-zzzqk-2 {
  margin-top: 20px;
  width: 100%;
  height: calc(100% - 130px);
}

.m-right {
  float: right;
}

.m-mid {
  position: absolute;
  top: 41px;
  left: 50%;
  width: 3610px;
  height: 1530px;
  transform: translateX(-50%);
  z-index: 0;
}

.m-ml-25 {
  margin-left: 25px;
}

// 车辆列表
.u-clsl {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  color: #fff;
  text-shadow: 2px 3px 1px rgba(0, 174, 255, 0.4);

  span {
    padding: 0 5px;
  }
}

.m-cllb {
  width: 100%;
  height: 100%;

  .u-cllb-hd {
    width: 100%;
    height: 44px;
    background: rgba(25, 139, 255, 0.3);
    border-radius: 15px;
  }

  .u-cllb-bd {
    width: 100%;
    height: calc(100% - 44px);

    .u-list {
      width: 100%;
      height: 44px;
      border-radius: 15px;
      background: rgba(25, 139, 255, 0.15);

      &:nth-child(even) {
        background: rgba(25, 139, 255, 0.08);
      }

    }
  }
}

.m-tablebox {
  width: 100%;
  height: 100%;
  color: #fff;

  .m-tablebox-list {
    height: 44px;
    background: rgba(25, 139, 255, 0.3);
    border-radius: 15px;

    .m-item {
      position: relative;
      float: left;
      text-align: center;
      height: 100%;
      line-height: 44px;
    }
  }

  .m-tablebox-hd {
    position: relative;
    width: 100%;
    background: rgba(25, 139, 255, 0.3);
    border-radius: 15px;

    .m-hd-item {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .m-tablebox-inner {
    width: 100%;
    height: calc(100% - 44px);
    overflow: hidden;

    .m-talbebox-bd {
      margin: 8px 0 0 0;
      background: rgba(25, 139, 255, 0.15);

      &:nth-child(even) {
        background: rgba(25, 139, 255, 0.08);
      }

      .m-bd-item {
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

      }
    }
  }
}</style>