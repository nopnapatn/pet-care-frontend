<template>
  <div
    class="fix flex-col h-screen shadow-lg justify-center px-48 py-10 gap-y-6"
  >
    <div class="flex w-full justify-center">
      <ol class="flex justify-around w-full">
        <li
          class="flex w-full items-center text-accent/40 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-accent/40 after:border-4 after:inline-block"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-accent/40 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
          >
            <svg
              class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 stroke-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
        <li
          class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-accent/40 after:border-4 after:inline-block dark:after:border-gray-700"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-accent/40 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 stroke-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
        <li class="flex items-center">
          <span
            class="flex items-center justify-center w-10 h-10 bg-accent/40 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-credit-card-2-back-fill fill-yellow-500"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"
              />
            </svg>
          </span>
        </li>
      </ol>
    </div>
    <!-- content -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div class="flex justify-center ml-10 items-start">
        <div class="max-w-sm rounded-lg shadow mt-6">
          <img class="rounded-xl" src="/images/QR.JPG" alt="" />
        </div>
      </div>
      <div class="shadow mt-6 rounded-2xl">
        <div class="overflow-y-auto rounded-2xl h-[36rem]">
          <div class="bg-white rounded-2xl shadow pb-4 sm:p-7">
            <div class="text-center">
              <h2
                class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
              >
                Payment
              </h2>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Submit your billing information
              </p>
            </div>
            <div class="flex gap-2 py-4 pr-2 justify-between">
              <h1>Total:</h1>
              <h1>฿{{ currentOrder.total_price }}</h1>
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
                        placeholder="Full Name"
                        v-model="formData.name"
                        label="First Name"
                      />
                      <div
                        v-if="errorMessage.name"
                        class="text-sm text-red-500"
                      >
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
                        v-model="currentOrder.total_price"
                        label="Amount"
                        disabled
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

              <div class="flex gap-10 w-full grid-cols-2">
                <div class="w-full">
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
                      class="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Enter your time"
                      v-model="formData.time"
                      label="First Name"
                    />
                    <div v-if="errorMessage.time" class="text-sm text-red-500">
                      {{ errorMessage.time }}
                    </div>
                  </div>
                </div>
                <div class="w-full">
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
                      class="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Enter your date"
                      v-model="formData.date"
                      label="First Name"
                    />
                    <div v-if="errorMessage.date" class="text-sm text-red-500">
                      {{ errorMessage.date }}
                    </div>
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
                <div class="mt-5 flex w-full justify-end">
                  <button
                    type="submit"
                    class="py-2 px-3 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Save
                  </button>
                </div>
              </div>
              <!-- <div class="flex items-center">
              <h1>or Pay</h1>
              <button class="btn btn-ghost normal-case btn-accent">Later</button>
            </div> -->
              <div class="flex py-2 text-gray-500 items-center justify-center">
                or
              </div>
              <div class="flex w-full justify-end gap-x-2">
                <button
                  type="button"
                  @click="navigateTo('/booked/hotel')"
                  class="py-2 px-3 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-accent text-white hover:bg-accent-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Pay Later
                </button>
              </div>
              <!-- End Section -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const route = useRoute();
const auth = useAuthStore();

const fetchedCurrentOrder = await useMyFetch<any>(
  `service-orders/${auth.user.id}/get-user-current-order`,
  {}
);

const currentOrder = fetchedCurrentOrder.data.value;

console.log(currentOrder.total_price);

const formData = reactive({
  user_id: auth.user.id,
  service_order_id: route.query.serviceOrderId,
  name: "",
  amount: currentOrder.total_price,
  time: "",
  date: "",
  type: "SERVICE",
  slip: null,
});

console.log(formData.amount);

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
    "service_order_id",
    formData.service_order_id!.toString()
  );
  formDataToSend.append("user_id", formData.user_id);
  formDataToSend.append("name", formData.name);
  formDataToSend.append("amount", formData.amount);
  formDataToSend.append("time", formData.time);
  formDataToSend.append("date", formData.date);
  formDataToSend.append("type", "SERVICE");

  if (formData.slip !== null) {
    formDataToSend.append("slip", formData.slip);
  }

  console.log(formData);
  const { data: response, error } = await useMyFetch<any>(
    `payments/service/store`,
    {
      method: "POST",
      body: formDataToSend,
    }
  );
  if (response !== null) {
    // to mybooking
    console.log(response);
    await navigateTo("/booked/service");
  }
}

// const auth = useAuthStore();

// console.log(auth.user?.id);

// const currentOrder = fetchedCurrentOrder.data.value;

// console.log(currentOrder);
</script>
