import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";
import Home from "../views/three/index.vue";

Vue.use(VueRouter);

const cNname = {
  Home: "Home",
  HomeLayout: "HomeLayout",
  ME: "ME",
  Common: "Common",
  TestLayout: "TestLayout",
  Test: "Test"
};

export const routes = [
  {
    path: "/",
    redirect: "/home/list",
    hidden: true,
    meta: {
      hideInBread: true
    }
  },
  {
    path: "/home",
    name: cNname.HomeLayout,
    redirect: "/home/list",
    component: Layout,
    meta: {
      hideInBread: true,
      icon: "el-icon-menu",
      title: "主页"
    },
    children: [
      {
        path: "/home/me",
        name: cNname.ME,
        component: () => import("@/views/me/index.vue"),
        meta: {
          title: "我的",
          icon: "el-icon-menu"
        }
      },
      {
        path: "/home/list",
        name: cNname.Home,
        component: Home,
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    path: "/test",
    name: cNname.TestLayout,
    redirect: "/test/list",
    component: Layout,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: "/test/list",
        name: cNname.Test,
        component: () => import("@/views/test/index.vue"),
        meta: {
          title: "测试",
          icon: "el-icon-menu"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
