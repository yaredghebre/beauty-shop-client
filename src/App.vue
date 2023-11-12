<script>
import { initFlowbite } from "flowbite";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
  },
  mounted() {
    initFlowbite();
  },
};
</script>

<template>
  <AppHeader />
</template>
