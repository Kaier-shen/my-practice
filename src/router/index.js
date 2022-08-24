import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    redirect: '/home/index',
    hidden: true,
    meta: {
      // hideInBread: true
    }
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: Layout,
    meta: {
      // hideInBread: true,
      icon: 'icon-shouye',
      title: '首页'
    },
    children: [
      {
        path: 'index',
        name: 'home',
        component: Home,
        meta: {
          title: '我的'
        }
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: '测试'
        }
      }
    ]
  },
  {
    path: '/css',
    redirect: '/css/index',
    component: Layout,
    meta: {
      // hideInBread: true
    },
    children: [
      {
        path: 'index',
        name: 'css',
        component: () => import('@/views/css/index.vue'),
        meta: {
          title: 'css样式',
          icon: 'icon-css'
        }
      }
    ]
  },
  {
    path: '/comp',
    redirect: '/comp/tree',
    component: Layout,
    meta: {
      icon: 'icon-zujian',
      title: '组件'
    },
    children: [
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/comp/tree/index.vue'),
        meta: {
          title: '树'
        }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/comp/list/index.vue'),
        meta: {
          title: '列表'
        }
      },
      {
        path: 'editor',
        name: 'editor',
        component: () => import('@/views/comp/editor/index.vue'),
        meta: {
          title: '富文本'
        }
      },
      {
        path: 'xiumi',
        name: 'xiumi',
        component: () => import('@/views/comp/xiumi/index.vue'),
        meta: {
          title: '秀米'
        }
      },
      {
        path: 'markdown',
        name: 'markdown',
        component: () => import('@/views/comp/markdown.vue'),
        meta: {
          title: 'markdown'
        }
      },
      {
        path: 'flowChart',
        name: 'flowChart',
        component: () => import('@/views/comp/flowChart.vue'),
        meta: {
          title: 'flowChart'
        }
      }
    ]
  },
  {
    path: '/algorithms',
    redirect: '/algorithms/stack',
    component: Layout,
    meta: {
      title: '数据结构与算法',
      icon: 'icon-beehive'
      // hideInBread: true
    },
    children: [
      {
        path: '/stack',
        name: 'stack',
        component: () => import('@/views/algorithms/stack/index.vue'),
        meta: {
          title: '栈'
        }
      },
      {
        path: '/queue',
        name: 'queue',
        component: () => import('@/views/algorithms/queue/index.vue'),
        meta: {
          title: '队列'
        }
      }
    ]
  },
  {
    path: '/custom',
    redirect: '/custom/index',
    component: Layout,
    meta: {
      // hideInBread: true
    },
    children: [
      {
        path: 'index',
        name: 'custom',
        component: () => import('@/views/custom/index.vue'),
        meta: {
          title: '自定义',
          icon: 'icon-zidingyimokuai'
        }
      }
    ]
  }
];

const makeRoutes = () => {
  let route = [];
  const rawChild = (parent, child = [], top) => {
    child.forEach(item => {
      item.path = (parent.path + '/' + item.path).replace('//', '/');
      let children = { ...item };
      delete child.children;
      top.children.push(children);
      rawChild(item, item.children, top);
    });
  };
  routes.forEach(item => {
    let child = {
      ...item,
      children: []
    };
    rawChild(child, item.children || [], child);
    route.push(child);
  });
  return route;
};

export const vueRoutes = makeRoutes();

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: vueRoutes
});

export default router;
