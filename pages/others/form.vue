<template>
  <div class="fix flex-col h-[46rem] justify-center px-48 py-10 gap-y-6">
    <div class="flex w-full justify-center">
      <ol class="flex justify-around w-full">
        <li
          class="flex w-full items-center text-yellow-500 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-accent/40 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-ui-radios"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </span>
        </li>
        <li
          class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
              />
            </svg>
          </span>
        </li>
        <li class="flex items-center">
          <span
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-credit-card-2-back-fill fill-gray-600"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"
              />
            </svg>
          </span>
        </li>
      </ol>
    </div>
    <div class="flex pt-8 px-10 gap-8">
      <h1>Size: {{ breedSize }}</h1>
      <h1>Date: {{ date }}</h1>
    </div>
    <div class="grid grid-cols-3 pt-8">
      <!-- col 1 -->
      <div class="flex flex-col px-10 gap-y-4">
        <!-- select pet -->
        <div class="flex flex-col gap-y-2">
          <h1 class="text-lg">Select Pet</h1>
          <div class="flex gap-4">
            <input
              type="radio"
              name="dog_type"
              value="DOG"
              id="dog"
              v-model="selectedPet"
              class="text-secondary focus:ring-primary"
            />
            <label for="dog">Dog</label>
          </div>
          <div class="flex gap-4">
            <input
              type="radio"
              name="cat_type"
              value="CAT"
              id="cat"
              v-model="selectedPet"
              class="text-secondary focus:ring-primary"
            />
            <label for="cat">Cat</label>
          </div>
        </div>
        <!-- select package -->
        <div class="flex flex-col gap-y-2">
          <h1 class="text-lg">Select Package</h1>
          <div class="flex gap-4">
            <input
              type="radio"
              name="spa"
              value="Spa Bath Package"
              id="spa"
              v-model="selectedPackage"
              class="text-secondary focus:ring-primary"
              checked
            />
            <label for="spa">Spa Bath Package</label>
          </div>
          <div class="flex gap-4">
            <input
              type="radio"
              name="groom"
              value="All-Inclusive Groom Package"
              id="groom"
              v-model="selectedPackage"
              class="text-secondary focus:ring-primary"
            />
            <label for="groom">All-Inclusive Groom Package</label>
          </div>
          <div class="flex gap-4">
            <input
              type="radio"
              name="none"
              value="None"
              v-model="selectedPackage"
              id="none"
              class="text-secondary focus:ring-primary"
            />
            <label for="none">None</label>
          </div>
        </div>
      </div>
      <!-- col 2 -->
      <div class="flex flex-col px-1 mr-6">
        <div class="flex flex-col gap-y-4 items-start mb-4">
          <!-- select type -->
          <div class="flex flex-col gap-y-2 w-full">
            <div v-if="selectedPackage !== 'None'">
              <h1 class="text-lg">Select type</h1>
            </div>
            <div v-if="selectedPackage === 'Spa Bath Package'">
              <!-- Render spa-related options dynamically based on spaItems -->
              <div v-for="item in spaItems" :key="item.id">
                <!-- Render item details here using item -->
                <div class="flex gap-4">
                  <input
                    type="radio"
                    name="radio-3"
                    :value="item"
                    v-model="selectedType"
                    class="text-secondary focus:ring-primary"
                  />
                  <div class="flex justify-between w-full">
                    <label for="radio3">{{ item.option }}</label>
                    <h1 class="text-md">฿{{ item.price }}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="selectedPackage === 'All-Inclusive Groom Package'">
              <!-- Render groom-related options dynamically based on groomItems -->
              <div v-for="item in groomItems" :key="item.id">
                <!-- Render item details here using item -->
                <div class="flex gap-4">
                  <input
                    type="radio"
                    name="radio-3"
                    :value="item"
                    :id="`${item.id}`"
                    v-model="selectedType"
                    class="text-secondary focus:ring-primary"
                  />
                  <div class="flex justify-between w-full">
                    <label :for="`${item.id}`">{{ item.option }}</label>
                    <h1 class="text-md">${{ item.price }}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- select a la carte -->
          <h1 class="text-lg">Select A La Carte Services</h1>
          <div
            v-for="item in alacarteItems"
            :key="item.id"
            class="flex justify-between w-full"
          >
            <div class="flex items-center">
              <input
                :id="`checkbox-${item.id}`"
                type="checkbox"
                :value="item"
                v-model="selectedALaCarte"
                class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                :for="`checkbox-${item.id}`"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{{ item.option }}</label
              >
            </div>
            <h1>+ ฿{{ item.price }}</h1>
          </div>
        </div>
      </div>
      <!-- col 3 -->
      <div class="bg-primary/20 mx-6 px-8 h-fit pb-8 rounded-lg">
        <div class="flex justify-between py-8">
          <h1>Total</h1>
          <h1>฿{{ sum }}</h1>
        </div>

        <a
          @click="navigateToServiceReport()"
          class="btn btn-primary text-white bg-secondary w-full"
        >
          Checkout
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useAuthStore } from "~/stores/useAuthStore";

const selectedALaCarte = ref([]);
const selectedType = ref({ price: 0 });
const pack = ref([]);
var sum: number = 0;
var sum_checked: number = 0;

function packSelected() {}

watch(selectedALaCarte, (newDate) => {
  sum = 0;
  sum_checked = 0;
  for (var val of selectedALaCarte.value) {
    sum += parseInt(val["price"], 10);
    sum_checked += parseInt(val["price"], 10);
  }
  if (sum_checked == 0) {
    sum += Number(selectedType.value["price"]);
  } else if (Number(selectedType.value["price"]) != 0) {
    sum = Number(selectedType.value["price"]) + sum_checked;
  }
});
watch(selectedType, (newDate) => {
  sum = sum_checked;
  sum += Number(selectedType.value["price"]);
});

const auth = useAuthStore();

type ServiceItem = {
  id: number;
  service_name: string;
  type: string;
  option: string;
  price: number;
  breed_size: string;
  created_at: string;
  updated_at: string;
};

type SelectSeviceItem = {
  id: number;
  option: string;
  price: number;
};

const selectedPet = ref("DOG");

const route = useRoute();

const breedSize = route.query.selectedSize;
const date = route.query.startDate;

const serviceItem = await useMyFetch<any>(
  `service-items/get-service-items-by-size`,
  {
    params: {
      breed_size: breedSize,
    },
  }
);

console.log(serviceItem.data.value);

const serviceItems: ServiceItem[] = serviceItem.data.value;

console.log(serviceItems);

const packageItems: ServiceItem[] = serviceItems.filter(
  (item) => item.type === "package"
);
const spaItems: ServiceItem[] = serviceItems.filter(
  (item) => item.service_name === "Spa Bath Package"
);
const groomItems: ServiceItem[] = serviceItems.filter(
  (item) => item.service_name === "All-Inclusive Groom Package"
);

const selectedPackage = ref("Spa Bath Package"); // Default selected package

const alacarteItems: ServiceItem[] = serviceItems.filter(
  (item) => item.type === "alacarte"
);

watchEffect(() => {
  if (selectedPackage.value === "Spa Bath Package") {
    selectedType.value = spaItems[0] || { price: 0 };
  } else if (selectedPackage.value === "All-Inclusive Groom Package") {
    selectedType.value = groomItems[0] || { price: 0 };
  } else if (selectedPackage.value === "None") {
    selectedType.value = { price: 0 };
  } else {
    selectedType.value = { price: 0 };
  }
});

async function navigateToServiceReport() {
  const alacarteIDs = selectedALaCarte.value.map((item) => item.id).join(",");

  const queryParams = {
    service_date: date,
    pet_type: selectedPet.value,
    PackageID: selectedType.value.id, // Include the selectedType
    AlacarteIDs: alacarteIDs, // Include the selectedAlacarte as a comma-separated string
  };

  await navigateTo({ path: "/others/report", query: queryParams });
}
</script>
