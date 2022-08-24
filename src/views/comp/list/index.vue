<template>
  <div class="app-container">
    <VirtualScroll :list="list">
      <template v-slot="{ item }">
        <span style="color: red">{{ item.id }}</span> --------
        <span style="color: red">{{ item.value }}</span>
      </template>
    </VirtualScroll>
  </div>
</template>

<script>
let list = [];
for (let id = 0; id <= 100000; id++) {
  list.push({
    id,
    value: Math.random()
      .toString(16)
      .substr(10)
  });
}
import VirtualScroll from '@/components/virtual-scroll/index.vue';
export default {
  components: {
    VirtualScroll
  },
  data() {
    return {
      list
    };
  }
};
</script>

<style></style>
