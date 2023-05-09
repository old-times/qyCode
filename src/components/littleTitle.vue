<template>
  <div class="titleName">
    <span>
      {{ titleName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "titleName",
  props: ["titleName"],
};
</script>

<style scoped lang="less">
.titleName {
  width: 680px;
  height: 83px;
  background: url("../assets/title.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 125px;
  // font-size: 40px;
  color: white;
  position: relative;
  span {
    color: white;
    font-size: 44px;
    text-shadow: 2px 3px 1px  rgba(0,174,255,0.4);
    position: absolute;
    top: -20px;
    left: 178px;
  }
}
</style>
