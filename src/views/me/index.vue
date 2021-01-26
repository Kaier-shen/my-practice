<template>
  <div>
    <h1>This is my page</h1>
    <el-button @click="go">点击我呀</el-button>
  </div>
</template>

<script>
export default {
  created() {
    // this.getdata();
  },
  methods: {
    getdata() {
      this.$axios
        .get('/user?ID=12345')
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    go() {
      this.getdata();
    }
  }
};
</script>
