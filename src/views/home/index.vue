<template>
  <div class="app-container">
    <pl-table
      ref="plTable"
      :data="list"
      big-data-checkbox
      :height="height"
      use-virtual
      :row-height="rowHeight"
      :row-key="row => row.id"
    >
      <pl-table-column reserve-selection type="selection" width="55" />
      <pl-table-column type="index" width="100" fixed />
      <pl-table-column
        v-for="item in columns"
        :key="item.id"
        :resizable="item.resizable"
        :show-overflow-tooltip="item.showOverflowTooltip"
        :prop="item.prop"
        :label="item.label"
        :fixed="item.fixed"
        :width="item.width"
      />
    </pl-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageinfo.page"
      :page-sizes="[10, 100, 500, 1000]"
      :page-size="pageinfo.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageinfo.total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      allList: Array.from({ length: 1000 }, (_, idx) => ({
        id: idx + 1,
        date: '2016-05-03',
        name: 1,
        ab: '欢迎使用pl-table',
        address: 1 + idx
      })),
      rowHeight: 40,
      columns: [
        {
          prop: 'address',
          label: '日期',
          width: 120,
          treeNode: true,
          showOverflowTooltip: true,
          fixed: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true,
          fixed: true
        },
        {
          prop: 'address',
          label: '噜噜噜',
          width: 230,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        { prop: 'address', label: '噜噜噜', showOverflowTooltip: true },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '日期',
          width: 120,
          treeNode: true,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '噜噜噜',
          width: 230,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        { prop: 'address', label: '噜噜噜', showOverflowTooltip: true },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '日期',
          width: 120,
          treeNode: true,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '噜噜噜',
          width: 230,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '地址',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        },
        { prop: 'address', label: '噜噜噜', showOverflowTooltip: true },
        {
          prop: 'address',
          label: '娃哈哈',
          width: 100,
          showOverflowTooltip: true
        }
      ],
      height: 500,
      pageinfo: {
        page: 1,
        size: 10,
        total: 0
      },
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    allSelection() {
      this.$refs.plTable.toggleAllSelection();
    },
    clearSelection() {
      this.$refs.plTable.clearSelection();
    },
    getList() {
      const data = this.allList.slice(
        (this.pageinfo.page - 1) * this.pageinfo.size,
        this.pageinfo.page * this.pageinfo.size
      );
      this.pageinfo.total = this.allList.length;
      this.list = Object.freeze(data);
    },
    handleSizeChange(v) {
      this.pageinfo.page = 1;
      this.pageinfo.size = v;
      this.getList();
    },
    handleCurrentChange(v) {
      this.pageinfo.page = v;
      this.getList();
    }
  }
};
</script>
<style>
body,
html {
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
body ::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background-color: rgba(144, 147, 153, 0.5);
}
.selectTr td {
  background: #ccc !important;
  color: red !important;
}
</style>
