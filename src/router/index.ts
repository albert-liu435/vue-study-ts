import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
// import { routerList } from './data'
// import Layout from '@/Layout/index.vue'
const modules = import.meta.glob("../views/**/*.{vue,tsx}");
console.log(modules, "-----------modules");

export const routes: AppRouteRecordRaw[] = [
  {
    path: "/",
    component: import("@/views/dashboard/index.vue"),
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/',
  //       name: 'Dashboard',
  //       component: import('@/views/dashboard/index.vue'),
  //       meta: {
  //         title: '首页'
  //       }
  //     },
  //   ]
  // }
];

// const getRoutes = (routerList) => {
//   const rouers = routerList.map(v => {
//     const data:AppRouteRecordRaw = {
//       name: v.name,
//       path: v.path,
//       redirect: v.path,
//       meta: v.meta
//     }
//     // const component =
//   })
// }

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes as RouteRecordRaw[],
});

export default router;
