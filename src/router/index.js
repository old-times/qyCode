import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path:"/index",
      name: 'index',
      component: ()=>import('@/views/index/index'),
    },
    {
      path:"/home",
      name: 'home',
      component: ()=>import('@/views/home/index'),
    },
    {
      path:"/city",
      name: 'city',
      // redirect: "/litigation",
      component: ()=>import('@/views/city/city'),
    },
    // {
    //   path: "/page",
    //   name: "page",
    //   component: () => import("@/views/page/page1"),
    //   meta: {},
    //   children: [
    //     {
    //       path: "/page/page1",
    //       name: "page1",
    //       component: () => import("@/views/page/page1"),
    //     },
    //     {
    //       path: "/page/page2",
    //       name: "page2",
    //       component: () => import("@/views/page/page2"),
    //     }
    //   ]
    // },
    {
      path: "/page/page1",
      name: "page1",
      component: () => import("@/views/page/page1"),
    },
    {
      path: "/page/page2",
      name: "page2",
      component: () => import("@/views/page/page2"),
    },
    {
      path: "/page/page3",
      name: "page3",
      component: () => import("@/views/page/page3"),
    },
    {
      path: "/page/page4",
      name: "page4",
      component: () => import("@/views/page/page4"),
    },
    {
      path: "/page/page5",
      name: "page5",
      component: () => import("@/views/page/page5"),
    },
    {
      path: "/page/page6",
      name: "page6",
      component: () => import("@/views/page/page6"),
    },
    {
      path: "/page/page7",
      name: "page7",
      component: () => import("@/views/page/page7"),
    },
    {
      path: "/page/page8",
      name: "page8",
      component: () => import("@/views/page/page8"),
    },
    {
      path: "/page/page9",
      name: "page9",
      component: () => import("@/views/page/page9"),
    },
    {
      path: "/page/page10",
      name: "page10",
      component: () => import("@/views/page/page10"),
    },
    {
      path: "/page/page11",
      name: "page11",
      component: () => import("@/views/page/page11"),
    }
  ]
});
