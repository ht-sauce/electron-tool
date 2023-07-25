import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/page/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
  ],
});

export default router;
