<template>
  <div class="fix h-[46rem] grid grid-cols-2 px-16">
    <div class="flex flex-col gap-y-8 h-full py-10 pl-28 pr-10">
      <div class="flex flex-col gap-5">
        <span class="headline-large text-my-black">Spa & Grooming</span>
        <p>
          Pricing is dependent on the length, condition, and texture of the
          guest’s coat. Our Pet Stylists will determine pricing prior to
          grooming during the consultation with the owner.
        </p>
      </div>
      <div class="flex items-center">
        <select
          v-model="selectedSize"
          name="pet-size"
          id="pet-size"
          class="select select-bordered bg-white focus:ring-primary focus:border-primary"
          @change="handleSizeChange"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <h1 v-if="selectedSize === 'Small'" class="ml-4">
          Weight Length : 0.45 - 10 kg.
        </h1>
        <h1 v-if="selectedSize === 'Medium'" class="ml-4">
          Weight Length : 11-30 kg.
        </h1>
        <h1 v-if="selectedSize === 'Large'" class="ml-4">
          Weight Length : 31+ kg.
        </h1>
      </div>
      <!-- <div class="sm:pb-0 sm:flex-[1_0_0%] bg-black"> -->
      <div class="flex">
        <!-- Start Date Picker -->
        <span
          class="inline-flex items-center px-3 text-sm text-gray-900 bg-neutral-100 border border-r-0 border-gray-200 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
          Date
        </span>
        <VueDatePicker
          v-model="date"
          date
          format="dd/M/yyyy"
          :enable-time-picker="false"
          disable-year-select
          auto-apply
          placeholder="Select date"
          :min-date="new Date(new Date().setDate(new Date().getDate() + 1))"
          :max-date="new Date(new Date().setDate(new Date().getDate() + 30))"
          required
        ></VueDatePicker>
        <!-- End Date Picker -->
      </div>
      <!-- </div> -->
      <a @click="navigateToServiceForm()" class="btn btn-secondary text-white"
        >Booking</a
      >
      <!-- <NuxtLink @click="navigateToServiceForm(selectedSize)" 
       class="btn btn-secondary text-white">Booking</NuxtLink> -->
    </div>
    <div class="h-full overflow-y-auto py-10 justify-start">
      <div class="flex flex-col gap-y-8 shadow-inner ml-10 mr-28">
        <TheTableSpaTable></TheTableSpaTable>
        <TheTableGroomTable></TheTableGroomTable>
        <TheTableALaCarte></TheTableALaCarte>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

const errorMessage = reactive({
  petsAmount: "",
});

const date = ref("");

const formData = reactive({
  startDate: "",
  // endDate: "",
  // petsAmount: 0,
});

function formatDate(date: string) {
  var d = new Date(date).toLocaleDateString(),
    month = d.split("/")[0],
    day = d.split("/")[1],
    year = d.split("/")[2];

  return [year, month, day].join("-");
}

watch(date, (newDate) => {
  formData.startDate = formatDate(date.value);
  // formData.endDate = formatDate(date.value[1]);
  console.log(date.value);
  console.log(formData.startDate);
  // console.log(formData.endDate);
  console.log(date.value);
});

// Selecting Size
const selectedSize = ref("Small");

const handleSizeChange = () => {
  console.log(selectedSize.value);
};

async function navigateToServiceForm() {
  if (!auth.user.id) {
    navigateTo("/auth/login");
    return;
  }

  if (!formData.startDate) {
    alert("Please select date.");
    return;
  }

  await navigateTo(
    `/others/form?startDate=${formData.startDate}&selectedSize=${selectedSize.value}`
  );
}
</script>
