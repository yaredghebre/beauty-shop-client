import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PerfumesPage from "./pages/PerfumesPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";

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
      path: "/gallery",
      name: "gallery",
      component: GalleryPage,
    },
  ],
});

export { router };
