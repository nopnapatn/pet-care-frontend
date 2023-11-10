<template>
  <div class="shadow-lg grid lg:grid-cols-7 max-w-4xl">
    <div
      class="flex flex-col justify-center items-center lg:col-span-3 w-full bg-primary rounded-l-lg"
    >
      <img src="/images/icons/dog-cat-white.png" width="88" alt="" class="" />
      <h1 class="my-4 headline-large text-zinc-50">Pet Care</h1>
    </div>
    <div class="lg:col-span-4 bg-zinc-50 rounded-lg">
      <div class="w-full p-8 lg:p-16 sm:p-8">
        <h2 class="headline-large text-my-black">{{ title }}</h2>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title"]);
</script>
