<template>
  <div>
    <template v-if="permutation === 'col'">
      <el-row type="flex" :gutter="20" v-for="(item, i) in Math.max(...list.map(v => v.length), 0)" :key="i + 's'">
        <el-col
          v-for="(ele, j) in list.length"
          class="item"
          :span="list[j][i] && list[j][i].span ? list[j][i].span : 6"
          :key="j + 's'"
        >
          <template v-if="list[j][i]">
            <span class="label">{{ list[j][i].label }}</span>
            <slot v-if="list[j][i].slotName" :name="list[j][i].slotName" :row="list[j][i]" />
            <span v-else class="value">{{ list[j][i].value || '--' }}</span>
          </template>
        </el-col>
      </el-row>
    </template>
    <template v-else>
      <el-row class="item" v-for="(item, i) in list" :key="i + 's'">
        <el-col :span="ele.span || 6" v-for="(ele, j) in item" :key="j + 's'">
          <span class="label">{{ ele.label }}</span>
          <slot v-if="ele.slotName" :name="ele.slotName" :row="ele" />
          <span v-else class="value">{{ ele.value }}</span>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    permutation: {
      type: String,
      default: 'col'
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  created() {
    console.log(Math.max(...this.list.map(v => v.length), 0));
  }
};
</script>

<style lang="scss" scoped>
.item {
  font-size: 12px;
}
</style>
