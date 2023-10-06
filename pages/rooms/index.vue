<template>
  <section>
    <div v-for="roomType in roomTypes" :key="roomType.id">
      <NuxtLink :to="`rooms/` + roomType.id">
        <TheCardRoomType
          :room="roomType.title"
          :amount="roomType.available_amount"
          :price="roomType.price"
        ></TheCardRoomType>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: roomTypes, error } = await useMyFetch<any>("room-types", {});
</script>
