<template>
  <section class="rooms-layout">
    <div v-for="roomType in roomTypes" :key="roomType.id">
      <TheCardRoomType
        :title="roomType.title"
        :description="roomType.description"
        :price="roomType.price"
        :available_amount="roomType.available_amount"
        :max_pets="roomType.max_pets"
        :to="`rooms/` + roomType.id"
        :image="`images/room` + roomType.id + `.png`"
      ></TheCardRoomType>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: roomTypes, error } = await useMyFetch<any>("room-types", {});
</script>
