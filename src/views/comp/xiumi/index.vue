<template>
  <div class="app-container">
    <div class="left">
      <div class="item" v-for="(v, i) in list" :key="v.type" @click="handleClick(v, i)">
        {{ v }}
      </div>
    </div>
    <div class="right">
      <template v-for="v in compList">
        <component :is="v.comp" :key="v.type" :detail="v"></component>
      </template>
    </div>
  </div>
</template>

<script>
import Texts from './component/text.vue';
import Test from './component/test.vue';
export default {
  name: 'xiumi',
  components: {
    Texts,
    Test
  },
  data() {
    return {
      list: [
        { type: 'text', comp: 'Texts', detailHtml: '<span>hello word</span>' },
        { type: 'test', comp: 'Test' }
      ],
      compList: []
    };
  },
  methods: {
    handleClick(v, i) {
      this.compList.push({ ...v, type: v.type });
    }
  }
};
</script>

<style lang="less" scoped>
.app-container {
  flex-direction: row;
  .left {
    width: 200px;
    .item {
      cursor: pointer;
    }
  }
  .right {
    flex: 1;
    background-color: bisque;
  }
}
</style>
