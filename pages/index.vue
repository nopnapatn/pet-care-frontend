<template>
  <section>
    <!-- Banner -->
    <div class="relative">
      <img
        class="object-cover w-full h-screen"
        src="/images/room1.png"
        alt=""
      />

      <div
        class="absolute w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800/60"
      >
        <div
          class="display-large text-primary pt-48 pb-10 px-4 mx-auto max-w-screen-xl text-center"
        >
          Pet Care
        </div>
        <p
          class="mb-16 text-center text-4xl text-zinc-50 sm:px-16 lg:px-48 max-sm:text-3xl"
        >
          Loving pet care in your neighborhood™<br /><br />
          Book our services for your pet
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-4 sm:space-x-4"
        >
          <TheButtonHome to="/rooms" color="bg-secondary"
            >Book now</TheButtonHome
          >
        </div>
      </div>
    </div>
    <!-- About -->
    <div class="bg-neutral-50">
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-10 lg:pb-28"
      >
        <div class="mx-auto max-w-screen-md text-center pt-8 mb-8 lg:mb-12">
          <span class="headline-large text-my-black">About</span>
          <p class="my-5 font-light text-my-black text-sm sm:text-xl">
            Pet Care Hotel is a cat & dog hotel that was created by the love of
            cats and more than 10 years of experience taking care of cats which
            enable us to know cat's behaviors and characteristics well. There
            are 5 different themes with 5 different designs of rooms. Each room
            are design based on cats' & dogs' behaviors that like to discover,
            climb, jump, run around and sleep..
          </p>
        </div>
      </div>
    </div>
    <!-- Conditions -->
    <div class="min-h-fit bg-primary/20">
      <div class="flex flex-col py-16 px-40">
        <span class="headline-large text-my-black">Conditions</span>
        <TheCondition></TheCondition>
      </div>
    </div>
    <!-- Shop banner -->
    <div class="min-h-fit bg-primary/20">
      <div
        class="flex items-center justify-between pl-40 lg:flex-row-reverse"
      ></div>
    </div>
    <!-- Location -->
    <div class="flex flex-col py-16 px-56 justify-center pb-36">
      <!-- <span class="headline-large text-center text-my-black">Location</span> -->
      <p class="py-10 pt-8 text-lg text-center">
        50 Ngamwongwan Rd, Khwaeng Lat Yao,
        <br />
        Khet Chatuchak, Krung Thep Maha Nakhon 10900
      </p>
      <div class="flex justify-center">
        <TheMap></TheMap>
      </div>
      <div class="flex justify-center mt-16 gap-4">
        <TheMenu to="#" title="Pet Care Thailand">
          <path
            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
          />
        </TheMenu>
        <TheMenu to="#" title="@petcare_th">
          <path
            d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"
          />
        </TheMenu>
        <TheMenu to="#" title="petcare_th">
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </TheMenu>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
