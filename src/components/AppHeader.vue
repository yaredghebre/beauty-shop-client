<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >The Beauty Shop.</span
          >
        </a>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link
                to="/"
                class="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent transition transform duration-150 md:text-black md:p-0 md:hover:text-red-200 md:dark:text-red-200 dark:bg-red-200 md:dark:bg-transparent"
                aria-current="page"
                >Home</router-link
              >
            </li>

            <li>
              <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded transition transform duration-150 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-200 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-200 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                type="button"
              >
                Products
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownHover"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <router-link
                      to="/perfumes"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Perfumes</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'not-found' }"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Others</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <router-link
                :to="{ name: 'not-found' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent transition transform duration-150 md:border-0 md:hover:text-red-300 md:p-0 dark:text-white md:dark:hover:text-red-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Gallery</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'not-found' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent transition transform duration-150 md:border-0 md:hover:text-red-300 md:p-0 dark:text-white md:dark:hover:text-red-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'not-found' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:scale-110 md:hover:bg-transparent transition transform duration-150 md:border-0 md:hover:text-red-300 md:p-0 dark:text-white md:dark:hover:text-red-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
