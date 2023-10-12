<template>
  <section>
    <div v-for="roomType in roomTypes" :key="roomType.id">
      <TheCardRoomType
        :room="roomType.title"
        :amount="roomType.available_amount"
        :price="roomType.price"
        :to="`rooms/` + roomType.id"
      ></TheCardRoomType>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: roomTypes, error } = await useMyFetch<any>("room-types", {});
</script>
