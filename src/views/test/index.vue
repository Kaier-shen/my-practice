<template>
  <div class="app-container">
    <myText ref="myText" />
    <el-button @click="getComp" size="samll">获取dom</el-button>
  </div>
</template>

<script>
import myText from './conmponent/text.vue';
export default {
  components: {
    myText
  },
  methods: {
    getComp() {
      console.log(this.$refs.myText.getComp());
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  color: yellowgreen;
  outline: transparent none 0px !important;
  outline-offset: 0px !important;
}
</style>
