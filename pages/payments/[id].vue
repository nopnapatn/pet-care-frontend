<template>
  <div class="max-w-2xl px-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Card -->
    <div class="bg-white rounded-2xl shadow p-4 sm:p-7 dark:bg-slate-900">
      <div
        class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
      >
        <h3 class="font-bold text-gray-800 dark:text-gray-200">Payment</h3>
        <NuxtLink to="/orders/pending">
          <button
            type="button"
            class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-bg-gray-on-hover-cards"
          >
            <span class="sr-only">Close</span>
            <svg
              class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </NuxtLink>
      </div>
      <div class="py-4"></div>
      <div class="text-center mb-8">
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
        >
          Payment ID <span class="text-blue-500">#{{ route.params.id }}</span>
        </h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          verify payment information
        </p>
      </div>

      <form @submit.prevent="onSubmit()">
        <!-- Section -->
        <div
          class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
        >
          <div class="flex gap-10">
            <div>
              <label
                for="firstName"
                class="inline-block text-sm font-medium dark:text-white"
              >
                Name
              </label>
              <div class="mt-2 space-y-3">
                <input
                  id="firstName"
                  type="text"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  :placeholder="payment.name"
                  label="First Name"
                  disabled
                />
              </div>
            </div>
            <div>
              <label
                for="amount"
                class="inline-block text-sm font-medium dark:text-white"
              >
                Amount
              </label>
              <div class="mt-2 space-y-3">
                <input
                  id="amount"
                  type="number"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  :placeholder="payment.amount"
                  label="First Name"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-10">
          <div>
            <label
              for="date"
              class="inline-block text-sm font-medium dark:text-white"
            >
              Date
            </label>
            <div class="mt-2 space-y-3">
              <input
                id="date"
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                :placeholder="payment.date"
                disabled
              />
            </div>
          </div>
          <div>
            <label
              for="time"
              class="inline-block text-sm font-medium dark:text-white"
            >
              Time
            </label>
            <div class="mt-2 space-y-3">
              <input
                id="time"
                type="number"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                :placeholder="payment.time"
                disabled
              />
            </div>
          </div>
        </div>
        <!-- Start Image -->
        <div class="space-y-2">
          <label
            for="af-submit-app-upload-images"
            class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
          >
            Upload your slip
          </label>

          <label
            for="af-submit-app-upload-images"
            class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 dark:border-gray-700"
          >
            <!-- Show Preview Image -->
            <img :src="payment.slip_path" alt="Preview Image" />
          </label>
        </div>
        <!-- End Image -->
        <div class="flex">
          <div class="mt-5 flex justify-end gap-x-2">
            <button
              type="submit"
              @click="verifyBookingOrder()"
              class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Verify
            </button>
          </div>
          <div class="px-2"></div>
          <div class="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              @click="rejectBookingOrder()"
              class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Reject
            </button>
          </div>
        </div>
        <!-- End Section -->
      </form>
    </div>
    <!-- End Card -->
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const route = useRoute();
const auth = useAuthStore();
// console.log(route.query.paymentId);
const { data: payment, error } = await useMyFetch<any>(
  `payments/+${route.params.id}`,
  {}
);

async function verifyBookingOrder() {
  console.log("verify");
  console.log(route.params.id);
  const { data: response, error } = await useMyFetch<any>(
    `payments/${route.params.id}/verify`,
    {
      method: "PUT",
    }
  );

  if (response) {
    console.log(response);
    console.log(response.value.message);
    navigateTo("/orders/verified");
  }
}

async function rejectBookingOrder() {
  console.log("reject");
  const { data: response, error } = await useMyFetch<any>(
    `payments/${route.params.id}/reject`,
    {
      method: "PUT",
    }
  );

  if (response) {
    console.log(response.value.message);
    navigateTo("/orders/pending");
  }
}

async function onSubmit() {}
</script>
