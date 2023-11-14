<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "SinglePerfumePage",
  data() {
    return {
      perfume: null,
      store,
    };
  },
  mounted() {
    this.getPerfume();
  },
  methods: {
    getPerfume() {
      const id = this.$route.params.id;
      axios
        .get(`${store.shopUrl}/api/perfumes/${id}`)
        .then((response) => {
          this.perfume = response.data.results; // Supponendo che vuoi il primo profumo
        })
        .catch((error) => {
          console.error("Errore nella chiamata API:", error);
        });
    },
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
  <div class="flex container mx-auto my-20 h-screen rounded-lg bg-red-300">
    <!-- Card -->
    <div class="p-5 bg-white" v-if="perfume">
      <!-- Card Image -->
      <div>
        <img
          v-if="perfume.image"
          :src="imgSrc"
          :alt="perfume.title"
          class="h-[500px] w-1/2"
        />

        <img
          v-else
          src="../assets/images/logos/thebeautyshop.jpg"
          alt=""
          class="h-[500px] max-w-full rounded-lg flex justify-center object-cover w-full opacity-20"
        />
      </div>

      <!-- Card Body -->
      <div>
        <h5
          class="text-4xl xs:text-3xl xs:text-center font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ perfume.title }}
        </h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
