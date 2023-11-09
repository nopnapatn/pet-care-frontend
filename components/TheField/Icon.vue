<template>
  <div class="flex justify-center px-6">
    <span
      class="inline-flex items-center px-3 w-1/12 min-w-fit justify-center text-gray-900 bg-neutral-100 border border-r-0 border-gray-200 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="h-6 w-8 fill-my-black"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <slot />
      </svg>
    </span>
    <label
      class="block overflow-hidden w-full rounded-r-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
    >
      <span class="text-xs font-medium text-gray-700">{{ title }}</span>

      <input
        :type="type"
        :id="id"
        :value="value"
        :placeholder="placeholder"
        class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title", "value", "placeholder", "id", "type"]);
</script>
