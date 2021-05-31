<template>
  <div
    id="ha"
    :style="comp.style"
    contenteditable="true"
    v-html="comp.text"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      comp: {
        text: '<p style=""><strong>昊天锤</strong></p>',
        style: {
          ['font-size']: '18px',
          color: 'red'
        }
      }
    };
  },
  methods: {
    getComp() {
      return document.querySelector('#ha');
    }
  }
};
</script>

<style></style>
