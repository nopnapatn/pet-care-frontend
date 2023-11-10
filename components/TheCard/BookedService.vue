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
              <h3
                class="text-md tracking-tight mt-2 text-gray-900 dark:text-white"
              >
                {{ total }} Baht.
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
                      `/others/payment?serviceOrderId=${id}`
                    )
                  "
                  type="button"
                  class="px-3 py-2 text-xs font-medium text-center text-white bg-accent rounded-lg hover:bg-accent-focus focus:ring-4 focus:outline-none focus:ring-accent dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Pay
                </button>
              </div>
              <div>
                <!-- <button
                  @click="
                    navigateTo(
                      `/payments/create?bookingOrderId=${id}&type=HOTEL`
                    )
                  "
                  type="button"
                  class="px-3 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Details
                </button> -->

                <!-- Modal toggle -->
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  class="px-3 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Details
                </button>

                <!-- Main modal -->
                <div
                  id="default-modal"
                  tabindex="-1"
                  aria-hidden="true"
                  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div
                      class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <!-- Modal header -->
                      <div
                        class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
                      >
                        <h3
                          class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                          Terms of Service
                        </h3>
                        <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal"
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <p
                          class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                          With less than a month to go before the European Union
                          enacts new consumer privacy laws for its citizens,
                          companies around the world are updating their terms of
                          service agreements to comply.
                        </p>
                        <p
                          class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                          The European Union’s General Data Protection
                          Regulation (G.D.P.R.) goes into effect on May 25 and
                          is meant to ensure a common set of data rights in the
                          European Union. It requires organizations to notify
                          users as soon as possible of high-risk data breaches
                          that could personally affect them.
                        </p>
                      </div>
                      <!-- Modal footer -->
                      <div
                        class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                      >
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          I accept
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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

import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

const props = defineProps([
  "id",
  "title",
  "status",
  "total",
  "image",
  "description",
  "date",
]);

async function navigateToServicePayment() {

  const fetchedCurrentOrder = await useMyFetch<any>(
    `service-orders/${auth.user?.id}/get-user-current-order`,
    {
      params: {
        user_id: auth.user?.id,
      },
    }
  );

  const queryParams = {
    serviceOrderId: fetchedCurrentOrder.data.value[0].id,
  };

  await navigateTo({ path: "/others/payment", query: queryParams });
}

// console.log(id)

</script>
