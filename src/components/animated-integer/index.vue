<template>
  <span>{{ tweeningValue }}</span>
</template>

<script>
import TWEEN from '@tweenjs/tween.js';
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      tweeningValue: 0
    };
  },
  watch: {
    value(newValue, oldValue) {
      this.tween(oldValue, newValue);
    }
  },
  mounted() {
    console.log(this.value);
    this.tween(0, this.value);
  },
  methods: {
    tween: function(startValue, endValue) {
      var vm = this;
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function() {
          vm.tweeningValue = this.tweeningValue;
        })
        .start();
      animate();
    }
  }
};
</script>

<style></style>
