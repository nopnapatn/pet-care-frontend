<template>
  <h1>This is test page</h1>
  <form class="mt-8 mb-4 space-y-6 text-center" @submit.prevent="onSubmit()">
    <!-- Start Date Picker -->
    <div class="demo-datetime-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker
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
const formData = reactive({
  date: "",
  amount: "",
});

async function onSubmit() {
  let startDate = formData.date[0];
  let endDate = formData.date[1];
  console.log(startDate);
  console.log(endDate);
  console.log(formData.amount);
}

const disabledDate = (time: Date) => {
  return time.getTime() < Date.now();
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

<style scoped>
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-datetime-picker .block:last-child {
  border-right: none;
}
.demo-datetime-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
