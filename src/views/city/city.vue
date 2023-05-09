<template>
  <div class="index">
    <!-- 开头标题 -->
    <BigTitle :BigTitle="bigTitle"></BigTitle>
    <div class="left">
      <left></left>
    </div>
    <div class="center" style="padding-top:170px">
      <Map></Map>
    </div>
    <div class="right">
      <right></right>
    </div>
  </div>
</template>
<script>
import BigTitle from "@/components/bgtitle.vue";
import left from "./components/left.vue";
import right from "./components/right.vue";
import Map from './components/map.vue'

export default {
  name: 'city',
  components: {
    BigTitle,
    left,
    right,
    Map
  },

  data() {
    return {
      bigTitle: "城市运营监管",
    };
  },

  created() {
  },

  mounted() {

  },

  methods: {

  },

  filters: {

  },

  computed: {

  },

  watch: {

  },

  destroyed() {

  }

}
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  background: #00040f;
  display: flex;
  justify-content: space-between;

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