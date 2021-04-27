<template>
  <div class="app-container">
    <!-- <TextTooltip content="hehehehe" /> -->
    <Tree :list="treeData" />
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
for (let id = 0; id <= 10000; id++) {
  list.push({
    id,
    value: Math.random()
      .toString(16)
      .substr(10)
  });
}
// import TextTooltip from "@/components/text-tooltip/index.vue";
import VirtualScroll from '@/components/virtual-scroll/index.vue';
import Tree from '@/components/tree/index.vue';
export default {
  components: {
    // TextTooltip
    Tree,
    VirtualScroll
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: 'abCD',
          children: [
            {
              id: 4,
              label: 'ABCDEFG',
              children: [
                {
                  id: 9,
                  label: '三级1-1-1'
                },
                {
                  id: 10,
                  label: '三级1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级2',
          children: [
            {
              id: 5,
              label: '二级2-1'
            },
            {
              id: 6,
              label: '二级2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级3',
          children: [
            {
              id: 7,
              label: '二级3-1'
            },
            {
              id: 8,
              label: '二级3-2'
            }
          ]
        }
      ],
      list
    };
  }
};
</script>
