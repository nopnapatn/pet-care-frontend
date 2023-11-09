<template>
  <div class="px-16 py-8 h-screen">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div class="flex justify-center items-center">
        <div class="max-w-sm rounded-lg shadow">
          <img class="rounded-xl" src="/images/QR.JPG" alt="" />
        </div>
      </div>
      <div class="">
        <div class="bg-white rounded-2xl shadow p-4 sm:p-7">
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
                      placeholder="John Doe"
                      v-model="formData.name"
                      label="First Name"
                    />
                    <div v-if="errorMessage.name" class="text-sm text-red-500">
                      {{ errorMessage.name }}
                    </div>
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
                      placeholder="500"
                      v-model="formData.amount"
                      label="First Name"
                    />
                    <div
                      v-if="errorMessage.amount"
                      class="text-sm text-red-500"
                    >
                      {{ errorMessage.amount }}
                    </div>
                  </div>
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
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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

            <div class="mt-2 space-y-3">
              <input
                id="date"
                type="date"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Enter your date"
                v-model="formData.date"
                label="First Name"
              />
              <div v-if="errorMessage.date" class="text-sm text-red-500">
                {{ errorMessage.date }}
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
                <input
                  id="af-submit-app-upload-images"
                  name="af-submit-app-upload-images"
                  type="file"
                  class="sr-only"
                  @change="onSlipChange"
                />
                <!-- Show Preview Image -->
                <div v-if="previewImage">
                  <img :src="previewImage" alt="Preview Image" />
                </div>
                <!-- Else -->
                <div v-else>
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
                  <span
                    class="mt-2 block text-sm text-gray-800 dark:text-gray-200"
                  >
                    Browse your device
                  </span>
                </div>
              </label>
            </div>
            <!-- End Image -->
            <div class="flex">
              <div class="mt-5 flex justify-end gap-x-2">
                <button
                  type="submit"
                  class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Save
                </button>
              </div>
              <div class="px-2"></div>
              <div class="mt-5 flex justify-end gap-x-2">
                <button
                  type="button"
                  @click="navigateTo('/booked/hotel')"
                  class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-300 text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Later
                </button>
              </div>
            </div>
            <!-- End Section -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const route = useRoute();
const auth = useAuthStore();

const formData = reactive({
  user_id: auth.user.id,
  booking_order_id: route.query.bookingOrderId,
  name: "",
  amount: "",
  time: "",
  date: "",
  type: route.query.type,
  slip: null,
});

const errorMessage = reactive({
  name: "",
  amount: "",
  time: "",
  date: "",
  slip: "",
});
const previewImage = ref<string | null>(null);

async function onSlipChange(event: any) {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    formData.slip = selectedFile;
    previewImage.value = URL.createObjectURL(selectedFile);
  }
}
async function onSubmit() {
  errorMessage.name = "";
  errorMessage.amount = "";
  errorMessage.time = "";
  errorMessage.date = "";

  if (formData.name === "") {
    errorMessage.name = "Name is required";
  }
  if (formData.amount === "") {
    errorMessage.amount = "Amount is required";
  }
  if (formData.time === "") {
    errorMessage.time = "Time is required";
  }
  if (formData.date === "") {
    errorMessage.date = "Date is required";
  }
  if (formData.slip === null) {
    errorMessage.slip = "Slip is required";
  }
  if (
    formData.name === "" ||
    formData.amount === "" ||
    formData.time === "" ||
    formData.date === "" ||
    formData.slip === null
  ) {
    return;
  }

  const formDataToSend = new FormData();

  formDataToSend.append(
    "booking_order_id",
    formData.booking_order_id!.toString()
  );
  formDataToSend.append("user_id", formData.user_id);
  formDataToSend.append("name", formData.name);
  formDataToSend.append("amount", formData.amount);
  formDataToSend.append("time", formData.time);
  formDataToSend.append("date", formData.date);
  formDataToSend.append("type", route.query.type as string);

  if (formData.slip !== null) {
    formDataToSend.append("slip", formData.slip);
  }

  console.log(formData);
  const { data: response, error } = await useMyFetch<any>(`payments/store`, {
    method: "POST",
    body: formDataToSend,
  });
  if (response !== null) {
    // to mybooking
    console.log(response.value.message);
    await navigateTo("/booked");
  }
}
</script>
