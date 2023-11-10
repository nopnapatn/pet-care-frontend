<template>
  <TheHeader v-if="auth.user.role != 'STAFF'" class="pb-20" />
  <div class="bg-white">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
</script>
