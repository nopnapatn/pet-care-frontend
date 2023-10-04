<template>
  <header>
    <nav class="bg-primary-beige">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <TheLogo />
        <div class="flex md:order-2 items-center">
          <div v-if="auth.isLogin" class="flex items-center gap-4">
            <h1>{{ auth.user.firstName }}</h1>
            <h1>{{ auth.user.lastName }}</h1>
            <NuxtLink
              to="/"
              @click.prevent="handleLogout"
              class="text-sm font-semibold text-primary-orange-100 hover:text-primary-green-100"
            >
              Logout
            </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink
              to="/auth/login"
              class="text-sm font-semibold text-primary-orange-100 hover:text-primary-green-100"
            >
              Login
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="mx-6 headline-small text-primary-orange-100 hover:text-primary-green-100"
            >
              Register
            </NuxtLink>
          </div>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-black rounded-lg md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary-beige"
          >
            <li>
              <NuxtLink
                to="/room"
                class="text-primary-orange-100 hover:text-primary-green-100"
                aria-current="page"
                >Hotel Room
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-primary-orange-100 hover:text-primary-green-100"
                aria-current="page"
                >Other Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-primary-orange-100 hover:text-primary-green-100"
                aria-current="page"
                >Shop
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();
function handleLogout() {
  auth.clear(), navigateTo("/");
}
</script>
