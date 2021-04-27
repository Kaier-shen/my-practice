<template>
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
    <child-menu :menus="list" :isCollapse="isCollapse" />
  </el-menu>
</template>

<script>
import childMenu from './child-menu';
import { vueRoutes } from '@/router';

function buildMenu(route, children = []) {
  const fChildren = (route.children || []).filter(v => !v.hidden);
  const addNode = () => {
    const menu = {
      id: route.name,
      icon: route.meta.icon || '',
      name: route.meta.title || '',
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
    childMenu
  },
  data() {
    return {
      isCollapse: true,
      routes: vueRoutes,
      list: []
    };
  },

  mounted() {
    vueRoutes.forEach(v => {
      !v.hidden && buildMenu(v, this.list, []);
    });
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/deep/ .el-icon-arrow-right {
  display: none;
}
.el-menu {
  position: fixed;
  z-index: 10001;
  height: 100%;
}
</style>
