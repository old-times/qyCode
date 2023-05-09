<template>
  <div class="right">
    <div class="rLeft">
      <LittleTitle :titleName="'人员管理'"></LittleTitle>
      <!-- 数据统计、设备分析 -->
      <el-button-group class="m-btnGroup" style="margin-top:50px">
        <el-button
          v-for="(item, index) in initData.btnItem"
          :key="index"
          :class="{ active: initData.btnActive == index }"
          @click="changeBtn(index)">
          {{ item.name }}
        </el-button>
      </el-button-group>
      <!-- tab1 -->
      <div v-if="initData.btnActive == 0" class="m-2" style="margin-top:30px">
        <div
          v-for="item in personnelDataStatistics"
          :class="['m-sjtj', item.bg]"
        >
          <div class="u-name">{{ item.dtl }}</div>
          <div class="u-num">{{ item.val }}</div>
        </div>
        <!-- 在线设备数TOP5 -->
        <div class="top5Cls">
          <HouseTitle :houseTitle="'在线设备数TOP5'"></HouseTitle>
          <!-- 列表 -->
          <div class="topList">
            <top5Echarts></top5Echarts>
          </div>
        </div>
      </div>
      <!-- tab2 -->
      <div v-if="initData.btnActive == 1" class="m-2" style="margin-top:10px">
        <equipment-analysis-right-chart />
      </div>
      <!-- 三个站 -->
      <div class="threeStand">
        <span
          v-for="(item, index) in standData"
          :key="index"
        >{{ item }}</span>
      </div>
      <!-- 业务总览 -->
      <div class="m-2">
        <HouseTitle :houseTitle="'业务总览'"></HouseTitle>
        <div class="g-w100" style="height:295px">
          <ul>
            <li class="m-car1">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/yewu1.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">25841</div>
                <div class="u-txt">项目总数</div>
              </div>
            </li>
            <li class="m-car1">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/yewu2.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">20871</div>
                <div class="u-txt">作业人数</div>
              </div>
            </li>
            <li class="m-car1">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/yewu3.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">25841</div>
                <div class="u-txt">作业车辆</div>
              </div>
            </li>
            <li class="m-car1">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/yewu4.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">25841</div>
                <div class="u-txt">转运站点</div>
              </div>
            </li>
            <li class="m-car1">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/yewu5.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">25841</div>
                <div class="u-txt">作业线路</div>
              </div>
            </li>
            <li class="m-car1">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/yewu6.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">25841</div>
                <div class="u-txt">闸门数</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rRight">
      <LittleTitle :titleName="'智慧公厕'"></LittleTitle>
      <!-- 总览分析 -->
      <div class="m-2">
        <HouseTitle :houseTitle="'总览分析'" style="margin-top:95px"></HouseTitle>
        <div class="m-2" style="height:350px">
          <ul style="padding:0 100px">
            <li class="m-car1 m-zlfx">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/rOne1.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">
                  <span class="b1">8</span>
                  <span class="b2">个</span>
                </div>
                <div class="u-txt">设备总数</div>
              </div>
            </li>
            <li class="m-car1 m-zlfx">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/rOne2.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">
                  <span class="b1">18</span>
                  <span class="b2">个</span>
                </div>
                <div class="u-txt">公厕总数</div>
              </div>
            </li>
            <li class="m-car1 m-zlfx">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/rOne3.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">
                  <span class="b1">1052</span>
                  <span class="b2">万次</span>
                </div>
                <div class="u-txt">人流总次数</div>
              </div>
            </li>
            <li class="m-car1 m-zlfx">
              <div class="u-car-icon">
                <img alt="" src="../../../assets/right/rOne4.png"/>
              </div>
              <div class="u-car-txt">
                <div class="u-num">
                  <span class="b1">优</span>
                  <!-- <span class="b2">万次</span> -->
                </div>
                <div class="u-txt">实时空气质量等级</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 设备使用分析 -->
      <div class="m-2">
        <HouseTitle :fuTitle="'总设备数：14'" :houseTitle="'设备使用分析'"></HouseTitle>
        <ul style="margin-top:30px;display: flex; justify-content: space-between;">
          <li class="m-circle">
            <div class="u-circle">
              <span class="b1">60</span>
              <span class="b2">%</span>
            </div>
            <div class="u-name">环境检测</div>
          </li>
          <li class="m-circle">
            <div class="u-circle">
              <span class="b1">50</span>
              <span class="b2">%</span>
            </div>
            <div class="u-name">视频</div>
          </li>
          <li class="m-circle">
            <div class="u-circle">
              <span class="b1">60</span>
              <span class="b2">%</span>
            </div>
            <div class="u-name">AI智能分类箱</div>
          </li>
        </ul>
      </div>
      <!-- 人流统计分析 -->
      <div class="m-2">
        <HouseTitle :houseTitle="'人流统计分析'" style="margin-top:50px"></HouseTitle>
        <div style="width: 100%; height: 320px">
          <personEcharts></personEcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LittleTitle from "@/components/littleTitle.vue";
import HouseTitle from "@/components/houseTitle.vue";
import top5Echarts from './top5Echarts.vue';
import personEcharts from './personEcharts.vue';
import equipmentAnalysisRightChart from "./charts/equipmentAnalysisRightChart";

export default {
  components: {
    LittleTitle,
    HouseTitle,
    top5Echarts,
    personEcharts,
    equipmentAnalysisRightChart,
  },
  data() {
    return {
      initData: {
        btnActive: 0,
        btnItem: [{name: "数据统计"}, {name: "设备分析"}]
      },
      standData: ["中转站", "压缩站", "垃圾分类"],
      personnelDataStatistics: [],  //数据统计
    };
  },
  mounted() {
    // this.getRyshtj();
    // this.getYwzl();
  },
  methods: {
    changeBtn(index) {
      this.initData.btnActive = index;
    },
    getRyshtj() {
      let res = new DATAUTIL().getData("全国业务板块/人员管理", "图文");
      res.forEach(item => {
        if (item.dtl === "在线设备数目") item.bg = "bg1";
        if (item.dtl === "关机设备数目") item.bg = "bg2";
        if (item.dtl === "异常设备数") item.bg = "bg3";
      })
      this.personnelDataStatistics = res;
    },
    getYwzl() {
      let res = new DATAUTIL().getData("全国业务板块/中转站/业务总览", "图文");
      console.log("全国业务板块/中转站/业务总览", res)
    },
  }
};
</script>

<style lang="less" scoped>
.right {
  padding: 0 0 0 68px;
  box-sizing: border-box;
  height: calc(100% - 125px);
  display: flex;
  justify-content: space-between;

  .rLeft,
  .rRight {
    flex: 1;
  }

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

  // 数据统计
  .m-sjtj {
    float: left;
    width: calc(100% / 3 - 10px);
    height: 120px;
    padding: 25px 15px 15px 88px;

    &.bg1 {
      background: url(../../../assets/right/right1.png) no-repeat;
    }

    &.bg2 {
      background: url(../../../assets/right/right2.png) no-repeat;
    }

    &.bg3 {
      background: url(../../../assets/right/right3.png) no-repeat;
    }

    .u-name {
      font-size: 18px;
      color: #1ff2ff;
    }

    .u-num {
      font-size: 32px;
      line-height: 47px;
      color: #fff;
    }
  }

  .top5Cls {
    margin-top: 35px;

    .topList {
      height: 531px;
      width: 100%;
    }

    .threeStand {
      width: 100%;
      height: 83px;
      background: url("../../../assets/title1.png") no-repeat;
      background-size: 100% 100%;
      font-size: 40px;
      color: white;
      margin-bottom: 25px;

      span {
        position: relative;
        top: -20px;
        margin: 0 115px;
      }

      span:last-child {
        margin-left: 80px;
      }
    }
  }

  // 业务总览
  .m-car1 {
    float: left;
    width: calc(100% / 3 - 36px);
    height: 100px;
    margin: 50px 18px 0;

    &.m-zlfx {
      width: calc(100% / 2 - 36px);
    }

    .u-car-icon {
      float: left;
      width: 94px;
      height: 83px;
      padding-top: 20px;
    }

    .u-car-txt {
      float: left;
      width: calc(100% - 104px);
      margin-left: 10px;

      .u-txt {
        font-size: 24px;
        line-height: 28px;
        color: #fff;
      }

      .u-num {
        font-size: 57px;
        color: #fff;

        .b1 {
          font-size: 60px;
        }

        .b2 {
          font-size: 25px;
        }
      }
    }
  }

  // 设备使用分析
  .m-circle {
    width: 291px;
    text-align: center;

    .u-circle {
      width: 291px;
      height: 294px;
      background: url("../../../assets/right/circlePao.png") no-repeat;
      background-size: 100% 100%;
      color: white;
      text-align: center;
      line-height: 294px;

      .b1 {
        font-size: 54px;
      }

      .b2 {
        font-size: 16px;
      }
    }

    .u-name {
      width: 100%;
      font-size: 30px;
      color: white;
      margin-top: -20px;
    }
  }


}</style>
