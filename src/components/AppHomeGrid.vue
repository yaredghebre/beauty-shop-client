<script>
import { initFlowbite } from "flowbite";
import axios from "axios";
import { store } from "../store";
export default {
  name: "AppHomeGrid",
  data() {
    return {
      store,
      perfumes: [],
    };
  },
  mounted() {
    this.getImages();
  },
  methods: {
    getImages() {
      axios.get(`${store.shopUrl}/api/perfumes`).then((resp) => {
        this.perfumes = resp.data.results.data[0].image;
      });
    },
  },
};
</script>
<template>
  <section>
    <!-- Title -->
    <div class="mt-10 dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Best Sellers
        </h1>
        <p
          class="mt-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
        >
          Here you have just a taste of our most purchased products
        </p>
      </div>
    </div>
  </section>

  <!-- Grid -->
  <section class="container mx-auto p-10 bg-gray-900">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="grid gap-4">
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-13.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-3.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-12.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-14.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-9.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full object-cover rounded-lg"
            src="../assets/images/masonry/masonry-11.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Bottom Link -->
  <section class="container mx-auto mt-10 border-4 border-gray-900">
    <div class="dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white"
        >
          Check out our complete collection
        </h1>
        <div
          class="mt-6 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <router-link
            to="/perfumes"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
          >
            Perfumes
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
