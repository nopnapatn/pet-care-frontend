<template>
  <NuxtLink :to="to">
    <div
      class="grid border h-full rounded-xl shadow-sm hover:shadow-lg divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-gray-700 dark:shadow-slate-700/[.7] dark:divide-gray-600"
    >
      <div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-gray-800">
        <img
          class="w-full h-56 rounded-t-xl sm:rounded-tr-none"
          :src="image"
          alt="Image Description"
        />
        <div class="p-4 flex-1 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            {{ title }}
          </h3>
          <p class="mt-1 text-gray-800 dark:text-gray-400">
            {{ description }}
          </p>
        </div>
        <div class="p-4 border-t sm:px-5 dark:border-gray-700">
          <p class="text-xs text-gray-800 dark:text-gray-500">
            {{ price }} ฿ / day.
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps([
  "title",
  "description",
  "price",
  "available_amount",
  "max_pets",
  "image",
  "to",
]);
</script>
