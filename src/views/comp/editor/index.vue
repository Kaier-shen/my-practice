<template>
  <div class="app-container">
    <DetailList :list="list" />
  </div>
</template>

<script>
import DetailList from '@/components/DetailList/index.vue';
export default {
  components: {
    DetailList
  },
  data() {
    return {};
  },
  computed: {
    list() {
      return [
        [
          { label: '第一列：', value: '第一列第一排' },
          { label: '第一列：', value: '第一列第二排' },
          { label: '第一列：', value: '第一列第三排' },
          { label: '第一列：', value: '第一列第四排' }
        ],
        [
          { label: '第二列：', value: '第二列第一排' },
          { label: '第二列：', value: '第二列第二排' },
          { label: '第二列：', value: '第二列第三排' },
          { label: '第二列：', value: '第二列第四排' }
        ],
        [
          { label: '第三列：', value: '第三列第一排' },
          { label: '第三列：', value: '第三列第二排' },
          { label: '第三列：', value: '第三列第三排' },
          { label: '第三列：', value: '第三列第四排' },
          { label: '第三列：', value: '第三列第五排' }
        ]
      ];
    }
  }
};
</script>

<style></style>
