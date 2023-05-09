<template>
  <div class="left">
    <!-- 智能管车 -->
    <div class="m-jcxx">
      <LittleTitle :titleName="'智能管车'"></LittleTitle>
      <div class="g-w100" style="margin-top:35px">
        <img alt="" src="../../../assets/left/Cart.png"/>
      </div>
    </div>
    <!-- 车辆管理、资产管理 -->
    <div class="m-2" style="margin-top:35px">
      <el-button-group class="m-btnGroup">
        <el-button v-for="(item, index) in initData.btnItem" :key="index"
                   :class="{ active: initData.btnActive == index }" @click="changeBtn(index)">
          {{ item.name }}
        </el-button>
      </el-button-group>
      <!-- 车辆管理 -->
      <div v-if="initData.btnActive == 0" class="m-2" style="margin-top:35px">
        <div class="m-2-1">
          <div class="g-w100 g-h100" style="height:330px; display: flex; justify-content: center;">
            <div v-for="item in carManageInfo.overview" class="m-car1">
              <div class="u-car-icon">
                <img :src="item.imgUrl" alt=""/>
              </div>
              <div class="u-car-txt">
                <div class="u-txt">{{ item.name }}</div>
                <div class="u-num">
                  <span class="u-num-1">{{ item.value }}</span>
                  <span class="u-num-2">辆</span>
                </div>
              </div>
            </div>
          </div>
          <div class="g-w100 g-h100">
            <dl class="m-tablebox" style="height: 520px;">
              <dt class="m-tablebox-list m-tablebox-hd">
                <div
                  v-for="item in carManageInfo.list.titles"
                  class="m-item m-hd-item"
                  style="width:25%;"
                >
                  {{ item }}
                </div>
              </dt>
              <div class="m-tablebox-inner">
                <!-- <dd class="m-tablebox-list m-talbebox-bd" v-for="(item, index) in config.data" :key="index"> -->
                <dd
                  v-for="item in carManageInfo.list.vals"
                  class="m-tablebox-list m-talbebox-bd"
                >
                  <div class="m-item m-bd-item" style="width:25%;">
                    {{ item.AUTO }}
                  </div>
                  <div class="m-item m-bd-item" style="width:25%; color: #33a4dc;">
                    {{ item.carNum }}
                  </div>
                  <div class="m-item m-bd-item" style="width:25%;">
                    {{ item.carType }}
                  </div>
                  <div class="m-item m-bd-item" style="width:25%;">
                    {{ item.proportion }}
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="m-2-1">
          <div class="m-car2" style="margin-top:60px">
            <ul>
              <li
                v-for="item in carStatistics.slice(0, 4)"
                class="u-car-box"
              >
                <div class="b-icon">
                  <img :src="item.img" alt="">
                </div>
                <div class="b-main">
                  <div class="b-num">
                    <span class="b-1">{{ item.val }}</span>
                    <span class="b-2">{{ item.unit }}</span>
                  </div>
                  <div class="b-name">{{ item.dtl }}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="m-car3">
            <ul>
              <li
                v-for="item in carStatistics.slice(4, 10)"
                class="u-tb"
              >
                <div class="u-num">
                  <span class="b-1">{{ item.val }}</span>
                  <span class="b-2">{{ item.unit }}</span>
                </div>
                <div class="u-name">{{ item.dtl }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="initData.btnActive == 1" class="m-2" style="margin-top:35px">
        <equipment-analysis-chart
          style="float: left"
          :equipmentAnalysis="equipmentAnalysis"
        />
        <traffic-analysis-chart
          style="float: left"
          :trafficAnalysis="trafficAnalysis"
        />
        <run-alert-chart
          style="float: left"
          :runAlert="runAlert"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LittleTitle from "@/components/littleTitle.vue";
import HouseTitle from "@/components/houseTitle.vue";
import equipmentAnalysisChart from "./charts/equipmentAnalysisChart";
import trafficAnalysisChart from "./charts/trafficAnalysisChart";
import runAlertChart from "./charts/runAlertChart";

export default {
  components: {
    equipmentAnalysisChart,
    trafficAnalysisChart,
    runAlertChart,
    LittleTitle,
    HouseTitle
  },
  data() {
    return {
      initData: {
        btnActive: 0,
        btnItem: [{name: "车辆管理"}, {name: "资产管理"}]
      },
      carManageInfo: {  //左侧车辆管理相关
        overview: [],
        list: [],
      },
      carStatistics: [], //车辆统计

      equipmentAnalysis: [], //设备分析
      trafficAnalysis: [], //行车分析
      runAlert: [], //运行警报
    };
  },
  mounted() {
    this.getClgl();
    this.getCltj();
    this.get_equipmentAnalysis();
    this.get_trafficAnalysis();
    this.get_runAlert();
  },
  methods: {
    // 车辆管理
    getClgl() {
      const a = this.$DU.getData("全国业务板块/车辆管理/设备分析", "图文");
      const b = this.$DU.getData("全国业务板块/车辆管理/设备分析", "列表");
      this.carManageInfo.overview = a.map((item, index) => {
        return {
          name: item.dtl,
          value: item.val,
          imgUrl: index === 0 ? require("../../../assets/left/Cartnum.png") : require("../../../assets/left/driver.png")
        }
      });
      this.carManageInfo.list = b[0]
    },
    //车辆统计
    getCltj() {
      const a = this.$DU.getData("全国业务板块/车辆管理/车辆统计", "图文");
      a.forEach(item => {
        if (item.dtl === "投保车辆数") item.img = require("../../../assets/left/bao.png")
        if (item.dtl === "上牌车辆数") item.img = require("../../../assets/left/shangpai.png")
        if (item.dtl === "维保车辆数") item.img = require("../../../assets/left/weibao.png")
        if (item.dtl === "加油升数") item.img = require("../../../assets/left/you.png")
      })
      this.carStatistics = a;
    },
    get_equipmentAnalysis() {
      this.equipmentAnalysis = this.$DU.getData("全国业务板块/资产管理/设备分析", "图文");
      const a = this.$DU.getData("全国业务板块/资产管理/设备分析", "列表");
      console.log(a)
    },
    get_trafficAnalysis() {
      this.trafficAnalysis = this.$DU.getData("全国业务板块/行车分析", "图文");
    },
    get_runAlert() {
      this.runAlert = this.$DU.getData("全国业务板块/运行警报", "图文");
    },
    //按钮切换
    changeBtn(index) {
      this.initData.btnActive = index;
    },
  }
};
</script>

<style lang="less" scoped>
.left {
  padding: 0 0 0 68px;
  box-sizing: border-box;
  height: calc(100% - 125px);

  .m-box {
    background: rgba(9, 36, 64, 0.5);
  }

  // tab
  /deep/ .el-button-group {
    .el-button {
      height: 66px;
      font-size: 30px;
      color: #fff;
      background: rgba(9, 36, 64, 0.2);
      border-radius: 0;
      border: none;
      border-bottom: 4px solid rgba(40, 138, 161, 0.5);

      &.active {
        background: rgba(9, 36, 64, 0.7);
      }
    }
  }

  // pub
  .m-2 {
    width: 100%;
    height: auto;
    overflow: hidden;

    .m-2-1 {
      float: left;
      width: calc(49% - 25px);
      margin-left: 50px;
      height: 100%;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  // 车辆管理
  .m-car1 {
    width: calc(49% - 25px);
    margin-left: 50px;
    height: 100%;
    padding: 80px 50px;

    &:first-child {
      margin-left: 0;
    }

    .u-car-icon {
      float: left;
      width: 191px;
      height: 160px;
    }

    .u-car-txt {
      float: left;
      width: calc(100% - 201px);
      margin-left: 10px;
      padding: 30px 0;

      .u-txt {
        font-size: 27px;
        line-height: 28px;
        color: #f4fdff;
      }

      .u-num {
        margin-top: 8px;

        .u-num-1 {
          font-size: 50px;
          color: #fff;
        }

        .u-num-2 {
          font-size: 20px;
          color: #b8ccd1;
        }
      }
    }
  }

  .m-car2 {
    width: 100%;
    height: 460px;

    .u-car-box {
      float: left;
      margin: 15px;
      width: calc(100% / 2 - 30px);
      height: 194px;
      border: solid 2px #1888ff;
      background: rgba(9, 36, 64, 0.5);
      padding: 28px 30px;

      .b-icon {
        float: left;
        width: 138px;
        height: 138px;
      }

      .b-main {
        margin-top: 17px;
        float: left;
        width: calc(100% - 168px);
        margin-left: 30px;

        .b-name {
          margin-top: 10px;
          font-size: 27px;
          line-height: 28px;
          color: #f4fdff;
        }

        .b-num {
          width: 100%;

          .b-1 {
            font-size: 50px;
            color: #fff;
          }

          .b-2 {
            font-size: 20px;
            color: #b8ccd1;
          }
        }
      }
    }
  }

  .m-car3 {
    width: 100%;
    margin-top: 30px;

    .u-tb {
      float: left;
      width: calc(100% / 6 - 20px);
      margin: 0 10px;
      height: 240px;
      background: url(../../../assets/left/dizuo.png) center center no-repeat;
      background-size: contain;

      .u-num {
        width: 100%;
        text-align: center;

        .b-1 {
          font-size: 50px;
          color: #fff;
        }

        .b-2 {
          font-size: 20px;
          color: #b8ccd1;
        }
      }

      .u-name {
        margin-top: 120px;
        text-align: center;
        font-size: 25px;
        color: #c9eeff;
      }
    }
  }

  // pub列表
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
      // height: calc(100% - 44px);
      height: 315px;
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
  }


}
</style>
