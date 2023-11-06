<template>
  <TheHeader v-if="auth.user.role != 'STAFF'" />
  <div class="bg-white pt-20">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();
</script>
