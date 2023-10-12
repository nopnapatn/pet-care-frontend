<template>
  <section>
    <div v-for="roomType in roomTypes" :key="roomType.id">
      <TheCardRoomType
        :room="roomType.title"
        :amount="roomType.available_amount"
        :price="roomType.price"
      ></TheCardRoomType>
      <div class="card-actions justify-center">
        <nuxt-link :to="`edit-room/${roomType.id}`">
          <button class="btn btn-primary">Edit</button>
        </nuxt-link>
      </div>
      <div class="card-actions justify-center">
        <nuxt-link @click="deleteRoomType(roomType.id)">
          <button class="btn btn-primary">Delete</button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: roomTypes, error } = await useMyFetch<any>("room-types", {});

async function deleteRoomType(id: string) {
  // validate roomType is all available
  try {
    const response = await useMyFetch<any>(`room-types/${id}`, {
      method: "DELETE",
    });

    // Check if the deletion was successful
    if (response !== null) {
      // Refresh the list of roomTypes to reflect the changes
      await refreshRoomTypes();
    }
  } catch (error) {
    console.error("Error deleting roomType", error);
  }
}

async function refreshRoomTypes() {
  try {
    const { data } = await useMyFetch<any>("room-types", {});
    roomTypes.value = data; // Update the roomTypes data
  } catch (error) {
    console.error("Error refreshing roomTypes", error);
  }
}
</script>
