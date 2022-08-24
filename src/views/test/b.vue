<template>
  <div>b</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('b beforeCreate');
  },
  created() {
    console.log('b created');
  },
  beforeMount() {
    console.log('b beforeMount');
  },
  mounted() {
    console.log('b mounted');
  },
  beforeUpdate() {
    console.log('b beforeUpdate');
  },
  updated() {
    console.log('b updated');
  },
  beforeDestroy() {
    console.log('b beforeDestroy');
  },
  destroyed() {
    console.log('b destroyed');
  }
};
</script>

<style></style>
