<template>
  <div class="index">
    <!-- 开头标题 -->
    <BigTitle :BigTitle="bigTitle"></BigTitle>
    <div class="left" style="height: calc(100% - 125px);">
      <left></left>
    </div>
    <div class="center">
      <center></center>
    </div>
    <div class="right">
      <right></right>
    </div>
  </div>
</template>
<script>
import BigTitle from "@/components/bgtitle.vue";
import left from "./components/left.vue";
import center from "./components/center.vue";
import right from "./components/right.vue";
export default {
  name: "city",
  components: {
    BigTitle,
    left,
    center,
    right
  },
  data() {
    return {
      bigTitle: "城市管理一体化平台"
    };
  }
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  background: #00040f;
  display: flex;
  justify-content: space-between;
  position: relative;

  .left,
  .right {
    width: 2236px;
    height: 100%;
    background: url("../../assets/bgImg.png");
    background-size: 100% 100%;
  }

  .center {
    flex: 1;
  }
}
</style>
