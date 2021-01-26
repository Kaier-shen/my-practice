<template>
  <div class="tree">
    <el-input :placeholder="placeholder" v-model.trim="filterText" />
    <el-tree
      ref="tree"
      :data="list"
      :props="defaultProps"
      :node-key="nodeKey"
      :default-checked-keys="checkedKeys"
      :default-expanded-keys="expandedKeys"
      :filter-node-method="filterNode"
      highlight-current
      @node-click="clickNode"
    >
      <span slot-scope="{ data }">
        <!-- <span v-if="!filterText"> {{ data[defaultProps.label] }}</span> -->
        <span
          class="el-tree-node__label"
          v-html="
            data[defaultProps.label].replace(
              new RegExp(`(${filterText.replace(/([/*.\\])/g, '\\$1')})`, 'ig'),
              `<span style='color: #fc652f'>$1</span>`
            )
          "
        />
      </span>
    </el-tree>
  </div>
</template>
<script>
export default {
  name: 'customTree',
  props: {
    list: {
      // 树数据
      type: Array,
      default: () => []
    },
    expandedKeys: {
      // 默认展开节点数组
      type: Array,
      default: () => [1, 4, 9]
    },
    checkedKeys: {
      // 默认勾选节点数组
      type: Array,
      default: () => [9]
    },
    defaultProps: {
      type: Object,
      default: () => {
        return {
          label: 'label',
          children: 'children'
        };
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    placeholder: {
      type: String,
      default: '输入关键字搜索'
    }
  },
  data() {
    return {
      filterText: ''
    };
  },
  created() {
    this.$watch('filterText', this.filterTree);
    if (this.checkedKeys.length) {
      this.$nextTick(() => {
        this.$refs.tree.setCurrentKey(this.checkedKeys[0]);
        this.$emit('clickNode', this.$refs.tree.getCurrentNode());
      });
    }
  },
  methods: {
    filterNode(value, data, node) {
      if (!value) return true;
      const _array = [];
      const getReturnNode = (node, value) => {
        const isPass =
          node.data &&
          node.data.label &&
          node.data.label
            .toLocaleLowerCase()
            .indexOf(value.toLocaleLowerCase()) !== -1;
        if (isPass) _array.push(isPass);
        if (!isPass && node.level !== 1 && node.parent)
          getReturnNode(node.parent, value);
      };
      getReturnNode(node, value);
      return _array.length;
    },
    filterTree(v) {
      this.$refs.tree.filter(v);
    },
    clickNode(data) {
      this.$emit('clickNode', data);
    }
  }
};
</script>
<style lang="scss">
.tree {
  /deep/ .el-tree-node__content {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  /deep/
    .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background: #f5f7fa;
    color: #fc652f;
  }
  /deep/ .el-tree-node__expand-icon.expanded {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  /deep/ .el-icon-caret-right:before {
    font-size: 18px;
    content: '\e78a';
  }
  /deep/ .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
    font-size: 18px;
    content: '\e784';
  }
  /deep/ .el-tree-node__content > .el-tree-node__expand-icon {
    display: flex;
    align-items: center;
  }
}
</style>
