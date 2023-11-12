<script>
import { initFlowbite } from "flowbite";
import AppJumbotron from "../components/AppJumbotron.vue";
import AppCarousel from "../components/AppCarousel.vue";
import AppFaq from "../components/AppFaq.vue";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    AppJumbotron,
    AppCarousel,
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
    <AppFaq />
  </div>
</template>

<style lang="scss" scoped></style>
