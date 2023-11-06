<template>
  <TheAsider />
  <div class="p-4 sm:ml-64">
    <div class="p-4">
      <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
      >
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <NuxtLink
              to="/orders"
              class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
              >Order List</NuxtLink
            >
          </li>
          <li class="mr-2">
            <NuxtLink
              to="/orders/waiting"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Waiting</NuxtLink
            >
          </li>
          <li class="mr-2">
            <NuxtLink
              to="/orders/pending"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Pending</NuxtLink
            >
          </li>
          <li class="mr-2">
            <NuxtLink
              to="/orders/verified"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Verified</NuxtLink
            >
          </li>
          <li class="mr-2">
            <NuxtLink
              to="/orders/inuse"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >In Use</NuxtLink
            >
          </li>
          <li class="mr-2">
            <NuxtLink
              to="/orders/complete"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Settings</NuxtLink
            >
          </li>
          <li class="mr-2">
            <NuxtLink
              to="/orders/canceled"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Canceled</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="py-2"></div>
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
  </div>
</template>

<script setup lang="ts">
const { pending, data: bookingOrders } = await useMyFetch<any>(
  "booking-orders/verified",
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
