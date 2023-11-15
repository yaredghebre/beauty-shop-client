import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "./pages/HomePage.vue";
// import PerfumesPage from "./pages/PerfumesPage.vue";
// import SinglePerfumePage from "./pages/SinglePerfumePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomePage,
      component: () => import("./pages/HomePage.vue"),
    },
    {
      path: "/perfumes",
      name: "perfumes",
      // component: PerfumesPage,
      component: () => import("./pages/PerfumesPage.vue"),
    },
    {
      path: "/perfumes/:id",
      name: "single-perfume",
      // component: SinglePerfumePage,
      component: () => import("./pages/SinglePerfumePage.vue"),
    },
  ],
});

export { router };
