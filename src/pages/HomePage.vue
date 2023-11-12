<script>
import { initFlowbite } from "flowbite";
import AppJumbotron from "../components/AppJumbotron.vue";
import AppCarousel from "../components/AppCarousel.vue";
import AppHomeGrid from "../components/AppHomeGrid.vue";
import AppFaq from "../components/AppFaq.vue";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    AppJumbotron,
    AppCarousel,
    AppHomeGrid,
    AppFaq,
  },
  mounted() {
    initFlowbite();
  },
};
</script>
<template>
  <div>
    <AppJumbotron />
    <AppCarousel />
    <AppHomeGrid />
    <AppFaq />
  </div>
</template>

<style lang="scss" scoped></style>
