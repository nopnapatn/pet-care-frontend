<template>
  <!-- Hero -->
  <section>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
        <!-- Title -->
        <div class="text-center">
          <p
            class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200"
          >
            Easy, fast, and secure online booking.
          </p>
          <h1
            class="text-3xl text-gray-800 font-primary font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200"
          >
            Book a pet friendly place <br />
            <span class="text-primary font-primary">for your bestfriend.</span>
          </h1>
        </div>
        <!-- End Title -->

        <!-- Form -->
        <form>
          <div
            class="mx-auto max-w-6xl sm:flex sm:space-x-3 p-3 bg-white border items-center rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]"
          >
            <div class="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
              <div class="flex" id="date-picker">
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
              <div class="flex">
                <span
                  class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-r-0 border-gray-200 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                >
                  <label for="">Pets</label>
                </span>
                <input
                  type="number"
                  id=""
                  min="1"
                  class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="petsAmount"
                  placeholder="1"
                />
              </div>
            </div>
          </div>
        </form>
        <!-- End Form -->
        <div
          v-if="
            errorMessage.petsAmount !== undefined &&
            errorMessage.petsAmount !== null &&
            errorMessage.petsAmount.length !== 0
          "
        >
          <div
            class="bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
            role="alert"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="flex-shrink-0 h-4 w-4 mt-1"
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div class="ms-3">
                <h3 class="font-semibold">
                  {{ errorMessage.petsAmount }}
                </h3>
                <!-- <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">
                  Chris Lynch published a new version of this page. Refresh to
                  see the changes.
                </p> -->
              </div>
            </div>
          </div>
        </div>
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
          <img
            width="36"
            height="36"
            src="/images/icons/icons8-cat-64.png"
            alt="cat--v1"
          />
        </span>
        <span class="pl-4">Cat</span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="catRoom in catRooms" :key="catRoom.id">
          <a
            @click="navigateToRoomDetails(catRoom)"
            class="w-full rounded-b-xl"
          >
            <TheCardRoomType
              :title="catRoom.title"
              :description="catRoom.description"
              :price="catRoom.price"
              :available_amount="catRoom.available_amount"
              :max_pets="catRoom.max_pets"
              :image="`images/room${catRoom.id}.png`"
            >
            </TheCardRoomType>
          </a>
        </div>
      </div>
      <div class="py-8"></div>
      <div class="flex items-center">
        <span
          class="inline-flex justify-center items-center my-4 w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        >
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/sf-regular/96/year-of-dog.png"
            alt="year-of-dog"
          />
        </span>
        <span class="pl-4">Dog</span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="dogRoom in dogRooms" :key="dogRoom.id">
          <button
            @click="navigateToRoomDetails(dogRoom)"
            class="w-full rounded-b-xl"
          >
            <TheCardRoomType
              :title="dogRoom.title"
              :description="dogRoom.description"
              :price="dogRoom.price"
              :available_amount="dogRoom.available_amount"
              :max_pets="dogRoom.max_pets"
              :image="`images/room${dogRoom.id}.png`"
            >
            </TheCardRoomType>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

const petsAmount = ref();

type RoomType = {
  id: number;
  title: string;
  description: string;
  price: string;
  status: string;
  pet_type: string;
  available_amount: number;
  max_pets: number;
  start: string;
  created_at: string;
  updated_at: string;
};

const { data: roomTypes, error } = await useMyFetch<any>("room-types", {});
const dogRooms = roomTypes.value.filter((roomType: RoomType) => {
  return roomType.pet_type === "DOG";
});
const catRooms = roomTypes.value.filter((roomType: RoomType) => {
  return roomType.pet_type === "CAT";
});

const currentDate = new Date();
const today = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${
  currentDate.getDate() + 1
}`;
const date = ref([today, today]);

const formData = reactive({
  startDate: today,
  endDate: today,
  petsAmount: 1,
});

const errorMessage = reactive({
  petsAmount: "",
});

async function getStart() {
  // if (!formData.startDate || !formData.endDate || !formData.petsAmount) {
  //   return;
  // }
  const { data: availableRooms, error } = await useMyFetch<any>(
    `room-types/get-available-types`,
    {
      method: "POST",
      body: {
        start_date: formData.startDate,
        end_date: formData.endDate,
        pets_amount: formData.petsAmount,
      },
    }
  );
  console.log(formData.startDate);
  console.log(formData.endDate);
  console.log(formData.petsAmount);
  if (availableRooms) {
    console.log(availableRooms.value);
  }
  if (error.value) {
    console.log(error.value);
    console.log(error.value?.message);
  }

  // Update the values in a reactive way
  catRooms.length = 0; // Clear the array
  dogRooms.length = 0; // Clear the array
  availableRooms.value.forEach((roomType: RoomType) => {
    if (roomType.pet_type === "CAT") {
      catRooms.push(roomType);
    }
    if (roomType.pet_type === "DOG") {
      dogRooms.push(roomType);
    }
  });
}

// Watch for petsAmount
// watch(
//   formData,
//   (newData) => {
//     const newPetsAmount = newData.petsAmount;
//     if (
//       newPetsAmount !== null &&
//       newPetsAmount !== undefined &&
//       newPetsAmount > 0
//     ) {
//       errorMessage.petsAmount = "";
//       getStart();
//     }
//   },
//   { deep: true }
// );

const handlePetsAmount = (e: any) => {
  if (
    e.target.value &&
    !e.target.value.isNaN &&
    e.target.value > 0 &&
    e.target.value !== "" &&
    e.target.value !== null &&
    e.target.value !== undefined
  ) {
    const newPetsAmount = e.target.value;
    errorMessage.petsAmount = "";
    formData.petsAmount = newPetsAmount;
    getStart();
  }
};

watch(petsAmount, (newDate) => {
  formData.petsAmount = petsAmount.value;
  getStart();
});

// Watch for datepicker
watch(date, (newDate) => {
  formData.startDate = formatDate(date.value[0]);
  formData.endDate = formatDate(date.value[1]);
  console.log(formData.startDate);
  console.log(formData.endDate);
  getStart();
});

// Format date to "YYYY-MM-DD"
function formatDate(date: string) {
  var d = new Date(date).toLocaleDateString(),
    month = d.split("/")[0],
    day = d.split("/")[1],
    year = d.split("/")[2];

  return [year, month, day].join("-");
}

async function navigateToRoomDetails(roomType: { id: any }) {
  console.log(auth.user.id);
  if (!auth.user.id) {
    navigateTo("/auth/login");
    return;
  }
  if (!formData.startDate || !formData.endDate || !formData.petsAmount) {
    // alert("Please select date and pets amount");
    errorMessage.petsAmount = "Please select date and pets amount";
    return;
  }
  await navigateTo(
    `/rooms/${roomType.id}?startDate=${formData.startDate}&endDate=${formData.endDate}&petsAmount=${formData.petsAmount}&type='BOOKING'}`
  );
}

console.log(errorMessage.petsAmount);
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
