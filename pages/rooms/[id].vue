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
    <!-- Start Date Picker -->
    <div class="demo-datetime-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker
          @change="calculateNights()"
          v-model="formData.date"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
        />
      </div>
    </div>
    <!-- End Date Picker -->
    <input
      type="number"
      placeholder="Amount of your pets"
      min="0"
      max="4"
      v-model="formData.amount"
      class="input input-bordered w-full max-w-xs"
    />
    <TheButtonAuth colort="bg-primary-green-100" colorb="bg-primary-green-200"
      >Submit
    </TheButtonAuth>
  </form>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: roomType, error } = await useMyFetch<any>(
  `room-types/${route.params.id}`,
  {}
);

const formData = reactive({
  date: "",
  amount: "",
  nights: 0,
});

const startDate = formData.date[0];
const endDate = formData.date[1];

function calculateNights() {
  const startDate = formData.date[0];
  const endDate = formData.date[1];
  formData.nights = Math.floor(
    (Date.parse(endDate) - Date.parse(startDate)) / 86400000
  );
}

async function onSubmit() {
  console.log(startDate);
  console.log(endDate);
  console.log(formData.amount);
  //   const { data: data, error } = await useMyFetch<any>(
  //     `room-types/${route.params.id}/book`,
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   );
}

const disabledDate = (time: Date) => {
  return time.getTime() < Date.now();
  // Enable Today
  //   time.getTime() + 3600 * 1000 * 24 < Date.now();
};

const shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Tommorow",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() + 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "Next week",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
</script>
