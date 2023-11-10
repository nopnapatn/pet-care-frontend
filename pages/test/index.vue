<template>
  <div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
      <div class="text-center mb-8">
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
        >
          Payment
        </h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Submit your billing information
        </p>
      </div>

      <form @submit.prevent="onSubmit()">
        <!-- Section -->
        <div
          class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
        >
          <div class="flex">
            <label
              for="firstName"
              class="inline-block text-sm font-medium dark:text-white"
            >
              First Name
            </label>
            <div class="mt-2 space-y-3">
              <input
                id="firstName"
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Enter your first name"
                v-model="formData.firstName"
                label="First Name"
              />
              <div v-if="errorMessage.firstName" class="text-sm text-red-500">
                {{ errorMessage.firstName }}
              </div>
            </div>

            <label
              for="lastName"
              class="inline-block text-sm font-medium dark:text-white"
            >
              Last Name
            </label>
            <div class="mt-2 space-y-3">
              <input
                id="lastName"
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Enter your last name"
                v-model="formData.lastName"
                label="First Name"
              />
              <div v-if="errorMessage.lastName" class="text-sm text-red-500">
                {{ errorMessage.lastName }}
              </div>
            </div>
          </div>
        </div>

        <label
          for="email"
          class="inline-block text-sm font-medium dark:text-white"
        >
          Email
        </label>
        <div class="mt-2 space-y-3">
          <input
            id="email"
            type="email"
            class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Enter your email"
            v-model="formData.email"
            label="First Name"
          />
          <div v-if="errorMessage.email" class="text-sm text-red-500">
            {{ errorMessage.email }}
          </div>
        </div>
        <div class="flex">
          <label
            for="orderNumber"
            class="inline-block text-sm font-medium dark:text-white"
          >
            Order Number
          </label>
          <div class="mt-2 space-y-3">
            <input
              id="orderNumber"
              type="number"
              class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Enter your order number"
              v-model="formData.orderNumber"
              label="First Name"
            />
            <div v-if="errorMessage.orderNumber" class="text-sm text-red-500">
              {{ errorMessage.orderNumber }}
            </div>
          </div>

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
              class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Enter amount of money"
              v-model="formData.amount"
              label="First Name"
            />
            <div v-if="errorMessage.amount" class="text-sm text-red-500">
              {{ errorMessage.amount }}
            </div>
          </div>
        </div>

        <label
          for="time"
          class="inline-block text-sm font-medium dark:text-white"
        >
          Time
        </label>
        <div class="mt-2 space-y-3">
          <input
            id="time"
            type="time"
            class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Enter your time"
            v-model="formData.time"
            label="First Name"
          />
          <div v-if="errorMessage.time" class="text-sm text-red-500">
            {{ errorMessage.time }}
          </div>
        </div>

        <label
          for="date"
          class="inline-block text-sm font-medium dark:text-white"
        >
          Date
        </label>

        <!-- Start Image -->
        <div class="mt-2 space-y-3">
          <input
            id="date"
            type="date"
            class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Enter your date"
            v-model="formData.date"
            label="First Name"
          />
          <div v-if="errorMessage.date" class="text-sm text-red-500">
            {{ errorMessage.date }}
          </div>
        </div>
        <div class="space-y-2">
          <label
            for="af-submit-app-upload-images"
            class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
          >
            Upload your slip
          </label>

          <label
            for="af-submit-app-upload-images"
            class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
          >
            <input
              id="af-submit-app-upload-images"
              name="af-submit-app-upload-images"
              type="file"
              class="sr-only"
            />
            <svg
              class="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
              />
              <path
                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
              />
            </svg>
            <span class="mt-2 block text-sm text-gray-800 dark:text-gray-200">
              Browse your device or
              <span class="group-hover:text-blue-700 text-blue-600"
                >drag 'n drop'</span
              >
            </span>
            <span class="mt-1 block text-xs text-gray-500">
              Maximum file size is 2 MB
            </span>
          </label>
        </div>
        <!-- End Image -->

        <div class="mt-5 flex justify-end gap-x-2">
          <button
            type="submit"
            class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            Save
          </button>
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
console.log("Hi");
console.log(route.params);
console.log(route.params.id);
const petsAmount = route.params.petsAmount;

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  orderNumber: "",
  amount: "",
  time: "",
  date: "",
});

const errorMessage = reactive({
  email: "",
  firstName: "",
  lastName: "",
  orderNumber: "",
  amount: "",
  time: "",
  date: "",
});

async function onSubmit() {
  errorMessage.email = "";
  errorMessage.firstName = "";
  errorMessage.lastName = "";
  errorMessage.orderNumber = "";
  errorMessage.amount = "";
  errorMessage.time = "";
  errorMessage.date = "";

  if (!formData.email) {
    errorMessage.email = "Email is required";
  }
  if (!formData.firstName) {
    errorMessage.firstName = "First Name is required";
  }
  if (!formData.lastName) {
    errorMessage.lastName = "Last Name is required";
  }
  if (!formData.orderNumber) {
    errorMessage.orderNumber = "Order Number is required";
  }
  if (!formData.amount) {
    errorMessage.amount = "Amount is required";
  }
  if (!formData.time) {
    errorMessage.time = "Time is required";
  }
  if (!formData.date) {
    errorMessage.date = "Date is required";
  }

  if (
    errorMessage.email ||
    errorMessage.firstName ||
    errorMessage.lastName ||
    errorMessage.orderNumber ||
    errorMessage.amount ||
    errorMessage.time ||
    errorMessage.date
  ) {
    return;
  }

  console.log(formData);
  const { data: response, error } = await useMyFetch<any>(
    `room-types/${route.params.id}/book`,
    {
      method: "POST",
      body: {
        user_id: auth.user.id,
        order_number: formData.orderNumber,
        amount: formData.amount,
        time: formData.time,
        date: formData.date,
      },
    }
  );
  if (response.value !== null) {
    await navigateTo("/");
  }
}
</script>
