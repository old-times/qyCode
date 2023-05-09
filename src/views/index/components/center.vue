<template>
    <div class="center">
        <div class="left1">
            <!-- 业务投资 -->
            <div class="m-2">
                <HouseTitle :houseTitle="'业务投资'" style="margin-top:130px"></HouseTitle>
                <div class="g-w100" style="margin-top:35px; height: auto; display: flex; justify-content: center;">
                    <div
                      class="m-car1"
                      v-for="(item, index) in businessInvestment"
                    >
                        <div class="u-car-icon">
                            <img :src="item.img" alt="" />
                        </div>
                        <div class="u-car-txt">
                            <div class="u-num color3">
                              {{ item.val }}{{ index === 2 ? item.unit : ''}}
                            </div>
                            <div class="u-txt">{{ item.dtl }}</div>
                        </div>
                    </div>
                </div>
                <div class="m-2" style="width:calc(100% - 50px)">
                    <dl class="m-tablebox" style="height: 294px;">
                        <dt class="m-tablebox-list m-tablebox-hd">
                            <div
                              class="m-item m-hd-item"
                              style="width:25%;"
                              v-for="item in businessInvestmentList.titles"
                            >
                              {{ item }}
                            </div>
                        </dt>
                        <div class="m-tablebox-inner">
                            <!-- <dd class="m-tablebox-list m-talbebox-bd" v-for="(item, index) in config.data" :key="index"> -->
                            <dd
                              class="m-tablebox-list m-talbebox-bd"
                              v-for="item in businessInvestmentList.vals"
                            >
                                <div class="m-item m-bd-item" style="width:25%;">
                                  {{ item.name }}
                                </div>
                                <div class="m-item m-bd-item" style="width:25%; color: #33a4dc;">
                                  {{ item.quantity }}
                                </div>
                                <div class="m-item m-bd-item" style="width:25%;">
                                  {{ item.compare }}
                                </div>
                                <div class="m-item m-bd-item" style="width:25%;">
                                  {{ item.variation }}
                                </div>
                            </dd>

                        </div>
                    </dl>
                </div>
            </div>
            <!-- 业务类型 -->
            <div class="m-2">
                <HouseTitle :houseTitle="'业务类型'" style="margin-top: 50px"></HouseTitle>
                <div style="width:100%;height:320px;">
                    <ywlxPie></ywlxPie>
                </div>
            </div>
            <!-- 投资趋势 -->
            <div class="m-2">
                <HouseTitle :houseTitle="'投资趋势'" style="margin-top: 10px"></HouseTitle>
                <div class="g-w100" style="height:110px; display: flex; justify-content: center;">
                    <div
                      class="m-car2"
                      v-for="item in investmentTrend"
                    >
                        <div class="u-car-icon">
                            <img :src="item.img" alt="" />
                        </div>
                        <div class="u-car-txt">
                            <div class="u-num">
                                <span class="u-num-1">{{ item.val }}</span>
                                <span class="u-num-2">{{ item.unit }}</span>
                            </div>
                            <div class="u-txt">{{ item.dtl }}</div>
                        </div>
                    </div>
                </div>
                <div style="width:100%;height:350px;">
                    <lineEcharts></lineEcharts>
                </div>
            </div>
        </div>
        <div class="center1" style="position: relative;">
            <div class="m-menu">
              <div class="u-menu">全国首页</div>
              <div class="u-menu">城市板块</div>
              <div class="u-menu">业务板块</div>
            </div>
            <custom-map />
        </div>
        <div class="right1">
            <!-- 服务面积 -->
            <HouseTitle :houseTitle="'服务面积'" style="margin-top: 130px"></HouseTitle>
            <div class="m-2" style="height:350px;">
                <div class="m-2-1 g-h100">
                    <cRightOne></cRightOne>
                </div>
                <div class="m-2-1 g-h100">
                    <cRightOne1></cRightOne1>
                </div>
            </div>
            <!-- 基础设置管理 -->
            <HouseTitle :houseTitle="'基础设置管理'" style="margin-top: 80px"></HouseTitle>
            <div class="m-2" style="height:460px; width:calc(100% - 50px)">
                <jcssglBar></jcssglBar>
            </div>
            <!-- tab -->
            <div class="m-2">
                <el-button-group class="m-btnGroup">
                    <el-button v-for="(item, index) in initData.btnItem" :key="index"
                        :class="{ active: initData.btnActive == index }" @click="changeBtn(index)">
                        {{ item.name }}
                    </el-button>
                </el-button-group>
                <!-- 实时车辆 -->
                <div class="m-2" style="margin-top:10px" v-if="initData.btnActive == 0">
                    <div class="m-img">
                        img1
                    </div>
                </div>
                <!-- 压缩站 -->
                <div class="m-2" style="margin-top:10px" v-if="initData.btnActive == 1">
                    <div class="m-img">
                        img2
                    </div>
                </div>
                <!-- 中转车辆 -->
                <div class="m-2" style="margin-top:10px" v-if="initData.btnActive == 2">
                    <div class="m-img">
                        img3
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import LittleTitle from "@/components/littleTitle.vue";
import HouseTitle from "@/components/houseTitle.vue";
import ywlxPie from './ywlxPie.vue';
import lineEcharts from './lineEcharts.vue';
import customMap from './chinaMap';
import cRightOne from "./cRightOne.vue";
import cRightOne1 from "./cRightOne1.vue";
import jcssglBar from "./jcssglBar.vue";
export default {
    name: 'center',
    components: {
        LittleTitle,
        HouseTitle,
        ywlxPie,
        lineEcharts,
        customMap,
        cRightOne,
        cRightOne1,
        jcssglBar
    },
    data() {
        return {
            initData: {
                btnActive: 0,
                btnItem: [{ name: "实时车辆" }, { name: "压缩站" }, { name: "中转车辆" }]
            },
            businessInvestment: [], //业务投资图文
            businessInvestmentList: {}, //业务投资列表
            investmentTrend: [], //投资趋势
        };
    },
    mounted() {
        this.getYwtz();
        this.getTzqs();
    },
    methods: {
        //业务投资
        getYwtz() {
          const res = new DATAUTIL().getData("全国业务板块/业务投资", "图文");
          const res1 = new DATAUTIL().getData("全国业务板块/业务投资", "列表");
          res.forEach(item => {
            if (item.dtl === "业务投资") item.img = require("../../../assets/center/touzi1.png")
            if (item.dtl === "投资金额") item.img = require("../../../assets/center/touzi2.png")
            if (item.dtl === "投资项目") item.img = require("../../../assets/center/touzi3.png")
          })
          this.businessInvestment = res;
          this.businessInvestmentList = res1[0];
        },
        //投资趋势
        getTzqs() {
          const res = new DATAUTIL().getData("全国业务板块/投资趋势", "图文");
          res.forEach(item => {
            if (item.dtl === "投资金额") item.img = require("../../../assets/center/touzi4.png")
            if (item.dtl === "中标金额") item.img = require("../../../assets/center/touzi5.png")
          })
          this.investmentTrend = res;
        },
        //按钮切换
        changeBtn(index) {
            this.initData.btnActive = index;
        }
    }
};
</script>

<style lang="less" scoped>
.center {
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: url("../../../assets/centerBgImg.png") no-repeat;
    background-size: 100% 100%;
    // 背景图片位置，对应echarts地图
    background-position-x: 100px;

    .left1,
    .right1 {
        width: 870px;
        height: calc(100% -60px);
        background: url("../../../assets/center/centerleft.png") no-repeat;
        background-size: 100% 100%;
    }

    .conter1 {
        flex: 1;
    }

    .m-box {
        background: rgba(9, 36, 64, 0.5);
    }
.m-img{
    width: calc(100% - 50px);
    height: 360px;
    background-color: #000000;
	border: solid 3px #143894;
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
    /deep/.el-button-group {
        margin-top: 35px;
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

    // 业务投资
    .m-car1 {
        width: calc(100% / 3 - 25px);
        height: 70px;

        .u-car-icon {
            float: left;
            width: 61px;
            height: 54px;
        }

        .u-car-txt {
            float: left;
            width: calc(100% - 81px);
            margin-left: 20px;

            .u-txt {
                font-size: 16px;
                line-height: 28px;
                color: #fff;
            }

            .u-num {
                font-size: 37px;

                &.color1 {
                    color: #d3e2f5;
                }

                &.color2 {
                    color: #ffedd8;
                }

                &.color3 {
                    color: #bdffdd;
                }
            }
        }
    }

    .m-car2 {
        width: calc(49% - 25px);
        margin-left: 50px;
        height: 100%;
        padding: 20px;

        &:first-child {
            margin-left: 0;
        }

        .u-car-icon {
            float: left;
            width: 86px;
            height: 96px;
        }

        .u-car-txt {
            float: left;
            width: calc(100% - 100px);
            margin-left: 14px;

            .u-txt {
                font-size: 22px;
                line-height: 28px;
                color: #f4fdff;
            }

            .u-num {
                margin-top: 8px;
                color: #08f3ae;

                .u-num-1 {
                    font-size: 42px;
                }

                .u-num-2 {
                    font-size: 16px;
                    font-size: 20px;
                }
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

  //菜单
  .m-menu {
    position: absolute;
    bottom: -67px;
    left: 50%;
    width: 2262px;
    height: 139px;
    transform: translate(-50%, -50%);
    padding: 0 20%;
    background: url(../../../assets/img_menu_bg.png) no-repeat;
    z-index: 100;
    &::after{
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      content: url(../../../assets/icon_sjx.png);
      width: 74px;
      height: 33px;
    }

    .u-menu {
      float: left;
      width: calc(100% / 3);
      height: 100%;
      text-align: center;
      color: #fff;
      font-size: 50px;
      line-height: 150px;
      cursor: pointer;
      &:hover{
        color: #00a2ff;
      }

    }
  }

}
</style>
