<template>
  <div class="fix h-[46rem] px-16">
    This is the booked page
    <div v-for="bookingOrder in bookingOrders" :key="bookingOrder.id">
      {{ bookingOrder.total_price }}
      {{ bookingOrder.room_type.title }}
      {{ bookingOrder.status }}
      <div v-if="bookingOrder.status === 'WAITING'">
        <button
          @click="
            navigateTo(
              `/payments/create?bookingOrderId=${bookingOrder.id}&type=HOTEL`
            )
          "
        >
          Verify
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
const { data: bookingOrders, error } = await useMyFetch<any>(
  `booking-orders/${auth.user.id}/my-bookings`,
  {}
);
// console.log(bookingOrders);
if (error) {
  console.log(error.value);
}
</script>
