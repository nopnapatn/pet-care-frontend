<template>
  <section>
    <div class="bg-primary-beige">
      <div
        class="flex-col justify-center items-center text-center py-8 px-4 mx-auto max-w-screen-xl lg:py-8"
      >
        <div class="h-24 max-sm:h-0"></div>
        <div>
          <div
            class="mb-6 display-large tracking-tight leading-none text-primary-orange-100 max-sm:text-6xl"
          >
            Pet Cares
          </div>
          <p
            class="mb-16 display-small text-primary-green-100 sm:px-16 lg:px-48 max-sm:text-3xl"
          >
            Loving pet care in your neighborhood™<br /><br />
            Book our services for your pet
          </p>
          <div
            class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-4 sm:space-x-4"
          >
            <TheButtonHome to="/" class="bg-primary-orange-100"
              >Book now</TheButtonHome
            >
          </div>
        </div>
      </div>
      <div class="flex justify-center object-bottom">
        <img src="/images/banner-home.png" alt="" class="absolute" />
      </div>
      <div class="bg-primary-beige h-40 w-screen max-sm:h-32"></div>
      <div class="h-6 max-sm:h-4"></div>
      <div class="bg-primary-white h-24"></div>
    </div>

    <div class="bg-primary-white shadow-lg">
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-8 lg:pb-48"
      >
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <span class="headline-large text-primary-orange-100"
            >Our Services</span
          >
          <p class="my-5 font-light text-primary-black sm:text-xl">
            Here at Pet Cares we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div
          class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <div class="h-72 rounded-lg bg-primary-white shadow-lg"></div>
          <div class="h-72 rounded-lg bg-primary-white shadow-lg"></div>
          <div class="h-72 rounded-lg bg-primary-white shadow-lg"></div>
        </div>
      </div>
    </div>

    <div class="bg-primary-pink">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
        <div
          class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <div
            class="mx-auto max-w-screen-md text-center flex flex-col justify-center h-full mb-8 lg:mb-12"
          >
            <div
              class="mb-4 headline-large text-primary-orange-100 tracking-tight font-extrabold"
            >
              Get Products
            </div>
            <div class="mb-5 font-light text-primary-black sm:text-xl">
              Checkout thousands products for your pet.
            </div>
            <div
              class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-4 sm:space-x-4"
            >
              <TheButtonHome to="/" class="bg-primary-green-100"
                >Shop now</TheButtonHome
              >
            </div>
          </div>

          <TheCardShop />
          <TheCardShop />
          <TheCardShop />
        </div>
      </div>
    </div>

    <div class="bg-primary-white">
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
    </div>
  </section>
</template>

<script setup lang="ts"></script>
