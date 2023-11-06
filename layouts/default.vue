<template>
  <TheHeader />
  <div class="bg-white pt-16">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
</script>
