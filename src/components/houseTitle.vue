<template>
  <div class="houseTitle">
    {{ houseTitle }}
  </div>
</template>

<script>
export default {
  name: "houseTitle",
  props: ["houseTitle"],
};
</script>

<style scoped lang="less">
.houseTitle {
  width: 1029px;
  height: 102px;
  background: url("../assets/houseTitle.png") no-repeat;
  background-size: 100% 100%;
  font-size: 40px;
  color: white;
  padding-left: 90px;
  line-height: 102px;
}
</style>
