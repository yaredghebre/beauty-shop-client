<script>
import { initFlowbite } from "flowbite";
import AppHeader from "./components/AppHeader.vue";
import AppJumbotron from "./components/AppJumbotron.vue";
import AppCarousel from "./components/AppCarousel.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppJumbotron,
    AppCarousel,
    AppFooter,
  },
  mounted() {
    initFlowbite();
  },
};
</script>

<template>
  <AppHeader />
  <AppJumbotron />
  <AppCarousel />
  <AppFooter />
</template>
