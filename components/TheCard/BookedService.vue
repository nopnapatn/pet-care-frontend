<template>
  <div class="items-center bg-gray-50 rounded-lg shadow sm:flex">
    <div class="grid grid-cols-4 w-full">
      <!-- col1 -->
      <div class="flex col-span-1 p-2 px-6 items-center justify-center">
        <a href="#">
          <div>
            <span
              class="inline-flex justify-center items-center my-4 w-[64px] h-[64px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            >
              <img width="36" height="36" :src="image" alt="cat--v1" />
            </span>
          </div>
        </a>
      </div>

      <!-- col2-3 -->
      <div class="col-span-3">
        <div class="p-5">
          <div class="pb-2">
            <span
              v-if="status === 'COMPLETE'"
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

          <div class="flex items-end justify-between w-full">
            <div>
              <h3
                class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Service # {{ id }}
              </h3>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Date: {{ date }} <br />
              </p>
            </div>
            <div class="flex space-x-2 mb-4 sm:mt-0">
              <div v-if="status === 'WAITING'">
                <button
                  @click="
                    navigateTo(
                      `/payments/create?bookingOrderId=${id}&type=HOTEL`
                    )
                  "
                  type="button"
                  class="px-3 py-2 text-xs font-medium text-center text-white bg-accent rounded-lg hover:bg-accent-focus focus:ring-4 focus:outline-none focus:ring-accent dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Pay
                </button>
              </div>
              <div>
                <button
                  @click="
                    navigateTo(
                      `/payments/create?bookingOrderId=${id}&type=HOTEL`
                    )
                  "
                  type="button"
                  class="px-3 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="grid gap-4 lg:grid-cols-3 lg:gap-2">
      <div class="grid-cols-1">
        <a href="#">
          <div>
            <span
              class="inline-flex justify-center items-center my-4 w-[64px] h-[64px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            >
              <img width="36" height="36" :src="image" alt="cat--v1" />
            </span>
          </div>
        </a>
      </div>
      <div class="lg:col-span-2">
        <div class="p-5">
          <div class="pb-2">
            <span
              v-if="status === 'COMPLETE'"
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

          <div class="flex items-end justify-between w-full bg-slate-200">
            <div>
              <h3
                class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Service # {{ id }}
              </h3>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Date: {{ date }} <br />
              </p>
            </div>
            <div class="flex space-x-4 sm:mt-0">
              <div>
                <button
                  @click="
                    navigateTo(
                      `/payments/create?bookingOrderId=${id}&type=HOTEL`
                    )
                  "
                  type="button"
                  class="px-3 py-2 text-xs font-medium text-center text-white bg-accent rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Pay
                </button>
              </div>
              <div v-if="status === 'WAITING'">
                <button
                  @click="
                    navigateTo(
                      `/payments/create?bookingOrderId=${id}&type=HOTEL`
                    )
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
    </div> -->
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
  "date",
]);
</script>
