<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="mx-auto max-w-2xl">
      <div class="text-center">
        <h2 class="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
          Edit Room Detail
        </h2>
      </div>

      <!-- Card -->
      <div
        class="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700"
      >
        <form>
          <div class="mb-4 sm:mb-8">
            <label
              for="title"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Title</label
            >
            <input
              id="title"
              type="text"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              :value="roomType.title"
            />
          </div>

          <div>
            <label
              for="description"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Description</label
            >
            <div class="mt-1">
              <textarea
                id="description"
                name="description"
                rows="3"
                class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                :value="roomType.description"
              ></textarea>
            </div>
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="price"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Price</label
            >
            <input
              id="price"
              type="text"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              :value="roomType.price"
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="status"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Status</label
            >
            <input
              id="status"
              type="text"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              :value="roomType.status"
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="available-amount"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Available amount</label
            >
            <input
              id="available-amount"
              type="text"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              :value="roomType.available_amount"
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="max-pets"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Max pets</label
            >
            <input
              id="max-pets"
              type="number"
              min="1"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              :value="roomType.max_pets"
            />
          </div>

          <div>
            <label
              for="images"
              class="block mb-2 text-sm font-medium dark:text-white"
            >
              Upload photo
            </label>
            <input
              id="images"
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </div>

          <div class="mt-6 grid">
            <button
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { data: roomType, error } = await useMyFetch<any>(
  `room-types/${route.params.id}`,
  {}
);

const formData = reactive({
  title: "",
  description: "",
  price: "",
  status: "",
  available_amount: "",
  max_pets: "",
  image: "",
});

function onSubmit() {
  console.log(formData);
}

function handleImageUpload() {}
</script>
