<template>
  <div>
    <label
      :for="id"
      class="block mb-2 text-sm font-medium text-primary-black"
      >{{ label }}</label
    >

    <input
      class="bg-gray-50 border border-gray-300 text-primary-black text-sm rounded-lg focus:ring-primary-green-100 focus:border-primary-green-100 block w-full p-2.5"
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
