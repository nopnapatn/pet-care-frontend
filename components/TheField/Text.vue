<template>
  <div class="flex">
    <span
      class="inline-flex items-center px-3 text-sm text-gray-900 bg-neutral-100 border border-r-0 border-gray-200 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
    >
      {{ label }}
    </span>
    <input
      class="rounded-none rounded-r-lg bg-gray-50 border text-my-black focus:ring-primary focus:border-primary block flex-1 min-w-0 w-full text-sm border-gray-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :type="type"
      :modelValue="modelValue"
      :autocomplete="autocomplete"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
