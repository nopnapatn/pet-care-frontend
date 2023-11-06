<template>
  <form class="mt-8 mb-4 space-y-6 text-center" @submit.prevent="onSubmit()">
    <div class="flex-col">
      <h1>Room ID: {{ route.params.id }}</h1>
      <h1>
        {{ roomType.title }}
      </h1>
      <h1>Available amount: {{ roomType.available_amount }}</h1>
      <h1>Price: {{ roomType.price }}</h1>
      <h1>{{ formData.nights }} / Nights</h1>
    </div>

    <!-- Start Datepicker -->
    <VueDatePicker v-model="date" range format="dd/M/yyyy" :enable-time-picker="false" disable-year-select auto-apply
      placeholder="Select date" :min-date="new Date(new Date().setDate(new Date().getDate() + 1))"
      :max-date="new Date(new Date().setDate(new Date().getDate() + 30))" required></VueDatePicker>

    <!-- End Datepicker -->
    <!-- Owner Instruction -->
    <textarea v-model="formData.ownerInstruction" cols="30" rows="10"
      placeholder="Tell Staff about your pets instruction"></textarea>
    <!-- End Owner Instruction -->
    <!-- Amount -->
    <input type="number" placeholder="Amount of your pets" min="0" :max="roomType.max_pets" v-model="formData.petsAmount"
      class="input input-bordered w-full max-w-xs" />
    <!-- End Amount -->
    <TheButtonAuth colort="bg-primary-green-100" colorb="bg-primary-green-200">Submit
    </TheButtonAuth>
  </form>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const route = useRoute();
const { data: roomType, error } = await useMyFetch<any>(
  `room-types/${route.params.id}`,
  {}
);

const date = ref("");

const formData = reactive({
  roomTypeId: route.params.id,
  startDate: "",
  endDate: "",
  petsAmount: "",
  nights: 0,
  ownerInstruction: "",
});

function calculateNights(date1: string, date2: string) {
  return (Date.parse(date2) - Date.parse(date1)) / 86400000;
}

watch(date, (newDate) => {
  formData.startDate = formatDate(date.value[0]);
  formData.endDate = formatDate(date.value[1]);
  console.log(formData.startDate);
  console.log(formData.endDate);
  formData.nights = calculateNights(date.value[0], date.value[1]);
});

async function onSubmit() {
  console.log(formData);
  const { data: response, error } = await useMyFetch<any>(
    `room-types/${route.params.id}/book`,
    {
      method: "POST",
      body: {
        room_type_id: formData.roomTypeId,
        check_in: formData.startDate,
        check_out: formData.endDate,
        pets_amount: formData.petsAmount,
        owner_instruction: formData.ownerInstruction,
      },
    }
  );
  if (response.value !== null) {
    await navigateTo("/");
  }
}

function formatDate(date: string) {
  var d = new Date(date).toLocaleDateString(),
    month = d.split("/")[0],
    day = d.split("/")[1],
    year = d.split("/")[2];

  return [year, month, day].join("-");
}
</script>
