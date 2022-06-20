import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/download",
    name: "downloadComponent",
    component: () =>
      import(/* webpackChunkName: "download" */ "../views/download/index.vue"),
  },
  {
    path: "/active",
    name: "active",
    component: () =>
      import(/* webpackChunkName: "active" */ "../views/active/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
