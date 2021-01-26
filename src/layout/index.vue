<template>
  <div>
    <Sliderbar />
    <div class="main">
      <div class="header">
        <Navbar />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sliderbar from './sliderbar/index.vue';
import Navbar from './navbar/index.vue';
export default {
  components: {
    Sliderbar,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding-left: 64px;
}

.header {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 14px;
}

.content {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 48px);
  background: #f3f4f6;
}
</style>
