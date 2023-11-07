<template>
  <div v-for="bookingOrder in bookingOrders" :key="bookingOrder.id">
    {{ bookingOrder.id }}
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();

const { data: bookingOrders, error } = await useMyFetch<any>(
  "booking-orders/complete",
  {}
);
</script>
