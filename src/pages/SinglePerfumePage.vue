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
          this.perfume = response.data.results;
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.$router.push({ name: "not-found" });
          } else {
            this.errorMsg = "Ops, qualcosa è andato storto :(";
          }
        });
    },
  },
  computed: {
    imgSrc() {
      if (!this.perfume.image) return "";
      if (this.perfume.image.startsWith("https://")) {
        return this.perfume.image;
      } else {
        return `${this.store.shopUrl}/storage/${this.perfume.image}`;
      }
    },
  },
};
</script>
<template>
  <div
    class="lg:container xs:m-5 p-5 lg:mx-auto lg:my-20 rounded-lg bg-red-300"
  >
    <!-- Card -->
    <div
      class="relative p-4 xs:p-2 bg-white flex lg:flex-row xs:flex-col"
      v-if="perfume"
    >
      <!-- Card Image -->
      <div class="lg:w-3/5 h-full">
        <img
          v-if="perfume.image"
          :src="imgSrc"
          :alt="perfume.title"
          class="h-full w-full"
        />

        <img
          v-else
          src="../assets/images/logos/thebeautyshop.jpg"
          alt=""
          class="h-full w-full rounded-lg flex justify-center object-cover opacity-20"
        />
      </div>

      <!-- Card Body -->
      <div class="lg:w-2/5 h-full py-8 lg:py-40 mx-5">
        <h1
          class="lg:text-5xl xs:text-3xl xs:text-center lg:mb-20 mb-5 font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ perfume.title }}
        </h1>

        <div class="flex flex-col">
          <span
            class="lg:text-3xl xs:text-3xl font-bold text-end text-gray-900 dark:text-white"
            >€{{ perfume.price }}</span
          >
          <span
            class="text-xl xs:text-3xl mb-3 font-bold text-gray-900 dark:text-white"
          >
            {{ perfume.brand }}
          </span>
          <span
            class="text-xl xs:text-lg font-bold mb-3 text-gray-900 dark:text-white"
            >{{ perfume.category.name }}</span
          >

          <p class="lg:text-2xl xs:text-lg text-gray-900 dark:text-white mb-10">
            {{ perfume.description }}
          </p>

          <div class="flex gap-4 xs:mt-3 justify-center">
            <a
              href="#"
              class="items-center bg-gray-100 hover:bg-gray-700 transform transition duration-150 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
              ><i class="fa-solid fa-xl fa-heart"></i
            ></a>
            <a
              href="#"
              class="items-center bg-gray-100 hover:bg-gray-700 transform transition duration-150 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
              ><i class="fa-solid fa-shopping-cart fa-xl"></i
            ></a>
            <a
              href="#"
              class="items-center bg-gray-100 hover:bg-gray-700 transform transition duration-150 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
              ><i class="fa-solid fa-share-nodes fa-xl"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="errorMsg"></div>
    <router-link :to="{ name: 'perfumes' }" class="mt-3"></router-link>
  </div>
</template>

<style lang="scss" scoped>
@use "../fontawesome.scss" as *;
</style>
