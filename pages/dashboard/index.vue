<template>
  <TheAsider />
  <div class="p-4 pt-8 sm:ml-64 h-[42rem]">
    <div class="p-4">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <NuxtLink
          to="/orders"
          class="flex items-center justify-center h-24 hover:shadow-lg rounded-lg bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">Order Table</p>
        </NuxtLink>

        <NuxtLink
          to="/users"
          class="flex items-center justify-center h-24 hover:shadow-lg rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">Users Table</p>
        </NuxtLink>
        <NuxtLink
          to="/payments"
          class="flex items-center justify-center h-24 hover:shadow-lg rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">payments</p>
        </NuxtLink>
      </div>
      <div
        class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
      >
        <p class="text-2xl text-gray-400 dark:text-gray-500">
          <svg
            class="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>
