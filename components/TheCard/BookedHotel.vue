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
          <!-- <span
            class="bg-primary text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >{{ status }}</span
          > -->
          <div class="pb-2">
            <span
              v-if="status === 'COMPLETED'"
              class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >Complete</span
            >
            <span
              v-if="status === 'CANCELED'"
              class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
              >Canceled</span
            >
            <span
              v-if="status === 'VERIFIED'"
              class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >Booked</span
            >
            <span
              v-if="status === 'WAITING'"
              class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
              >To Pay</span
            >
            <span
              v-if="status === 'IN_USE'"
              class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
              >In Use</span
            >
            <span
              v-if="status === 'PENDING'"
              class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
              >Pending</span
            >
          </div>
          <h3
            class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ title }}
          </h3>
          <span class="text-gray-500 dark:text-gray-400"
            >{{ total }} Baht.</span
          >
          <div class="flex items-end justify-between">
            <div>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Check In: {{ checkin }} <br />
                Check Out: {{ checkout }} <br />
              </p>
            </div>
            <div class="flex mb-4 sm:mt-0">
              <div>
                <!-- for another button some detail room :D -->
              </div>
              <div v-if="status === 'WAITING'">
                <button
                  @click="
                    navigateTo(
                      `/payments/create?bookingOrderId=${id}&price=${total}&type=HOTEL`
                    )
                  "
                  type="button"
                  class="px-4 py-2 text-xs font-medium text-center text-white bg-accent rounded-lg hover:bg-accent-focus focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Pay
                </button>
              </div>
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
