<template>
  <section>
    <div class="bg-primary-white rounded-lg shadow-lg max-w-4xl">
      <!-- Your room type creation form -->
      <form @submit.prevent="onSubmit" class="p-8 space-y-6">
        <h2 class="headline-large text-primary-orange-100">Create Room Type</h2>

        <!-- Title -->
        <TheField
          id="title"
          v-model="formData.title"
          label="Title"
          placeholder="Enter title"
        ></TheField>
        <div v-if="errorMessage.title" class="text-sm text-red-500">
          {{ errorMessage.title }}
        </div>

        <!-- Description -->
        <TheField
          id="description"
          v-model="formData.description"
          label="Description"
          placeholder="Enter description"
        ></TheField>
        <div v-if="errorMessage.description" class="text-sm text-red-500">
          {{ errorMessage.description }}
        </div>

        <!-- Price -->
        <TheField
          id="price"
          v-model="formData.price"
          label="Price"
          placeholder="Enter price"
        ></TheField>
        <div v-if="errorMessage.price" class="text-sm text-red-500">
          {{ errorMessage.price }}
        </div>

        <!-- Pet Type -->
        <TheField
          id="pet_type"
          v-model="formData.pet_type"
          label="Pet Type"
          placeholder="Select pet type"
        >
          <select>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </TheField>
        <div v-if="errorMessage.pet_type" class="text-sm text-red-500">
          {{ errorMessage.pet_type }}
        </div>

        <!-- Available Amount -->
        <TheField
          id="available_amount"
          v-model="formData.available_amount"
          label="Available Amount"
          placeholder="Enter available amount"
        ></TheField>
        <div v-if="errorMessage.available_amount" class="text-sm text-red-500">
          {{ errorMessage.available_amount }}
        </div>

        <!-- Max Pets -->
        <TheField
          id="max_pets"
          v-model="formData.max_pets"
          label="Max Pets"
          placeholder="Enter max pets"
        >
        </TheField>
        <div v-if="errorMessage.max_pets" class="text-sm text-red-500">
          {{ errorMessage.max_pets }}
        </div>

        <!-- Start Letter -->
        <TheField
          id="start_letter"
          v-model="formData.start_letter"
          label="Start Letter"
          placeholder="Enter start letter"
        ></TheField>
        <div v-if="errorMessage.start_letter" class="text-sm text-red-500">
          {{ errorMessage.start_letter }}
        </div>

        <!-- Multiple Image Upload -->
        <input
          type="file"
          @change="onImageChange"
          name="images"
          id="images"
          multiple
        />

        <!-- Display any status or error message -->
        <div v-if="statusMessage" class="text-sm text-red-500">
          {{ statusMessage }}
        </div>

        <!-- Submit Button -->
        <TheButtonAuth
          colort="bg-primary-green-100"
          colorb="bg-primary-green-200"
          >Create Room Type</TheButtonAuth
        >
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface FormData {
  title: string;
  description: string;
  price: number;
  pet_type: string;
  available_amount: number;
  max_pets: number;
  start_letter: string;
}

interface ErrorMessage {
  title?: string;
  description?: string;
  price?: string;
  pet_type?: string;
  available_amount?: string;
  max_pets?: string;
  start_letter?: string;
}

const formData = reactive<FormData>({
  title: "",
  description: "",
  price: 0,
  pet_type: "",
  available_amount: 0,
  max_pets: 0,
  start_letter: "",
});
const images = ref<File[]>([]);
const errorMessage = ref<ErrorMessage>({});
const statusMessage = ref("");

const onSubmit = async () => {
  // Clear any previous error messages
  errorMessage.value.title = "";
  errorMessage.value.description = "";
  errorMessage.value.price = "";
  errorMessage.value.pet_type = "";
  errorMessage.value.available_amount = "";
  errorMessage.value.max_pets = "";
  errorMessage.value.start_letter = "";

  // Implement validation logic for your room type form
  if (!formData.title) {
    errorMessage.value.title = "Title is required.";
  }
  if (!formData.description) {
    errorMessage.value.description = "Description is required.";
  }
  if (formData.price <= 0) {
    errorMessage.value.price = "Price must be greater than 0.";
  }
  if (!formData.pet_type) {
    errorMessage.value.pet_type = "Pet type is required.";
  }
  if (formData.available_amount <= 0) {
    errorMessage.value.available_amount =
      "Available amount must be greater than 0.";
  }
  if (formData.max_pets <= 0) {
    errorMessage.value.max_pets = "Max pets must be greater than 0.";
  }
  if (!formData.start_letter) {
    errorMessage.value.start_letter = "Start letter is required.";
  }

  if (
    errorMessage.value.title ||
    errorMessage.value.description ||
    errorMessage.value.price ||
    errorMessage.value.pet_type ||
    errorMessage.value.available_amount ||
    errorMessage.value.max_pets ||
    errorMessage.value.start_letter
  ) {
    return;
  }

  // Create a FormData object to include images
  const formDataForImages = new FormData();
  for (let i = 0; i < images.value.length; i++) {
    formDataForImages.append("images[]", images.value[i]);
  }

  console.log(formDataForImages);

  // Append other form data to the same FormData object
  formDataForImages.append("title", formData.title);
  formDataForImages.append("description", formData.description);
  formDataForImages.append("price", formData.price.toString());

  formDataForImages.append("pet_type", formData.pet_type);
  formDataForImages.append(
    "available_amount",
    formData.available_amount.toString()
  );
  formDataForImages.append("max_pets", formData.max_pets.toString());
  formDataForImages.append("start", formData.start_letter);

  // Now, you can make the API request to your Laravel backend
  const { data: response, error } = await useMyFetch<any>("room-types", {
    method: "POST",
    body: formDataForImages,
  });

  // Handle API response and redirection
  if (error.value) {
    console.log(error.value.data["message"]);
    statusMessage.value = error.value.data["message"];
  } else if (response.value !== null) {
    // Successful response
    await navigateTo("/staff/room-type/create");
  }
};

const onImageChange = (event: any) => {
  // Access the selected files from the event object
  const selectedFiles = event.target.files;

  // Push the selected files into the images array
  for (let i = 0; i < selectedFiles.length; i++) {
    images.value.push(selectedFiles[i]);
  }
};
</script>
