<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "SinglePerfumePage",
  data() {
    return {
      store,
      perfume: null,
    };
  },
  methods: {
    getPerfumes() {
      const id = this.$route.params.id;
      axios.get(`${this.store.shopUrl}/api/perfumes/${id}`).then((resp) => {
        this.perfumes = resp.data.results;
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    imgSrc() {
      if (!this.perfume.image) return "";
      if (this.perfume.image.startsWith("https//")) {
        return this.perfume.image;
      } else {
        return `${this.store.shopUrl}/storage/${this.perfume.image}`;
      }
    },
  },
};
</script>
<template>
  <div class="container"></div>
</template>

<style lang="scss" scoped></style>
