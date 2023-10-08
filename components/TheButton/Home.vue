<template>
  <NuxtLink
    class="group relative inline-flex items-center overflow-hidden rounded-lg px-8 hover:pr-10 py-3 text-primary-white focus:outline-none focus:ring shadow-lg"
    :to="to"
    :class="color"
  >
    <span class="absolute mr-2 -end-full transition-all group-hover:end-4">
      <img
        src="/images/icons/paw-icon.png"
        width="24"
        height="24"
        alt="Paw icon"
        title="Paw icon"
      />
    </span>

    <span class="text-xl text-white font-bold transition-all group-hover:me-4">
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps(["to", "color"]);
</script>
