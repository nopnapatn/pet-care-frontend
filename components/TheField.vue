<template>
  <div>
    <label for="" class="block mb-2 text-sm font-medium text-primary-black">{{
      label
    }}</label>
    <input
      :type="type"
      id=""
      class="bg-gray-50 border border-gray-300 text-primary-black text-sm rounded-lg focus:ring-primary-green-100 focus:border-primary-green-100 block w-full p-2.5"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["label", "type", "placeholder", "required"]);
</script>
