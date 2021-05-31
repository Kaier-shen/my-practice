<template>
  <div class="app-container">
    <Tree :list="treeData" />
  </div>
</template>

<script>
import Tree from '@/components/tree/index.vue';
export default {
  components: {
    Tree
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
      ]
    };
  }
};
</script>
