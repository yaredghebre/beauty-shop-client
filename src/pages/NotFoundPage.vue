<script>
export default {
  name: "NotFoundPage",
  methods: {},
};
</script>

<template>
  <div
    class="lg:container lg:mx-auto lg:my-20 flex flex-col items-center xs:py-20 h-screen"
  >
    <div
      class="bg-green-300 py-20 w-2/5 mb-10 rounded-lg transform transition duration-150 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-500"
    >
      <h2 class="text-center lg:text-5xl xs:text-lg">
        We're sorry! <br />
        This page doesn't exist :(
      </h2>
    </div>
    <div class="flex gap-5">
      <router-link
        :to="{ name: 'home' }"
        class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
        ><i class="fa-solid fa-house fa-lg">Home</i></router-link
      >
    </div>
  </div>
</template>

<style lang="scss">
@use "../fontawesome.scss" as *;
</style>
