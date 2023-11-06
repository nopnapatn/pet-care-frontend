<template>
  <div class="fix h-[46rem] px-16">
    <div class="flex w-full justify-center pt-10">
      <span class="headline-large text-my-black text-center">My Booked</span>
    </div>
    <div class="px- mt-6"></div>
    <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
      <button
        type="button"
        class="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center flex-auto inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
        id="fill-and-justify-item-1"
        data-hs-tab="#fill-and-justify-1"
        aria-controls="fill-and-justify-1"
        role="tab"
      >
        Tab 1
      </button>
      <button
        type="button"
        class="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center flex-auto inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        id="fill-and-justify-item-2"
        data-hs-tab="#fill-and-justify-2"
        aria-controls="fill-and-justify-2"
        role="tab"
      >
        This is the longest link I've seen
      </button>
      <button
        type="button"
        class="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center flex-auto inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 hover:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        id="fill-and-justify-item-3"
        data-hs-tab="#fill-and-justify-3"
        aria-controls="fill-and-justify-3"
        role="tab"
      >
        Tab 3
      </button>
    </nav>

    <div class="mt-3">
      <div
        id="fill-and-justify-1"
        role="tabpanel"
        aria-labelledby="fill-and-justify-item-1"
      >
        <p class="text-gray-500 dark:text-gray-400">
          This is the
          <em class="font-semibold text-gray-800 dark:text-gray-200">first</em>
          item's tab body.
        </p>
      </div>
      <div
        id="fill-and-justify-2"
        class="hidden"
        role="tabpanel"
        aria-labelledby="fill-and-justify-item-2"
      >
        <p class="text-gray-500 dark:text-gray-400">
          This is the
          <em class="font-semibold text-gray-800 dark:text-gray-200">second</em>
          item's tab body.
        </p>
      </div>
      <div
        id="fill-and-justify-3"
        class="hidden"
        role="tabpanel"
        aria-labelledby="fill-and-justify-item-3"
      >
        <p class="text-gray-500 dark:text-gray-400">
          This is the
          <em class="font-semibold text-gray-800 dark:text-gray-200">third</em>
          item's tab body.
        </p>
      </div>
    </div>
  </div>
</template>
