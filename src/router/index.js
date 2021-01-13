import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layout/index.vue";
import Test1 from "../views/Home.vue";

Vue.use(VueRouter);

const cNname = {
  Test1: "Test1",
  Test1Layout: "Test1Layout",
  Test2: "Test2",
  Test2Layout: "Test2Layout"
};

export const routes = [
  {
    path: "/",
    redirect: "test1/list",
    hidden: true,
    meta: {
      hideInBread: true
    }
  },
  {
    path: "/test1",
    name: cNname.Test1Layout,
    redirect: "/test1/list",
    component: Layout,
    meta: {
      hideInBread: true,
      icon: "el-icon-menu"
    },
    children: [
      {
        path: "/test1/list",
        name: cNname.Test1,
        component: Test1,
        meta: {
          title: "测试一",
          icon: "el-icon-menu"
        }
      }
    ]
  },
  {
    path: "/test2",
    name: cNname.Test2Layout,
    redirect: "/test2/list",
    component: Layout,
    meta: {
      hideInBread: true,
      icon: "el-icon-menu"
    },
    children: [
      {
        path: "/test2/list",
        name: cNname.Test2,
        component: () => {
          import(/* webpackChunkName: "about" */ "@/views/About.vue");
        },
        meta: {
          title: "测试二",
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
