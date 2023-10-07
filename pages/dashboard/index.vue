<template>
  This is admin page
  <section>
    <div v-for="bookingOrder in bookingOrders" :key="bookingOrder.id">
      <h2>bookingOrder.id</h2>
      <h2>bookingOrder.room_type_id</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: bookingOrders, error } = await useMyFetch<any>(
  "booking-orders",
  {}
);
</script>
