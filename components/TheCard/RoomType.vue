<template>
  <div
    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <img
      src="/images/room1.png"
      class="h-52 flex flex-col justify-center items-center bg-primary rounded-t-xl"
    />
    <div>
      <div class="p-4 md:p-6">
        <span
          class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"
        >
          Available: {{ available_amount }}
        </span>
        <h3
          class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white"
        >
          {{ title }}
        </h3>
        <p class="mt-3 text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
    <div
      class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
    >
      <div
        @click="navigateToRoomDetails(roomData)"
        class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        ฿{{ price }} / day
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
  "image",
  "roomData",
  "image_url",
]);

const isOpen = ref(false);

const formData = reactive({
  startDate: "",
  endDate: "",
  petsAmount: 0,
});

async function navigateToRoomDetails(roomType: { id: any }) {
  await navigateTo(
    `/rooms/${roomType.id}
      ?startDate=${formData.startDate}
      &endDate=${formData.endDate}
      &petsAmount=${formData.petsAmount}`
  );
}
</script>
