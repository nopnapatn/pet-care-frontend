<template>
    <div v-if="errorMessage" class="text-sm text-red-500">
        {{ errorMessage }}
    </div>
</template>
  
<script setup>
import { ref, watch } from 'vue';

const errorMessage = ref('');

// Watch for changes in the formData and update the errorMessage accordingly
watch(() => formData, () => {
    // Reset the error message
    errorMessage.value = '';
});

</script>
  