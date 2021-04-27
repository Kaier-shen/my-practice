<template>
  <div>
    <div v-for="item in menus" :key="item.id">
      <el-submenu
        v-if="item.children && item.children.length > 0"
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.icon" class="iconfont ui-mr-10"></i>
          <span v-show="!isCollapse" slot="title">{{ item.name }}</span>
        </template>
        <child-menu :menus="item.children" :isCollapse="isCollapse" />
      </el-submenu>
      <el-menu-item :index="item.path" v-else>
        <i :class="item.icon" class="iconfont ui-mr-10"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'childMenu',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    isCollapse: {
      type: Boolean
    }
  }
};
</script>
