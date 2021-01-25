<template>
  <el-tooltip
    :effect="effect"
    :disabled="isShowTooltip"
    :content="`${content}`"
    :placement="placement"
  >
    <p
      class="text-nowrap ui-ellipsis"
      :style="wrapperStyle"
      ref="wrapper"
      @mouseover="judge"
    >
      <span :contentStyle="contentStyle" ref="content">{{
        content || "--"
      }}</span>
    </p>
  </el-tooltip>
</template>

<script>
export default {
  name: "textTooltip",
  props: {
    content: {
      // 内容
      type: [Number, String]
    },
    effect: {
      // 模式
      type: String,
      default: "light"
    },
    placement: {
      // 位置
      type: String,
      default: "top"
    },
    wrapperStyle: {
      // 容器样式
      type: Object,
      default: () => {}
    },
    contentStyle: {
      // 内容样式
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isShowTooltip: false
    };
  },
  methods: {
    judge() {
      const parentWidth = this.$refs.wrapper.offsetWidth;
      const contentWidth = this.$refs.content.offsetWidth;
      this.isShowTooltip = parentWidth >= contentWidth;
    }
  }
};
</script>

<style lang="scss" scoped>
.text-nowrap {
  width: 100%;
}
</style>
