<template>
  <div class="fix flex-col h-[46rem] justify-center px-48 py-10 gap-y-6">
    <div class="flex w-full justify-center">
      <ol class="flex justify-around w-full">
        <li
          class="flex w-full items-center text-yellow-500 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-accent/40 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-ui-radios"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </span>
        </li>
        <li
          class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
              />
            </svg>
          </span>
        </li>
        <li class="flex items-center">
          <span
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-credit-card-2-back-fill fill-gray-600"
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
    <div class="flex items-center justify-start px-8 gap-x-4 py-8">
      <!-- <div class="flex justify-center py-6 pb-8">
        <select
          name="pet-size"
          id="pet-size"
          class="select select-bordered bg-white focus:ring-primary focus:border-primary"
        >
          <option value="2">Small</option>
          <option value="3">Medium</option>
          <option value="4">Large</option>
        </select>
      </div> -->

      <USelect v-model="size" :options="sizes" />

      <div class="flex">
        <!-- Start Date Picker -->
        <span
          class="inline-flex items-center px-3 text-sm text-gray-900 bg-neutral-100 border border-r-0 border-gray-200 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
          Date
        </span>
        <VueDatePicker
          v-model="date"
          range
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
    </div>
    <div class="grid grid-cols-3">
      <!-- col 1 -->
      <div class="flex flex-col px-10 gap-y-4">
        <div class="flex flex-col gap-y-2">
          <h1 class="text-lg">Select Pet</h1>
          <div class="flex gap-4">
            <input
              type="radio"
              name="radio-1"
              class="text-secondary focus:ring-primary"
              checked
            />
            <label for="radio1">Dog</label>
          </div>
          <div class="flex gap-4">
            <input
              type="radio"
              name="radio-1"
              class="text-secondary focus:ring-primary"
            />
            <label for="radio1">Cat</label>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <h1 class="text-lg">Select Package</h1>
          <div class="flex gap-4">
            <input
              type="radio"
              name="radio-2"
              class="text-secondary focus:ring-primary"
              checked
            />
            <label for="radio2">Spa Bath Package</label>
          </div>
          <div class="flex gap-4">
            <input
              type="radio"
              name="radio-2"
              class="text-secondary focus:ring-primary"
              checked
            />
            <label for="radio3">All-Inclusive Groom Package</label>
          </div>
          <div class="flex gap-4">
            <input
              type="radio"
              name="radio-2"
              class="text-secondary focus:ring-primary"
              checked
            />
            <label for="radio3">None</label>
          </div>
        </div>
      </div>
      <!-- col 2 -->
      <div class="flex flex-col px-10">
        <div class="flex flex-col gap-y-4 items-start mb-4">
          <div class="flex flex-col gap-y-2 w-full">
            <h1 class="text-lg">Select type</h1>
            <div class="flex gap-4">
              <input
                type="radio"
                name="radio-3"
                class="text-secondary focus:ring-primary"
                checked
              />
              <div class="flex justify-between w-full">
                <label for="radio3">Trim Only</label>
                <h1 class="text-md">$45</h1>
              </div>
            </div>
            <div class="flex gap-4">
              <input
                type="radio"
                name="radio-3"
                class="text-secondary focus:ring-primary"
                checked
              />
              <div class="flex justify-between w-full">
                <label for="radio3">Complete Cut</label>
                <h1>$60</h1>
              </div>
            </div>
          </div>
          <h1 class="text-lg">Select A La Carte Services</h1>
          <!-- c1 -->
          <div class="flex justify-between w-full">
            <div class="flex items-center">
              <input
                id="checkbox-1"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Brush Out</label
              >
            </div>
            <h1>$45</h1>
          </div>
          <!-- c2 -->
          <div class="flex justify-between w-full">
            <div class="flex items-center">
              <input
                checked
                id="checkbox-2"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Breath Freshening</label
              >
            </div>
            <h1>$45</h1>
          </div>
          <!-- c3 -->
          <div class="flex justify-between w-full">
            <div class="flex items-center">
              <input
                checked
                id="checkbox-3"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-3"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Nail Trim & File</label
              >
            </div>
            <h1>$45</h1>
          </div>
          <!-- c4 -->
          <div class="flex justify-between w-full">
            <div class="flex items-center">
              <input
                checked
                id="checkbox-4"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-4"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Medicated Ear Cleaning</label
              >
            </div>
            <h1>$45</h1>
          </div>
          <!-- c5 -->
          <div class="flex justify-between w-full">
            <div class="flex items-center">
              <input
                checked
                id="checkbox-5"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-5"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Flea Bath</label
              >
            </div>
            <h1>$45</h1>
          </div>
          <!-- c6 -->
          <div class="flex justify-between w-full">
            <div class="flex items-center">
              <input
                checked
                id="checkbox-6"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-6"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Shed Reducing Treatment</label
              >
            </div>
            <h1>$45</h1>
          </div>
          <!-- c7 -->
          <div class="flex justify-between w-full">
            <div class="flex items-center">
              <input
                checked
                id="checkbox-7"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-7"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Paw Polish</label
              >
            </div>
            <h1>$45</h1>
          </div>
        </div>
      </div>
      <!-- col 3 -->
      <div class="bg-primary/20 mx-6 px-8 h-fit pb-8 rounded-lg">
        <div class="flex justify-between py-8">
          <h1>Total</h1>
          <h1>฿300</h1>
        </div>
        <NuxtLink
          to="/others/report"
          class="btn btn-primary text-white bg-secondary w-full"
        >
          Checkout
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

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
  formData.startDate = formatDate(date.value[0]);
  // formData.endDate = formatDate(date.value[1]);
  console.log(formData.startDate);
  // console.log(formData.endDate);
  console.log(date.value);
});

const sizes = ["Small", "Medium", "Larges"];

const size = ref(sizes[0]);
</script>
