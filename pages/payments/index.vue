<template>
  <TheAsider />
  <div class="mt-6 p-4">
    <div>
      <UInput v-model="searchQuery" placeholder="Filter name..." />
      <UTable
        :columns="columns"
        :rows="rows"
        :sort="{ column: 'checkIn', direction: 'asc' }"
        :loading="pending"
        :loading-state="{
          icon: 'i-heroicons-arrow-path-20-solid',
          label: 'Loading...',
        }"
      />
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="filteredRows.length"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const { pending, data: bookingOrders } = await useMyFetch<any>(
  "booking-orders",
  {}
);
const page = ref(1);
const pageCount = 10;
const rows = computed(() => {
  return filteredRows.value.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount
  );
});

const searchQuery = ref("");
const filteredRows = computed(() => {
  if (!searchQuery.value) {
    return bookingOrders.value;
  }

  return bookingOrders.value.filter((bookingOrder: any) => {
    return String(bookingOrder.user_name)
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });
});

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "room_number",
    label: "Room Number",
    sortable: true,
  },
  {
    key: "user_name",
    label: "User Name",
    sortable: true,
  },
  {
    key: "check_in",
    label: "Check In",
    sortable: true,
  },
  {
    key: "check_out",
    label: "Check Out",
    sortable: true,
  },
  {
    key: "pets_amount",
    label: "Pets Amount",
    sortable: true,
  },
  {
    key: "total_price",
    label: "Total Price",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
  //   {
  //     key: "actions",
  //     label: "Actions",
  //   },
];
</script>
