<template>
  Test Date Picker
  <VDatePicker v-model.range="range" mode="dateTime" />
</template>

<script setup lang="ts">
const date = ref(new Date());
date.value.setDate(date.value.getDate() + 1);
const range = reactive({ start: new Date(), end: date.value });
</script>
