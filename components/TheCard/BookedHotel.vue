<template>
  <div
    class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2">
      <div class="">
        <a href="#">
          <img
            class="w-full h-full object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
            :src="image"
            alt="Bonnie Avatar"
          />
        </a>
      </div>
      <div class="lg:col-span-2">
        <div class="p-5">
          <span
            class="bg-primary text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >{{ status }}</span
          >
          <h3
            class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ title }} ({{ total }} Baht.)
          </h3>
          <span class="text-gray-500 dark:text-gray-400">{{
            description
          }}</span>
          <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
            Check In: {{ checkin }} <br />
            Check Out: {{ checkout }} <br />
          </p>
          <div class="flex space-x-4 sm:mt-0">
            <div>
              <!-- for another button some detail room :D -->
            </div>
            <div v-if="status === 'WAITING'">
              <button
                @click="
                  navigateTo(`/payments/create?bookingOrderId=${id}&type=HOTEL`)
                "
                type="button"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  "id",
  "title",
  "status",
  "total",
  "image",
  "description",
  "checkin",
  "checkout",
]);
</script>
