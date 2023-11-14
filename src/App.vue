<script>
import { initFlowbite } from "flowbite";
import AppHeader from "./components/AppHeader.vue";

import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    initFlowbite();
  },
};
</script>

<template>
  <div class="bg-red-100">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./fontawesome.scss" as *;
</style>
