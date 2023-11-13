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
  <div
    class="border-4 border-gray-600 rounded-lg cursor-pointer hover:scale-105 transform transition duration-100 hover:border-gray-400"
  >
    <!-- Card-Image -->
    <img
      v-if="perfume.image"
      class="h-auto w-full"
      :src="imgSrc"
      :alt="perfume.title"
    />
    <div v-else class="h-auto max-w-full rounded-lg flex justify-center">
      <span class="py-24 text-2xl font-semibold">Image not available</span>
    </div>

    <!-- Card-Body -->
    <div class="p-5 bg-white">
      <!-- Row 1 -->
      <div class="flex w-full justify-between">
        <h3
          class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ perfume.title }}
        </h3>
        <h3
          class="mb-2 text-2xl font-semibold tracking-tight text-gray-800 dark:text-white"
        >
          €{{ perfume.price }}
        </h3>

        <!-- Row 2 -->
      </div>
      <div class="flex w-full gap-11">
        <h3
          class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          v-if="perfume.category.name"
        >
          {{ perfume.category.name }}
        </h3>
        <h3
          class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          v-else
        >
          N/A
        </h3>

        <h3
          class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          v-if="perfume.type.name"
        >
          {{ perfume.type.name }}
        </h3>
        <h3
          class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          v-else
        >
          N/A
        </h3>

        <!-- Row 3 -->
      </div>
      <div class="flex w-full gap-11">
        <h3
          class="mb-2 text-lg font-semibold tracking-tight text-gray-800 dark:text-white"
        >
          <!-- {{ perfume.brand }} -->
        </h3>
        <h3
          class="mb-2 text-lg font-semibold tracking-tight text-gray-800 dark:text-white"
        >
          <!-- {{ perfume.size }} -->
        </h3>
      </div>
      <!-- Row 4 -->
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ descriptionPreview }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
