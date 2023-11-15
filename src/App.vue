<script>
import { initFlowbite } from "flowbite";
import { initTE, Offcanvas, Ripple, Dropdown } from "tw-elements";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
    // initTE,
    // Offcanvas,
    // Ripple,
    // Dropdown,
  },
  mounted() {
    initFlowbite();
    initTE({ Offcanvas, Ripple, Dropdown });
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
