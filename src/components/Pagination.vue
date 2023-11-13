<script>
export default {
  name: "Pagination",
  props: {
    currentPage: Number,
    lastPage: Number,
  },
  emits: ["changePage"],
};
</script>

<template>
  <nav
    v-if="lastPage"
    class="mt-4 flex justify-end"
    aria-label="Page navigation example"
  >
    <ul class="flex list-none">
      <li
        :class="`flex items-center ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`"
      >
        <a
          @click.prevent="$emit('changePage', currentPage - 1)"
          href="#"
          class="px-3 py-2 border"
          >Previous</a
        >
      </li>

      <li
        v-for="pageNum in lastPage"
        :key="pageNum"
        :class="`flex items-center ${
          pageNum === currentPage ? 'bg-gray-500 text-white' : ''
        }`"
      >
        <a
          @click.prevent="$emit('changePage', pageNum)"
          href="#"
          class="px-3 py-2 border"
          >{{ pageNum }}</a
        >
      </li>

      <li
        :class="`flex items-center ${
          currentPage === lastPage ? 'opacity-50 cursor-not-allowed' : ''
        }`"
      >
        <a
          @click.prevent="$emit('changePage', currentPage + 1)"
          href="#"
          class="px-3 py-2 border"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss"></style>
