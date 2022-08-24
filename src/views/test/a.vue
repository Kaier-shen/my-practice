<template>
  <div>a</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('a beforeCreate');
  },
  created() {
    console.log('a created');
  },
  beforeMount() {
    console.log('a beforeMount');
  },
  mounted() {
    console.log('a mounted');
  },
  beforeUpdate() {
    console.log('a beforeUpdate');
  },
  updated() {
    console.log('a updated');
  },
  beforeDestroy() {
    console.log('a beforeDestroy');
  },
  destroyed() {
    console.log('a destroyed');
  }
};
</script>

<style></style>
