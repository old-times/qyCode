<template>
  <div class="bgtitle">
    {{ BigTitle }}
  </div>
</template>

<script>
export default {
  name: "BigTitle",
  props: ["BigTitle"],
};
</script>

<style scoped lang="less">
.bgtitle {
  width: 100%;
  height: 222px;
  background: url("../assets/bigTitle.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  line-height: 158px;
  font-size: 58px;
  color: #fff;
}
</style>
