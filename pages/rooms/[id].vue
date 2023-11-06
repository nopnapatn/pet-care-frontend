<template>
  <section>
    <div class="flex items-center justify-center pt-8">
      <div
        class="carousel carousel-center max-w-6xl space-x-4 bg-translate rounded-xl"
      >
        <div class="carousel-item">
          <TheCardGallery />
          <TheCardGallery />
          <TheCardGallery />
        </div>
      </div>
    </div>
    <div class="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div class="max-w-2xl lg:max-w-5xl mx-auto">
        <div class="mt-12 grid lg:grid-cols-2 gap-6 lg:gap-16">
          <div class="divide-y divide-gray-200">
            <div class="flex gap-x-7 py-6">
              <svg
                class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                />
              </svg>
              <div>
                <h3 class="font-semibold text-gray-800">
                  {{ roomType.title }}
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  We're here to help with any questions or code.
                </p>
                <!-- <div
                  class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                >
                  {{ formData.nights }} Nights
                </div> -->
              </div>
            </div>

            <div class="flex gap-x-7 py-6">
              <svg
                class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                />
              </svg>
              <div>
                <h3 class="font-semibold text-gray-800">Contact details</h3>
                <p class="mt-1 text-sm text-gray-500">
                  We're here to help with any questions or code.
                </p>
                <div
                  class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                >
                  Name <br />
                  {{ auth.user.firstName }} {{ auth.user.lastName }}
                  <br /><br />
                  Email <br />
                  {{ auth.user.email }} <br /><br />
                  Phone Number <br />
                  {{ auth.user.phoneNumber }} <br />
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white shadow flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8"
          >
            <h2 class="mb-8 text-xl font-semibold text-gray-800">
              Price details
            </h2>
            {{ route.query.startDate }} - {{ route.query.endDate }}
            <br />
            {{ route.query.petsAmount }} Pets
            <br />
            {{ totalPrice }}
            <form @submit.prevent="onSubmit()">
              <div class="grid gap-4">
                <div>
                  <textarea
                    v-model="formData.ownerInstruction"
                    cols="45"
                    rows="10"
                    placeholder="Tell Staff about your pets instruction"
                  ></textarea>
                </div>
              </div>

              <div class="mt-4 grid">
                <button
                  type="submit"
                  class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { start } from "@popperjs/core";
import "@vuepic/vue-datepicker/dist/main.css";
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore();

const route = useRoute();
const { data: roomType, error } = await useMyFetch<any>(
  `room-types/${route.params.id}`,
  {}
);

const totalPrice = computed(() => {
  if (route.query.startDate && route.query.endDate && route.query.petsAmount) {
    return (
      Number(route.query.petsAmount) *
      roomType.value.price *
      calculateNights(
        route.query.startDate as string,
        route.query.endDate as string
      )
    );
  }
  return 0;
});

const formData = reactive({
  user_id: auth.user.id,
  roomTypeId: route.params.id,
  checkIn: route.query.startDate,
  checkOut: route.query.endDate,
  petsAmount: route.query.petsAmount,
  ownerInstruction: "",
  nights: 0,
});

function calculateNights(date1: string, date2: string) {
  return (Date.parse(date2) - Date.parse(date1)) / 86400000 + 1;
}
async function onSubmit() {
  console.log(formData);
  const { data: response, error } = await useMyFetch<any>(
    `room-types/${route.params.id}/book`,
    {
      method: "POST",
      body: {
        user_id: auth.user.id,
        room_type_id: route.params.id,
        check_in: route.query.startDate,
        check_out: route.query.endDate,
        pets_amount: route.query.petsAmount,
        owner_instruction: formData.ownerInstruction,
      },
    }
  );

  if (response.value !== null) {
    console.log("Booking Order Created");
    console.log(response.value);
    const bookingOrderId = response.value["booking_order"]["id"];
    await navigateTo(`/payments/create?bookingOrderId=${bookingOrderId}`);
    console.log(response.value);
  }
  console.log("Error");
  console.log(error.value);
}
</script>
