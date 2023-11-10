<template>
  <section>
    <div class="px-16 py-8">
      <h1
        class="mb-4 text-4xl text-primary font-extrabold font-primary tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white"
      >
        My Booking
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
      >
        This page displays your booking order, including hotel reservations and
        other services.
      </p>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="">
          <li class="mr-2">
            <NuxtLink
              to="/booked/hotel"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Hotel</NuxtLink
            >
          </li>
          <li class="mr-2">
            <NuxtLink
              to="/booked/service"
              class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
              >Service</NuxtLink
            >
          </li>
        </div>
        <div class="lg:col-span-2"></div>
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

const fetchedUserServiceOrder = await useMyFetch<any>(
  `service-orders/${auth.user.id}/get-users-order`,
  {}
);

const userServiceOrder = fetchedUserServiceOrder.data.value;

console.log(userServiceOrder);

async function navigateToEachOrder() {
  
}

// const fetchedServiceItem = await useMyFetch<any>(
//   `service-orders/get-order-item`,
//   {
//     paras: {
//       order_id: userServiceOrder.id,
//     }, 
//   }
// );

</script>
