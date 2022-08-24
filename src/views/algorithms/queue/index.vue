<template>
  <div class="app-container">
    <!-- <div>当前数据: {{ list }}</div>
    <div>最后一个是: {{ last }}</div>
    <div>当前队列有几条: {{ size }}</div>
    <div>当前队列是否为空: {{ isEmpty }}</div>
    <div class="box">
      <el-button size="small" @click="handle('add')">添加</el-button>
      <el-button size="small" @click="handle('pop')">取出</el-button>
      <el-button size="small" @click="handle('clear')">清空</el-button>
    </div> -->
    <div>当前数据: {{ list }}</div>
    <div>最后一个是: {{ last }}</div>
    <div>第一个是: {{ first }}</div>
    <div>当前队列有几条: {{ size }}</div>
    <div>当前队列是否为空: {{ isEmpty }}</div>
    <div>toString: {{ str }}</div>
    <div class="box">
      <el-button size="small" @click="handle('addfront')">头部添加</el-button>
      <el-button size="small" @click="handle('addback')">尾部添加</el-button>
      <el-button size="small" @click="handle('popfront')">头部取出</el-button>
      <el-button size="small" @click="handle('popback')">尾部取出</el-button>
      <el-button size="small" @click="handle('clear')">清空</el-button>
    </div>
  </div>
</template>

<script>
import Queue from './deque';
import Queues from './queue';
export default {
  data() {
    return {
      queue: null
    };
  },
  computed: {
    list() {
      return this.queue && this.queue.items;
    },
    size() {
      return this.queue && this.queue.size();
    },
    last() {
      return this.queue && this.queue.peekBack();
    },
    first() {
      return this.queue && this.queue.peekFront();
    },
    isEmpty() {
      return this.queue && this.queue.isEmpty();
    },
    str() {
      return this.queue && this.queue.toString();
    }
  },
  mounted() {
    this.queue = new Queue();
    let res = this.hotPotato(['jack', 'rose', 'kaier', 'linda', 'carl'], 10);
    // res.loser.forEach(v => {
    //   console.log(`${v}在游戏中失败`);
    // });
    // console.log(`winner ${res.winner}`);
    console.log(this.palindromeChecker('1234321'));
  },
  methods: {
    handle(action) {
      switch (action) {
        case 'addfront':
          this.queue.addFront(Math.floor(Math.random() * 10000));
          break;
        case 'addback':
          this.queue.addBack(Math.floor(Math.random() * 10000));
          break;
        case 'popfront':
          console.log(this.queue.removeFront());
          break;
        case 'popback':
          console.log(this.queue.removeBack());
          break;
        case 'clear':
          this.queue.clear();
          break;
        default:
          break;
      }
    },
    hotPotato(list, num) {
      let queue = new Queues();
      let loser = [];
      for (let index = 0; index < list.length; index++) {
        queue.enqueue(list[index]);
      }
      while (queue.size() > 1) {
        for (let index = 0; index < num; index++) {
          queue.enqueue(queue.dequeue());
        }
        loser.push(queue.dequeue());
      }
      return {
        loser,
        winner: queue.dequeue()
      };
    },
    palindromeChecker(str) {
      if (str === undefined || str === null || (str == null && str.length === 0)) {
        return false;
      }
      let queue = new Queue();
      let astr = str
        .toLocaleLowerCase()
        .split(' ')
        .join('');
      for (let index = 0; index < astr.length; index++) {
        queue.addBack(astr.charAt(index));
      }
      let isEqual = true;
      let firstChar, lastChar;
      while (queue.size() > 1 && isEqual) {
        firstChar = queue.removeFront();
        lastChar = queue.removeBack();
        console.log(firstChar, lastChar);
        if (firstChar !== lastChar) {
          isEqual = false;
        }
      }
      return isEqual;
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  padding: 20px 0;
}
</style>
