<template>
  <div class="centerCenter">
    <ul class="m-jcxx">
      <li v-for="(item, index) in jcxxData" :key="index" class="m-jc-box">
        <div class="u-name">{{ item.title }}</div>
        <div class="u-num">{{ item.value }}</div>
        <div :class="['u-total', 'bg' + (index + 1)]">{{ item.total }}</div>
      </li>

    </ul>
    <!-- 中国地图 -->
    <chine-echarts/>
  </div>
</template>

<script>
import chineEcharts from "./chinaMap";

export default {
  name: "customMap",
  components: {
    chineEcharts,
  },
  data() {
    return {
      jcxxData: [
        {
          value: 23499,
          title: "运营项目",
          total: "合同总额:10000",
        },
        {
          value: 3320,
          title: "在建项目",
          total: "合同总额:10000",
        },
        {
          value: 9988,
          title: "筹建项目",
          total: "合同总额:10000",
        },
      ],
    };
  },
  mounted() {
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.centerCenter {
  width: 1886px;
  height: 1720px;
  background: url("../../../../assets/center/circleMap.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
  ul {
    margin-top: 85px;
    width: 100%;
    height: auto;
    overflow: hidden;
    .m-jc-box {
      float: left;
      width: calc(100% / 3 - 50px);
      height: 307px;
      margin-left: 50px;
      text-align: center;
      padding: 22px 0;
      position: relative;
      border-top: 5px solid #00ffa8;
      background-image: linear-gradient(to bottom, rgba(0, 255, 166, 0.72), transparent);
      &:first-child {
        margin-left: 0;
      }
      &:nth-child(1) {
        border-top: 5px solid #ffa000;
        background-image: linear-gradient(to bottom, rgba(255, 160, 0, 0.72), transparent);
      }
      &:nth-child(2) {
        border-top: 5px solid #00a2ff;
        background-image: linear-gradient(to bottom, rgba(0, 162, 255, 0.72), transparent);
      }
      .u-name {
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        font-size: 40px;
        color: #fff;
      }
      .u-num {
        height: 90px;
        line-height: 90px;
        margin-top: 40px;
        text-align: center;
        color: #fff;
        opacity: 0.8;
        font-size: 90px;
      }
      .u-total {
        width: 100%;
        height: 66px;
        line-height: 66px;
        text-align: center;
        color: #fff;
        font-size: 28px;
        position: absolute;
        left: 0;
        bottom: 0;
        opacity: 0.8;
        &.bg1 {
          background: #ffa000;
        }
        &.bg2 {
          background: #00a2ff;
        }
        &.bg3 {
          background: #00ffa8;
        }
      }
    }
  }
}
</style>
