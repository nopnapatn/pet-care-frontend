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
          <TheButtonHome to="/room" color="bg-secondary"
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
            Neko Luxury Cat Hotel is a cat hotel that was created by the love of
            cats and more than 10 years of experience taking care of cats which
            enable us to know cat's behaviors and characteristics well. There
            are 5 different themes with 19 different designs of rooms. Each room
            are design based on cats' behaviors that like to discover, climb,
            jump, run around and sleep..
          </p>
        </div>
        <!-- <div
          class="space-y-8 mt-4 lg:grid lg:grid-cols-2 px-36 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <TheCardAbout title="Hotel"></TheCardAbout>
          <TheCardAbout title="Other Services"></TheCardAbout>
        </div> -->
      </div>
    </div>
    <!-- Conditions -->
    <div class="flex flex-col py-16 px-40">
      <span class="headline-large text-my-black">Conditions</span>
    </div>
    <!-- Shop banner -->
    <div class="hero min-h-fit bg-primary/20">
      <div class="hero-content flex-col px-8 gap-16 lg:flex-row-reverse">
        <TheCarousal></TheCarousal>
        <div>
          <h1 class="text-5xl font-primary font-bold">Get Products!</h1>
          <p class="text-base py-6">
            Checkout thousands products for your pet.
          </p>
          <button class="btn btn-secondary text-white">SHOP NOW</button>
        </div>
      </div>
    </div>
    <!-- staff -->
    <!-- <div class="bg-primary-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
          <div class="h-96 rounded-lg bg-gray-100"></div>
          <div class="flex flex-col justify-center p-8 pr-20 items-center">
            <div class="headline-large text-primary-orange-100">
              <p class="">Staff you can trust</p>
            </div>
            <div class="flex items-center pt-10">
              <img src="/images/radio-home.png" alt="" class="h-5 w-5 mr-4" />
              <p class="text-primary-green-100 text-lg font-bold">
                All staff pass a background check
              </p>
            </div>
            <div class="flex items-start py-8">
              <img
                src="/images/radio-home.png"
                alt=""
                class="h-5 w-5 mt-1 mr-4"
              />
              <p class="text-primary-green-100 text-lg font-bold">
                All staff provide a deatailed profile <br />
                and personal infomation
              </p>
            </div>
            <div class="flex items-start pb-4">
              <img
                src="/images/radio-home.png"
                alt=""
                class="h-5 w-5 mt-1 mr-4"
              />
              <p class="text-primary-green-100 text-lg font-bold">
                All staff are approved by out team <br />
                of sitter specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Location -->
    <div class="flex flex-col py-16 px-56 justify-center">
      <!-- <span class="headline-large text-center text-my-black">Location</span> -->
      <p class="py-10 pt-8 text-lg text-center">
        50 Ngamwongwan Rd, Khwaeng Lat Yao,
        <br />
        Khet Chatuchak, Krung Thep Maha Nakhon 10900
      </p>
      <div class="flex justify-center">
        <TheMap></TheMap>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
