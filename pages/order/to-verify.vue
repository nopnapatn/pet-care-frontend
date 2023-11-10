<template>
  <div class="fix h-[46rem] px-16">
    <div class="flex w-full justify-center pt-10">
      <span class="headline-large text-my-black text-center">My Booked</span>
    </div>
    <TheTab></TheTab>
    <!-- card -->
    <div class="p-4"></div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="bookingOrder in bookingOrders" :key="bookingOrder.id">
        <button class="w-full rounded-b-xl">
          <!-- <TheCardRoomType
            :title="bookingOrder.room_type.title"
            :description="bookingOrder.room_type.description"
            :price="bookingOrder.room_type.price"
            :available_amount="bookingOrder.room_type.available_amount"
            :max_pets="bookingOrder.room_type.max_pets"
            :image="`images/room${bookingOrder.room_type.id}.png`"
          >
          </TheCardRoomType> -->
        </button>
      </div>
      <div v-f></div>
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

const { data: bookingOrders, error } = await useMyFetch<any>(
  "booking-orders/pending",
  {}
);
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
