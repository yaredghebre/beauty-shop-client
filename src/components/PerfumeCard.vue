<script>
import { store } from "../store";

export default {
  name: "ProjectCard",
  props: { perfume: Object },
  data() {
    return {
      store,
    };
  },
  computed: {
    descriptionPreview() {
      if (!this.perfume.description) {
        return "Nessuna descrizione";
      } else if (this.perfume.description.length > 100) {
        return this.perfume.description.substring(0, 150) + "...";
      } else {
        return this.perfume.description;
      }
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
  <!-- Card -->
  <div
    class="border-4 border-gray-600 rounded-lg cursor-pointer transform transition duration-150 hover:border-gray-100"
  >
    <!-- Card Image -->
    <img
      v-if="perfume.image"
      class="h-[250px] w-full"
      :src="imgSrc"
      :alt="perfume.title"
    />
    <div v-else class="h-[250px] max-w-full rounded-lg flex justify-center">
      <!-- <span class="py-24 text-2xl font-semibold">Image not available</span> -->
      <img
        src="../assets/images/logos/thebeautyshop.jpg"
        alt=""
        class="object-cover w-full opacity-20"
      />
    </div>

    <!-- Card Body -->
    <div class="p-5 bg-white">
      <a href="#">
        <h5
          class="text-4xl xs:text-3xl xs:text-center font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ perfume.title }}
        </h5>
      </a>

      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
      </div>

      <div class="flex lg:flex-row xs:flex-col justify-between">
        <div class="flex flex-col items-center">
          <span
            class="lg:text-3xl xs:text-3xl font-bold text-gray-900 dark:text-white"
            >€{{ perfume.price }}</span
          >
          <span
            class="text-xl xs:text-lg font-bold text-gray-900 dark:text-white"
            >{{ perfume.category.name }}</span
          >
        </div>

        <div class="flex gap-4 xs:mt-3 justify-center">
          <router-link
            :to="{ name: 'single-perfume', params: { id: perfume.id } }"
            class="flex items-center bg-gray-100 hover:bg-gray-700 transform transition duration-150 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
            ><i class="fa-solid fa-info fa-xl"></i
          ></router-link>
          <a
            href="#"
            class="flex items-center bg-gray-100 hover:bg-gray-700 transform transition duration-150 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
            ><i class="fa-solid fa-xl fa-cart-shopping"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
