<template>
  <section class="bg-white min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-6xl text-primary font-primary tracking-tight font-extrabold dark:text-white"
        >
          My Booking
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          Loving pet care in your neighborhood™ Book our services for your pet
        </p>
      </div>

      <ul
        class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
      >
        <li class="mr-2">
          <NuxtLink
            href="/booked/hotel"
            aria-current="page"
            class="inline-block p-4 text-white bg-primary rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            >Hotel</NuxtLink
          >
        </li>
        <li class="mr-2">
          <NuxtLink
            to="/booked/service"
            class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >Service</NuxtLink
          >
        </li>
      </ul>
      <div class="py-4"></div>
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <div v-for="bookingOrder in bookingOrders" :key="bookingOrder.id">
          <TheCardBookedHotel
            :id="bookingOrder.id"
            :title="bookingOrder.room_type.title"
            :status="bookingOrder.status"
            :total="bookingOrder.total_price"
            :image="bookingOrder.room_type.image_url"
            :description="bookingOrder.room_type.description"
            :checkin="bookingOrder.check_in"
            :checkout="bookingOrder.check_out"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
const { data: bookingOrders, error } = await useMyFetch<any>(
  `booking-orders/${auth.user.id}/my-bookings`,
  {}
);

console.log(bookingOrders.value);

// console.log(bookingOrders);
// console.log(error);
</script>
