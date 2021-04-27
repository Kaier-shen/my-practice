<template>
  <div class="app-container">
    <div>当前数据: {{ list }}</div>
    <div>最后一个是: {{ last }}</div>
    <div>当前栈有几条: {{ size }}</div>
    <div>当前栈是否为空: {{ isEmpty }}</div>
    <div class="box">
      <el-button size="small" @click="handle('add')">添加</el-button>
      <el-button size="small" @click="handle('pop')">取出</el-button>
      <el-button size="small" @click="handle('clear')">清空</el-button>
    </div>
  </div>
</template>

<script>
import Stack from './stack-array-weakmap';
export default {
  data() {
    return {
      stack: null
    };
  },
  computed: {
    list() {
      return this.stack && this.stack.items;
    },
    size() {
      return this.stack && this.stack.size();
    },
    last() {
      console.log(this.stack && this.stack.peek());
      return this.stack && this.stack.peek();
    },
    isEmpty() {
      return this.stack && this.stack.isEmpty();
    }
  },
  mounted() {
    this.stack = new Stack();
  },
  methods: {
    handle(action) {
      switch (action) {
        case 'add':
          this.stack.push(Math.floor(Math.random() * 10000));
          break;
        case 'pop':
          console.log(this.stack.pop());
          break;
        case 'clear':
          this.stack.clear();
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  padding: 20px 0;
}
</style>
