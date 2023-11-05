<template>
  <section class="rooms-layout">
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-2 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: roomTypes, error } = await useMyFetch<any>("room-types", {});
</script>
