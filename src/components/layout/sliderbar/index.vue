<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :default-active="$route.path"
      @mouseenter.native="isCollapse = false"
      @mouseleave.native="isCollapse = true"
    >
      <menu-item :menus="list" />
    </el-menu>
  </div>
</template>

<script>
import menuItem from "./menu-item";
import { routes } from "@/router";

function buildMenu(route, children = []) {
  const fChildren = (route.children || []).filter(v => !v.hidden);
  console.log(fChildren);

  const addNode = () => {
    const menu = {
      id: route.name,
      icon: route.meta.icon || "",
      name: route.meta.title || "",
      subTitle: route.meta.subTitle || "",
      path: route.path,
      children: []
    };
    children.push(menu);
    return menu;
  };

  if (!fChildren.length) {
    addNode();
  } else {
    if (fChildren.length === 1) {
      buildMenu(fChildren[0], children);
    } else {
      const menu = addNode();
      fChildren.forEach(el => {
        buildMenu(el, menu.children);
      });
    }
  }
}

export default {
  components: {
    menuItem
  },
  data() {
    return {
      isCollapse: true,
      routes,
      list: []
    };
  },

  mounted() {
    routes.forEach(v => {
      !v.hidden && buildMenu(v, this.list, []);
    });
    console.log(routes);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  position: fixed;
  z-index: 10001;
  height: 100%;
}
</style>
