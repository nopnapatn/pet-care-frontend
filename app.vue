<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import("preline");
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
