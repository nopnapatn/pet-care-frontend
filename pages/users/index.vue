<template>
  <TheAsider />
  <div class="p-4 sm:ml-64">
    <div class="mt-6 p-4">
      <div>
        <UInput v-model="searchQuery" placeholder="Filter name..." />
        <UTable
          :columns="columns"
          :rows="rows"
          :sort="{ column: 'id', direction: 'asc' }"
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
const { pending, data: users } = await useMyFetch<any>("users", {});
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
    return users.value;
  }

  return users.value.filter((users: any) => {
    return String(users.first_name)
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
    key: "first_name",
    label: "First Name",
    sortable: true,
  },
  {
    key: "last_name",
    label: "Last Name",
    sortable: true,
  },
  {
    key: "phone_number",
    label: "Phone Number",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  //   {
  //     key: "actions",
  //     label: "Actions",
  //   },
];
</script>
