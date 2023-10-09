<template>
  <div class="bg-white border rounded-xl shadow-sm sm:flex">
    <div
      class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs"
    >
      <img
        class="w-full h-full absolute top-0 left-0 object-cover"
        :src="image"
        alt="Image Description"
      />
    </div>
    <div class="flex flex-wrap w-full">
      <div class="p-4 flex flex-col h-full sm:p-7 w-full">
        <h3 class="text-lg font-bold text-gray-800">
          {{ title }}
        </h3>
        <p class="mt-1 text-gray-800">
          {{ description }} <br />
          {{ available_amount }} Room left <br />
          {{ max_pets }} Pet <br />
        </p>
        <div class="mt-5 sm:mt-auto">
          <p class="flex justify-between items-center text-xs text-gray-500">
            Price {{ price }} ฿
            <NuxtLink :to="to">
              <button
                type="button"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
              >
                Booking
              </button>
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  "title",
  "description",
  "price",
  "available_amount",
  "max_pets",
  "to",
  "image",
]);
</script>
