<template>
    <div class="right">
        <div class="m-2-1">
            <!-- 数据中心 -->
            <div class="m-2">
                <LittleTitle :titleName="'数据中心'"></LittleTitle>
                <div style="margin-top:50px;">
                    <div class="m-sjzx-1">
                        <div class="g-h100 m-2-1">
                            <div class="u-icon">
                                <img src="../../../assets/img/11-sjzx-1.png" alt="">
                            </div>
                            <div class="u-main">
                                <div class="u-num">
                                    <span class="num-1">{{ jcls || 0 }}</span>
                                    <span>T</span>
                                </div>
                                <div class="u-name">本月垃圾进厂量</div>
                            </div>
                        </div>
                        <div class="g-h100 m-2-1 pull-right">
                            <div class="u-icon">
                                <img src="../../../assets/img/11-sjzx-2.png" alt="">
                            </div>
                            <div class="u-main">
                                <div class="u-num" style="color:#1787ea">
                                    <span class="num-1">{{ jccs || 0 }} </span>
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
            <!-- 公厕情况 -->
            <div class="m-2">
                <LittleTitle style="margin-top:60px;" :titleName="'公厕情况'"></LittleTitle>
                <div style="margin-top:50px;">
                    <div class="m-gcqk-1">
                        <div class="u-list">
                            <div class="u-icon">
                                <img src="../../../assets/img/11-gcqk-1.png" alt="">
                            </div>
                            <div class="u-main">
                                <div class="u-num">{{sc || 0}}</div>
                                <div class="u-name">水厕（环保）/座</div>
                            </div>
                        </div>
                        <div class="u-list">
                            <div class="u-icon">
                                <img src="../../../assets/img/11-gcqk-2.png" alt="">
                            </div>
                            <div class="u-main">
                                <div class="u-num">{{ hc || 0 }}</div>
                                <div class="u-name">旱厕/座</div>
                            </div>
                        </div>
                        <div class="u-list">
                            <div class="u-icon">
                                <img src="../../../assets/img/11-gcqk-3.png" alt="">
                            </div>
                            <div class="u-main">
                                <div class="u-num">{{ ydcs || 0 }}</div>
                                <div class="u-name">移动公厕（环保）/座</div>
                            </div>
                        </div>
                    </div>
                    <div class="m-gcqk-2">
                        <ul>
                            <li class="u-list" v-for="(item, index) in gcqkData" :key="index">
                                <div class="u-type">{{ item.name }}</div>
                                <div class="u-address">{{ item.address }}</div>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 车辆列表 -->
            <div class="m-2">
                <LittleTitle style="margin-top:60px;" :titleName="'车辆列表'"></LittleTitle>
                <!-- <div class="u-clsl"><span>车辆数</span><span style="font-size: 50px;">123</span></div> -->
                <div style="margin-top:50px;">
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
                            <dd class="m-tablebox-list m-talbebox-bd" v-for="(item, index) in cllbData" :key="index">
                                <div class="m-item m-bd-item" style="width:40%;">
                                    {{ item.licensePlateNumber }}
                                </div>
                                <div class="m-item m-bd-item" style="width:30%; color: #33a4dc;">
                                    {{ item.type }}
                                </div>
                                <div class="m-item m-bd-item" style="width:30%;">
                                    {{item.jobLength +'(km)'}}
                                </div>
                            </dd>
                            
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <div class="m-2-1">
            <!-- 垃圾收运 -->
            <div class="m-2">
                <LittleTitle :titleName="'垃圾收运'"></LittleTitle>
                <div style="margin-top:50px;">
                    <div class="m-2-1">
                        <div class="m-ljsy-icon">
                            <img src="../../../assets/img/11-ljsy-1.png" alt="">
                        </div>
                        <div class="m-ljsy-box">
                            <div class="u-name-1">城市</div>
                            <div class="u-name-1">垃圾收运量</div>
                            <div class="u-name-2">
                                <span class="num1">{{ city || 0 }}</span>
                                <span class="num2">吨/日</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-2-1 pull-right">
                        <div class="m-ljsy-icon">
                            <img src="../../../assets/img/11-ljsy-1.png" alt="">
                        </div>
                        <div class="m-ljsy-box">
                            <div class="u-name-1">乡村</div>
                            <div class="u-name-1">垃圾收运量</div>
                            <div class="u-name-2">
                                <span class="num1">{{ coutry || 0 }}</span>
                                <span class="num2">吨/日</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 垃圾分类 -->
            <div class="m-2">
                <LittleTitle style="margin-top:60px;" :titleName="'垃圾分类'"></LittleTitle>
                <div style="margin-top:50px;">
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
            <!-- 中转站情况 -->
            <div class="m-2">
                <LittleTitle style="margin-top:60px;" :titleName="'中转站情况'"></LittleTitle>
                <div style="margin-top:50px;">
                    <ul class="m-zzzqk-1">
                        <li class="u-zzzqk-1">
                            <!-- <div class="u-icon">icon</div> -->
                            <div class="u-main">
                                <div class="u-name">总数量</div>
                                <div class="u-num">{{ zzzSum || 0 }}</div>
                            </div>
                        </li>
                        <li class="u-zzzqk-1">
                            <!-- <div class="u-icon">icon</div> -->
                            <div class="u-main">
                                <div class="u-name">城市（含县城）</div>
                                <div class="u-num">{{ zzzCity || 0 }}</div>
                            </div>
                        </li>
                        <li class="u-zzzqk-1">
                            <!-- <div class="u-icon">icon</div> -->
                            <div class="u-main">
                                <div class="u-name">乡镇（含村）</div>
                                <div class="u-num">{{ zzzCountry || 0 }}</div>
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
</template>
  
<script>
import LittleTitle from "@/components/littleTitle.vue";
import HouseTitle from "@/components/houseTitle.vue";
import ZzzqkBar from './zzzqkBar.vue';
import SjzxLine from './sjzxLine.vue';
import LjflPie1 from './ljflPie1.vue'
import LjflPie2 from './ljflPie2.vue'
export default {
    components: {
        LittleTitle,
        HouseTitle,
        ZzzqkBar,
        SjzxLine,
        LjflPie1,
        LjflPie2
    },
    data() {
        return {
            jcls:'',
            jccs:'',
            sc:'',
            hc:'',
            ydcs:'',
            gcqkData:[],
            cllbData:[],
            city:'',
            coutry:'',
            zzzSum:'',
            zzzCity:'',
            zzzCountry:''
        };
    },
    mounted() {
        this.getSjzx()
        this.getGcqk()
        this.getClqk()
        this.getLjsy()
    },
    methods: {
        // 数据中心
        getSjzx(){
            let res = this.$datautils.getData("城市业务板块/数据中心", "图文");
            this.jcls=res[0].val
            this.jccs=res[1].val
            console.log(res, '数据中心')
        }, 
        // 公厕情况
        getGcqk(){
            let res = this.$datautils.getData("城市业务板块/公厕情况", "图文");
            this.sc=res[0].val
            this.hc=res[1].val
            this.ydcs=res[2].val
            console.log(res, '公厕情况-tw')

            let arr = this.$datautils.getData("城市业务板块/公厕情况", "列表");
            if (arr[0].vals && arr[0].vals.length > 0) {
               this.gcqkData=arr[0].vals
            }
            console.log(arr, '公厕情况-lb')
        },
        // 车辆列表
        getClqk(){
            let res = this.$datautils.getData("城市业务板块/车辆列表", "列表");
            if (res[0].vals) {
               this.cllbData=res[0].vals
            }
            console.log(res, '车辆列表-lb')
        },
         // 垃圾收运
         getLjsy(){
            let res = this.$datautils.getData("城市业务板块/垃圾收运", "图文");
            this.city=res[0].val
            this.coutry=res[1].val
            console.log(res, '垃圾收运')
        }, 
         // 中转站情况
         getClqk(){
            let res = this.$datautils.getData("城市业务板块/中转站情况", "图文");
            this.zzzSum=res[0].val
            this.zzzCity=res[1].val
            this.zzzCountry=res[2].val
            console.log(res, '中转站情况-tw')

            
        },

    },
};
</script>
  
<style lang="less" scoped>
.right {
    padding: 0 68px 0 60px;
    width: calc(100% - 68px) !important;
    height: auto;
    overflow: hidden;

    // pub
    .m-2 {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .m-2-1 {
        float: left;
        width: calc(49% - 25px);
        margin-left: 50px;
        height: 100%;

        &:first-child {
            margin-left: 0;
        }
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
        width: 26%;
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
        width: 74%;
        height: 266px;

        .u-list {
            margin-top: 10px;
            width: 100%;
            height: 44px;
            border-radius: 15px;
            padding: 0 30px;
            font-size: 18px;
            color: #fff;
            background: rgba(25, 139, 255, 0.15);
            display: flex;

            &:first-child {
                margin-top: 0;
            }

            &:nth-child(even) {
                background: rgba(25, 139, 255, 0.08);
            }

            .u-type {
                position: relative;
                float: left;
                width: 20%;
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
                width: 80%;
                height: 100%;
                line-height: 44px;
                padding-left: 30px;

                &::before {
                    position: absolute;
                    top: 5px;
                    left: 0;
                    content: url(../../../assets/img/11-icon.png);
                    width: 14px;
                    height: 20px;
                }
            }
        }
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
// 垃圾分类
.m-ljfl {
  width: 100%;
  height: 250px;
//   background: url(../../assets/img/11-ljfl-bg.png) center bottom no-repeat;
}
    // 中转站情况
    .m-zzzqk-1 {
        width: 100%;
        height: 120px;
        display: flex;

        .u-zzzqk-1 {
            float: left;
            width: calc(100% / 3 - 20px);
            height: 100%;
            padding: 15px;
            margin-left: 30px;
            background: url(../../../assets/img/11-zzzqk-1.png) no-repeat;

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


}
</style>
  