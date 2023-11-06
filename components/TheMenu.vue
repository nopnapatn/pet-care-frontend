<template>
  <li>
    <!-- <NuxtLink :to="to" class="flex items-center bg-zinc-50 border h-12"> -->
    <NuxtLink :to="to" class="flex items-center h-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="h-3/5 pr-2 fill-my-black"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <slot />
      </svg>
      <div class="">{{ title }}</div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(["title", "to"]);
</script>
