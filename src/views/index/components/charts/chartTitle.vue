<template>
  <div class="chartTitle">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
div.chartTitle {
  width: 100%;
  height: 105px;
  line-height: 105px;
  text-align: left;
  padding-left: 95px;
  background-image: url("../../../../assets/left/pub_title_bg_5.png");
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 40px;
  color: #fff;
}
</style>
