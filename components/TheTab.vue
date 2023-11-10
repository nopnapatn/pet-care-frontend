<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select your country</label>
      <select
        id="tabs"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>To Pay</option>
        <option>To Verify</option>
        <option>Booked</option>
        <option>Completed</option>
        <option>Canceled</option>
      </select>
    </div>
    <ul
      class="hidden text-sm font-medium mt-10 text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
    >
      <li class="w-full">
        <NuxtLink
          to="/order/to-pay"
          class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
          aria-current="page"
          >To Pay</NuxtLink
        >
      </li>
      <li class="w-full">
        <NuxtLink
          to="/order/to-verify"
          class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
          aria-current="page"
          >To Verify</NuxtLink
        >
      </li>
      <li class="w-full">
        <NuxtLink
          to="/order/verified"
          class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >Booked</NuxtLink
        >
      </li>
      <li class="w-full">
        <NuxtLink
          to="/order/complete"
          class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >Completed</NuxtLink
        >
      </li>
      <li class="w-full">
        <NuxtLink
          to="/order/canceled"
          class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >Canceled</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
