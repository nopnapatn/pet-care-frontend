<template>
  <!-- Hero -->
  <section>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
        <!-- Title -->
        <div class="text-center">
          <p
            class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200"
          >
            Small business solutions
          </p>
          <h1
            class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200"
          >
            Turn online shoppers into
            <span class="text-blue-500">lifetime customers</span>
          </h1>
        </div>
        <!-- End Title -->

        <!-- Form -->
        <form>
          <div
            class="mx-auto max-w-6xl sm:flex sm:space-x-3 p-3 bg-white border items-center rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]"
          >
            <div class="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
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
                  :min-date="
                    new Date(new Date().setDate(new Date().getDate() + 1))
                  "
                  :max-date="
                    new Date(new Date().setDate(new Date().getDate() + 30))
                  "
                  required
                ></VueDatePicker>
                <!-- End Date Picker -->
              </div>
            </div>
            <div
              class="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] dark:border-gray-700"
            >
              <!-- PET AMOUNT -->
              <div>
                <UInput
                  icon="i-heroicons-magnifying-glass-20-solid"
                  size="xl"
                  color="white"
                  :trailing="false"
                  v-model="formData.petsAmount"
                  required
                />
              </div>
            </div>
            <div class="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
              <a
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-4 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </section>
  <!-- End Hero -->

  <div class="pb-16">
    <div class="max-w-[85rem] px-4 p-10 sm:px-6 lg:px-24 lg:py-2 mx-auto">
      <div class="flex items-center">
        <span
          class="inline-flex justify-center items-center my-4 w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
            />
          </svg>
        </span>
        <span class="pl-4">Cat</span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="catRoom in catRooms" :key="catRoom.id">
          <TheCardRoomType
            :title="catRoom.title"
            :description="catRoom.description"
            :price="catRoom.price"
            :available_amount="catRoom.available_amount"
            :max_pets="catRoom.max_pets"
            :image="`images/room${catRoom.id}.png`"
          >
          </TheCardRoomType>
          <button
            @click="navigateToRoomDetails(catRoom)"
            class="w-full rounded-b-xl"
          >
            <div class="bg-black">asdsa</div>
          </button>
        </div>
      </div>
      <div class="py-8"></div>
      <div class="flex items-center">
        <span
          class="inline-flex justify-center items-center my-4 w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
            />
          </svg>
        </span>
        <span class="pl-4">Dog</span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="dogRoom in dogRooms" :key="dogRoom.id">
          <TheCardRoomType
            :title="dogRoom.title"
            :description="dogRoom.description"
            :price="dogRoom.price"
            :available_amount="dogRoom.available_amount"
            :max_pets="dogRoom.max_pets"
            :image="`images/room${dogRoom.id}.png`"
            :roomData="dogRooms"
          >
          </TheCardRoomType>
          <button
            @click="navigateToRoomDetails(dogRoom)"
            class="w-full rounded-b-xl"
          >
            <div class="bg-black">asdsa</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const { data: roomTypes, error } = await useMyFetch<any>("room-types", {});
const { data: dogRooms } = await useMyFetch<any>("room-types/dog-rooms", {});
const { data: catRooms } = await useMyFetch<any>("room-types/cat-rooms", {});

// const date = ref(new Date(new Date().setDate(new Date().getDate() + 1)));
const date = ref("");

const formData = reactive({
  startDate: "",
  endDate: "",
  petsAmount: 0,
});

// Format date to "YYYY-MM-DD"
function formatDate(date: string) {
  var d = new Date(date).toLocaleDateString(),
    month = d.split("/")[0],
    day = d.split("/")[1],
    year = d.split("/")[2];

  return [year, month, day].join("-");
}

// Watch for datepicker
watch(date, (newDate) => {
  formData.startDate = formatDate(date.value[0]);
  formData.endDate = formatDate(date.value[1]);
  console.log(formData.startDate);
  console.log(formData.endDate);
  console.log(date.value);
});

async function navigateToRoomDetails(roomType: { id: any }) {
  await navigateTo(
    `/rooms/${roomType.id}
      ?startDate=${formData.startDate}
      &endDate=${formData.endDate}
      &petsAmount=${formData.petsAmount}`
  );
}
</script>

<style>
.dp__theme_light {
  --dp-background-color: #f9fafb;
  --dp-primary-color: #e8ac96;
}

:root {
  /*Font sizes*/
  --dp-font-size: 1.2rem; /*Default font-size*/
  --dp-preview-font-size: 0.8rem; /*Font size of the date preview in the action row*/
  --dp-time-font-size: 0.8rem; /*Font size in the time picker*/
}
</style>
