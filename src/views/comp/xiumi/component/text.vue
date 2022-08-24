<template>
  <div v-html="detail.detailHtml" :contenteditable="true"></div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
