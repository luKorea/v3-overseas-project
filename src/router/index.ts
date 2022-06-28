import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/pofiDownload",
    name: "downloadComponent",
    meta: {
      title: "pofi create",
    },
    component: () =>
      import(/* webpackChunkName: "download" */ "../views/download/index.vue"),
  },
  {
    path: "/pofiActive",
    name: "active",
    meta: {
      title: "pofi create",
    },
    component: () =>
      import(/* webpackChunkName: "active" */ "../views/active/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
