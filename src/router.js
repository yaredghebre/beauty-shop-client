import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PerfumesPage from "./pages/PerfumesPage.vue";
import SinglePerfumePage from "./pages/SinglePerfumePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/perfumes",
      name: "perfumes",
      component: PerfumesPage,
    },
    {
      path: "/perfumes/:id",
      name: "single-perfume",
      component: SinglePerfumePage,
    },
  ],
});

export { router };
