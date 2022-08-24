<template>
  <div ref="list" class="list" @scroll="handleScroll">
    <div :style="wrapperStyle">
      <div class="item" v-for="item in currentList" :key="item.id">
        <slot :item="item">
          <span style="color: red">{{ item.id }}</span> --------
          <span style="color: red">{{ item.value }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash';
export default {
  name: 'app',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      startIndex: 0,
      size: 10,
      itemHeight: 40
    };
  },
  computed: {
    endIndex() {
      let endIndex = this.startIndex + this.size * 2;
      if (!this.list[endIndex]) {
        endIndex = this.list.length - 1;
      }
      return endIndex;
    },
    currentList() {
      let startIndex = 0;
      if (this.startIndex > this.size) {
        startIndex = this.startIndex - this.size;
      } else {
        startIndex = 0;
      }
      return this.list.slice(startIndex, this.endIndex);
    },
    wrapperStyle() {
      let startIndex = 0;
      if (this.startIndex > this.size) {
        startIndex = this.startIndex - this.size;
      } else {
        startIndex = 0;
      }
      return {
        padding: `${startIndex * this.itemHeight}px 0 ${(this.list.length - 1 - this.endIndex) * this.itemHeight}px`
      };
    }
  },
  mounted() {
    this.setSize();
    window.addEventListener('resize', this.setSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setSize);
  },
  methods: {
    handleScroll: throttle(function() {
      this.startIndex = Math.floor(this.$refs.list.scrollTop / this.itemHeight);
    }, 60),
    setSize() {
      this.size = Math.floor(this.$refs.list.offsetHeight / this.itemHeight);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  height: 100%;
  overflow: auto;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
.item {
  height: 40px;
  line-height: 1;
  padding-left: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}
</style>
