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
  <div class="bg-red-200">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
