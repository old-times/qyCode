<template>
    <div class="left">
        <!-- 基础信息 -->
        <div class="m-jcxx">
            <LittleTitle :titleName="'基础信息'"></LittleTitle>
            <ul style="margin-top:15px;height:200px">
                <li class="m-jc-box" v-for="(item, index) in jcxxData" :key="index">
                    <div class="u-name">{{ item.dtl }}</div>
                    <div class="u-num">{{ item.val }}</div>
                </li>

            </ul>
        </div>
        <!-- 服务概要，服务项目类型 -->
        <div class="m-2">
            <!-- 服务概要 -->
            <div class="m-2-1">
                <LittleTitle style="margin-top:35px" :titleName="'服务概要'"></LittleTitle>
                <ul style="margin-top: 52px;">
                    <li class="m-line-box" v-for="(item, index) in fwglData" :key="index">
                        <span class="u-title">{{ item.dtl }}</span>
                        <span class="u-txt">{{ item.val }}</span>
                    </li>
                </ul>
            </div>
            <!-- 服务项目类型 -->
            <div class="m-2-1">
                <HouseTitle style="margin-top:35px" :houseTitle="'服务项目类型'"></HouseTitle>
                <ul style="margin-top: 28px;">
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
        <!-- 人员列表,员工画像 -->
        <div class="m-2">
            <!-- 人员列表 -->
            <div class="m-2-1">
                <LittleTitle style="margin-top:35px" :titleName="'人员列表'"></LittleTitle>
                <div style="margin-top: 28px;">
                    <div class="m-rylb-1">
                        <div class="u-name">实际总人数</div>
                        <div class="u-num">
                            <span class="u-num-1">{{ sjzrs }}</span>
                            <span class="u-num-2">人</span>
                        </div>
                    </div>
                    <div class="m-rylb-2">
                        <RylbPie></RylbPie>
                    </div>
                </div>
            </div>
            <!-- 员工画像 -->
            <div class="m-2-1">
                <HouseTitle style="margin-top:35px" :houseTitle="'员工画像'"></HouseTitle>
                <div style="margin-top: 28px;">
                    <YghxRadar></YghxRadar>
                </div>
            </div>
        </div>
        <!-- 项目风采 -->
        <div class="m-2">
            <LittleTitle style="margin-top:35px" :titleName="'项目风采'"></LittleTitle>
            <ul style="margin-top: 35px; height: 230px; overflow: hidden;">
                <li class="u-img" v-for="(item, index) in xmfcData" :key="index">
                    <img :src="item.url" :alt="item.name">
                </li>
            </ul>
        </div>

    </div>
</template>
  
<script>
import LittleTitle from "@/components/littleTitle.vue";
import HouseTitle from "@/components/houseTitle.vue";
import RylbPie from './rylbPie.vue';
import YghxRadar from './yghxRadar.vue';
export default {
    components: {
        LittleTitle,
        HouseTitle,
        RylbPie,
        YghxRadar
    },
    data() {
        return {
            jcxxData: [],
            fwglData: [],
            fwxmlxData: [],
            sjzrs: '',
            xmfcData:[],
            
        };
    },
    mounted() {
        this.getJcxx();
        this.getFwgl();
        this.getFwxmlx();
        this.getSjzrs();
        this.getXmfc();
    },
    methods: {
        // 基础信息
        getJcxx() {
            let res = this.$datautils.getData("城市业务板块/基础信息", "图文");
            this.jcxxData = res;
            console.log(res, '基础信息')
        },
        // 服务概要
        getFwgl() {
            let res = this.$datautils.getData("城市业务板块/服务概要", "图文");
            this.fwglData = res;
            console.log(res, '服务概要')
        },
        // 服务项目类型
        getFwxmlx() {
            let res = this.$datautils.getData("城市业务板块/服务项目类型", "图文");
            this.fwxmlxData = res;
            console.log(res, '服务项目类型')
        },
        // 人员列表-实际总人数
        getSjzrs() {
            let res = this.$datautils.getData("城市业务板块/人员列表", "图文");
            res.forEach(item => {
                this.sjzrs = item.val || 0
            });
            console.log(res, '实际总人数')
        },
        // 项目风采
        getXmfc() {
            let res = this.$datautils.getData("城市业务板块/项目风采", "列表");
            if (res[0].vals && res[0].vals.length > 0) {
               this.xmfcData=res[0].vals
            }
            console.log(res, '项目风采')
        }

    },
};
</script>
  
<style lang="less" scoped>
.left {
    padding: 0 0 0 68px;
    box-sizing: border-box;

    // 基础信息
    .m-jcxx {
        width: 100%;
        height: auto;
        overflow: hidden;

        .m-jc-box {
            float: left;
            width: calc(100% / 5 - 50px);
            height: 160px;
            margin-left: 50px;
            text-align: center;
            padding: 22px 0;
            border-top: 5px solid #00ffa8;
            border-bottom: 15px solid rgba(0, 255, 166, 0.72);
            background-image: linear-gradient(to bottom, rgba(0, 255, 166, 0.72), transparent);

            &:first-child {
                margin-left: 0;
            }

            &:nth-child(1) {
                border-top: 5px solid #ffa000;
                border-bottom: 15px solid rgba(255, 160, 0, 0.72);
                background-image: linear-gradient(to bottom, rgba(255, 160, 0, 0.72), transparent);
            }

            &:nth-child(2) {
                border-top: 5px solid #00a2ff;
                border-bottom: 15px solid rgba(0, 162, 255, 0.72);
                background-image: linear-gradient(to bottom, rgba(0, 162, 255, 0.72), transparent);
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

    // 列表
    .m-line-box {
        margin-top: 15px;
        width: calc(100% - 76px);
        height: 45px;
        line-height: 45px;
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

    // 人员列表
    .m-rylb-1 {
        float: left;
        width: 40%;
        text-align: center;
        height: 280px;
        padding-top: 20px;
        background: url(../../../assets/img/11-img-bg.png) center center no-repeat;

        .u-name {
            padding-top: 60px;
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
</style>
  