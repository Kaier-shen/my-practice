<template>
  <div class="app-container">
    <span>{{ count }}</span>
    <el-button @click="add" size="samll">+1</el-button>
    <ademo :count="count" />""
    <bdemo :count="count" />
    <el-select @keyup.native.enter="getlist" v-model="value" multiple placeholder="请选择" filterable>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.component('ademo', {
  props: ['count'],
  render(h) {
    console.log('a render');
    return h('div', {});
  },
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
});
Vue.component('bdemo', {
  props: ['count'],
  render(h) {
    console.log('b render');
    return h('div', {}, 'b');
  },
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
});
export default {
  data() {
    return {
      count: 0,
      options: [],
      value: ''
    };
  },
  methods: {
    add() {
      this.count++;
    },
    getlist(e) {
      if (!e.target.value) return;
      const options = [
        {
          value: '1',
          label: 'abc'
        },
        {
          value: '2',
          label: 'efg'
        }
      ];
      this.options = options.filter(v => v.label.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    }
  },
  beforeCreate() {
    console.log('app beforeCreate');
  },
  created() {
    console.log('app created');
    this.value = ['1', '2'];
    this.options = [
      {
        value: '1',
        label: 'abc'
      },
      {
        value: '2',
        label: 'efg'
      }
    ];
  },
  beforeMount() {
    console.log('app beforeMount');
  },
  mounted() {
    console.log('app mounted');
  },
  beforeUpdate() {
    console.log('app beforeUpdate');
  },
  updated() {
    console.log('app updated');
  },
  beforeDestroy() {
    console.log('app beforeDestroy');
  },
  destroyed() {
    console.log('app destroyed');
  }
};
</script>

<style lang="scss" scoped></style>
