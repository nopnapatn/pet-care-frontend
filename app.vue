<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import("preline");

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
