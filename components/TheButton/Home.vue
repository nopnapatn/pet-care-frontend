<template>
  <a
    class="group relative inline-flex items-center overflow-hidden rounded-lg px-8 py-3 text-primary-white focus:outline-none focus:ring shadow-lg"
    :to="to"
    :class="class"
  >
    <span class="absolute -end-full transition-all group-hover:end-4">
      <svg
        class="h-5 w-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>

    <span class="headline-small transition-all group-hover:me-4">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps(["to", "class"]);
</script>
