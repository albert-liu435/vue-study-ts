import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "@/view/Home.vue";
import About from "@/view/About.vue";

const CommonRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/view/Home.vue"),
    // component: Home,
  },
  {
    path: "/about",
    name: "about",
    // component: () => import("@/About.vue"),
    component: About,
    meta: {
      name: "登录",
    },
  },
];

// export const DynamicRoutes = [
//   {
//     path: "home",
//     name: "home",
//     component: () => import("@/view/Home.vue"),
//     meta: {
//       name: "首页",
//     },
//     // children: [
//     // 	{
//     // 		path: "home",
//     // 		name: "home",
//     // 		component: () => import("@/pages/home/home.vue"),
//     // 		meta: {
//     // 			name: "首页",
//     // 			icon: "house",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "theme",
//     // 		name: "theme",
//     // 		component: () => import("@/pages/theme/theme.vue"),
//     // 		meta: {
//     // 			name: "主题管理",
//     // 			icon: "mostly-cloudy",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "table",
//     // 		name: "table",
//     // 		component: () => import("@/pages/table/table.vue"),
//     // 		meta: {
//     // 			name: "表格管理",
//     // 			icon: "tickets",
//     // 			subHide: true,
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "router",
//     // 		name: "router",
//     // 		component: () => import("@/pages/router/router.vue"),
//     // 		meta: {
//     // 			name: "路由管理",
//     // 			icon: "sort",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "international",
//     // 		name: "international",
//     // 		component: () => import("@/pages/international/international.vue"),
//     // 		meta: {
//     // 			name: "国际化",
//     // 			icon: "help",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "main/micro",
//     // 		name: "micro",
//     // 		component: () => import("@/pages/micro/micro.vue"),
//     // 		meta: {
//     // 			name: "微前端",
//     // 			icon: "grid",
//     // 		},
//     // 		children: [
//     // 			{
//     // 				path: "app-one",
//     // 				name: "micro-app-one",
//     // 				component: () => import("@/pages/micro/micro-app-one.vue"),
//     // 				meta: {
//     // 					name: "子应用1",
//     // 					icon: "TopLeft",
//     // 				},
//     // 			},
//     // 			{
//     // 				path: "app-two",
//     // 				name: "micro-app-two",
//     // 				component: () => import("@/pages/micro/micro-app-two.vue"),
//     // 				meta: {
//     // 					name: "子应用2",
//     // 					icon: "TopRight",
//     // 				},
//     // 			},
//     // 		],
//     // 	},
//     // 	{
//     // 		path: "map",
//     // 		name: "map",
//     // 		component: () => import("@/pages/map/map.vue"),
//     // 		meta: {
//     // 			name: "地图",
//     // 			icon: "map-location",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "editor",
//     // 		name: "editor",
//     // 		component: () => import("@/pages/editor/editor.vue"),
//     // 		meta: {
//     // 			name: "富文本编辑器",
//     // 			icon: "reading",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "iframe",
//     // 		name: "iframe",
//     // 		component: () => import("@/pages/iframe/iframe.vue"),
//     // 		meta: {
//     // 			name: "iframe通信",
//     // 			icon: "guide",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "screen",
//     // 		name: "screen",
//     // 		component: () => import("@/pages/screen/screen.vue"),
//     // 		meta: {
//     // 			name: "大屏展示",
//     // 			icon: "data-analysis",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "form",
//     // 		name: "form",
//     // 		component: () => import("@/pages/form/form.vue"),
//     // 		meta: {
//     // 			name: "表单",
//     // 			icon: "tickets",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "contact",
//     // 		name: "contact",
//     // 		component: () => import("@/pages/contact/contact.vue"),
//     // 		meta: {
//     // 			name: "联系作者",
//     // 			icon: "phone",
//     // 		},
//     // 	},
//     // 	{
//     // 		path: "book",
//     // 		name: "book",
//     // 		component: () => import("@/pages/book/book-detail.vue"),
//     // 		meta: {
//     // 			name: "图书详情",
//     // 			icon: "TopLeft",
//     // 			hide: true,
//     // 		},
//     // 	},
//     // ],
//   },
// ];

// const routes: Array<RouteRecordRaw> = [...DynamicRoutes, ...CommonRoutes];

const routes: Array<RouteRecordRaw> = [...CommonRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
