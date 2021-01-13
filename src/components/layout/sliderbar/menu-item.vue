<template>
  <div>
    <div v-for="item in menus" :key="item.id" :index="item.path">
      <!-- 有子菜单 -->
      <el-submenu :index="item.path" v-if="item.children.length">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <menu-item :menus="item.children" />
      </el-submenu>
      <!-- 无子菜单 -->
      <el-menu-item :index="item.path" v-else>
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  name: "menu-item"
};
</script>
