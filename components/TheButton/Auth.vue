<template>
  <button
    class="group relative inline-block subtitle-large rounded-lg shadow-lg focus:outline-none focus:ring"
    :to="to"
    :class="colorb"
  >
    <span
      class="block px-12 py-3 rounded-lg text-primary-white shadow-lg transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
      :class="colort"
    >
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps(["to", "colort", "colorb"]);
</script>
