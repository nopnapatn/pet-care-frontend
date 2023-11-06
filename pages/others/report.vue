<template>
  <div class="fix flex-col h-[46rem] justify-center px-48 py-10 gap-y-6">
    <div class="flex w-full justify-center">
      <ol class="flex justify-around w-full">
        <li
          class="flex w-full items-center text-accent/40 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-accent/40 after:border-4 after:inline-block"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-accent/40 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
          >
            <svg
              class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 stroke-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
        <li
          class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
        >
          <span
            class="flex items-center justify-center w-10 h-10 bg-accent/40 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              class="w-4 h-4 text-yellow-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
              />
            </svg>
          </span>
        </li>
        <li class="flex items-center">
          <span
            class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-credit-card-2-back-fill fill-gray-600"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"
              />
            </svg>
          </span>
        </li>
      </ol>
    </div>
    <!-- content -->
    <div class="mx-48 mt-10 border-b">
      <TheTableReceipt></TheTableReceipt>
    </div>
    <div class="flex mt-8 mx-48 mr-68 justify-between">
      <h1>Total</h1>
      <h1>$350</h1>
    </div>
    <div class="flex justify-center mt-12">
      <nuxt-link to="/others/payment" class="btn btn-primary text-white"
        >Confirm</nuxt-link
      >
    </div>
  </div>
</template>
