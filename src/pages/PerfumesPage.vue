<script>
import { initFlowbite } from "flowbite";
import axios from "axios";
import { store } from "../store";
import PerfumeCard from "../components/PerfumeCard.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "PerfumesPage",
  data() {
    return {
      store,
      perfumes: [],
      currentPage: 1,
      lastPage: null,
      totalPerfumes: 0,
      loading: false,
      categories: [],
      selectedCategory: [],
    };
  },
  components: {
    PerfumeCard,
    Pagination,
  },
  mounted() {
    initFlowbite();
    this.getPerfumes();
    // this.getCategories();
    this.setCategory();
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category;
      this.getPerfumes();
    },
    getPerfumes(pageNumber = 1) {
      const params = {
        page: pageNumber,
      };

      if (this.selectedCategory !== "All") {
        params.category_id = this.selectedCategory;
      }

      axios
        .get(`${store.shopUrl}/api/perfumes`, { params })
        .then((resp) => {
          this.perfumes = resp.data.results.data;
          this.currentPage = resp.data.results.current_page;
          this.lastPage = resp.data.results.last_page;
          this.totalPerfumes = resp.data.results.total;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<template>
  <div v-if="loading === false">
    <div class="container mx-auto my-10 min-h-[1000px]">
      <h1 class="font-bold text-center text-5xl">Profumi</h1>

      <!-- Filter -->

      <div class="flex justify-center space-x-4 my-4">
        <button
          @click="setCategory('All')"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span
            class="text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            All
          </span>
        </button>
        <button
          @click="setCategory(1)"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span
            class="text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            For Men
          </span>
        </button>
        <button
          @click="setCategory(2)"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span
            class="text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            For Women
          </span>
        </button>
      </div>

      <!-- <section class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <label
          for="category"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <select
          v-model="selectedCategory"
          id="category"
          name=""
          @change="getPerfumes()"
          class="bg-gray-50 w-1/4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        >
          <option selected>Choose a category</option>
          <option value="All">Tutte le categorie</option>
          <option
            v-for="category in categories"
            :value="category.name"
            :key="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </section> -->

      <!-- Grid -->
      <section class="grid grid-cols-2 md:grid-cols-3 xs:grid-cols-1 gap-4">
        <!-- Card -->
        <div v-for="perfume in perfumes" :key="perfume.id">
          <PerfumeCard :perfume="perfume" />
        </div>
      </section>
    </div>
    <!-- Pagination -->
    <Pagination
      :currentPage="currentPage"
      :lastPage="lastPage"
      @changePage="getPerfumes"
    />
  </div>

  <div v-else>
    <h1 class="text-5xl">Caricamento...</h1>
  </div>
</template>

<style lang="scss" scoped></style>
