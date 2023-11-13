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
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios.get(`${store.shopUrl}/api/perfumes`).then((resp) => {
        console.log(resp);
        this.categories = resp.data.results;
      });
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
          console.log(this.perfumes);
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
      <section class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          :class="{
            'text-blue-700 hover:text-white border-blue-600 bg-white hover:bg-blue-700':
              selectedCategory === category.id,
            'text-gray-900 border border-white hover:border-gray-200 bg-white':
              selectedCategory !== category.id,
          }"
          @click="getCategories(category.id)"
          class="focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:focus:ring-gray-800"
        >
          {{ category.name }}
        </button>
      </section>

      <!-- Grid -->
      <section class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
