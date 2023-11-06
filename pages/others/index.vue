<template>
  <div class="fix h-[46rem] grid grid-cols-2 px-16">
    <div class="flex flex-col gap-y-8 h-full py-10 pl-28 pr-10">
      <div class="flex flex-col gap-5">
        <span class="headline-large text-my-black">Spa & Grooming</span>
        <!-- <h1>Service</h1> -->
        <!-- <p>
        Our dog grooming and spa compliments our boarding and daycare services
        making Paws in Paradise a complete resort for your pets. We are open 7
        days a week to cater to your schedule. We spare no expense by caring for
        your dog or cat with our luxurious bathing products. Our
        state-of-the-art grooming salon is designed for guests of all sizes and
        our professional pet stylists will make your pet look fabulous and keep
        them at ease throughout their visit.
      </p> -->
        <p>
          Pricing is dependent on the length, condition, and texture of the
          guest’s coat. Our Pet Stylists will determine pricing prior to
          grooming during the consultation with the owner.
        </p>
      </div>
      <div class="flex items-center">
        <select
          name="pet-size"
          id="pet-size"
          class="select select-bordered bg-white focus:ring-primary focus:border-primary"
        >
          <!-- <option disabled selected>What's your pet size?</option> -->
          <option value="2">Small</option>
          <option value="3">Medium</option>
          <option value="4">Large</option>
        </select>
        <h1 class="ml-4">Weight Length : 1-20 pounds</h1>
      </div>
      <NuxtLink to="/others/form" class="btn btn-secondary text-white"
        >Booking</NuxtLink
      >
    </div>
    <div class="h-full overflow-y-auto py-10 justify-start">
      <div class="flex flex-col gap-y-8 shadow-inner ml-10 mr-28">
        <TheTableSpaTable></TheTableSpaTable>
        <TheTableGroomTable></TheTableGroomTable>
        <TheTableALaCarte></TheTableALaCarte>
      </div>
    </div>
  </div>
</template>
