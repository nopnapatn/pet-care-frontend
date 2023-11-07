<template>
  <div
    class="w-full max-w-2xl bg-white border border-gray-200 rounded-lg mx-2 shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      class="rounded-lg"
      :src="`/images/room${id}.png`"
      alt="product image"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["id"]);
</script>
