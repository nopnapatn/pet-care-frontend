<template>
  <div class="fix h-[46rem] px-16">
    <div class="flex w-full justify-center pt-10">
      <span class="headline-large text-my-black text-center">My Booked</span>
    </div>
    <TheTab></TheTab>
    <!-- card -->
    <div class="p-4"></div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="catRoom in catRooms" :key="catRoom.id">
        <button
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
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// const { data: dogRooms } = await useMyFetch<any>("room-types/dog-rooms", {});
// const { data: catRooms } = await useMyFetch<any>("room-types/cat-rooms", {});
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

const date = ref("");

const formData = reactive({
  startDate: "",
  endDate: "",
  petsAmount: 0,
});

async function getStart() {
  const { data: availableRooms, error } = await useMyFetch<any>(
    `room-types/get-available-types`,
    {
      method: "POST",
      body: {
        startDate: formData.startDate,
        endDate: formData.endDate,
        petsAmount: formData.petsAmount,
      },
    }
  );
  catRooms.value = availableRooms.value.filter((roomType: RoomType) => {
    return roomType.pet_type === "CAT";
  });
  dogRooms.value = availableRooms.value.filter((roomType: RoomType) => {
    return roomType.pet_type === "DOG";
  });
  if (error) {
    console.log(error);
  }
}

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
    `/rooms/${roomType.id}?startDate=${formData.startDate}&endDate=${formData.endDate}&petsAmount=${formData.petsAmount}`
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
