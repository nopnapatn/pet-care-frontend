<template>
  <header>
    <nav class="bg-zinc-50 z-30 fixed w-full">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-8"
      >
        <TheLogo />
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary-beige"
          >
            <li>
              <NuxtLink
                to="/"
                class="text-my-black hover:text-primary-green-100"
                aria-current="page"
                >Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/rooms"
                class="text-my-black hover:text-primary-green-100"
                aria-current="page"
              >
                Rooms
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/others"
                class="text-my-black hover:text-primary-green-100"
                aria-current="page"
                >Other Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                v-if="auth.isLogin"
                to="/profile/show"
                class="text-primary-orange-100 hover:text-primary-green-100"
                aria-current="page"
                >Profile
              </NuxtLink>
            </li>
            <li v-if="auth.user.role === 'STAFF'">
              <NuxtLink
                to="/dashboard"
                class="text-primary-orange-100 hover:text-primary-green-100"
                aria-current="page"
                >Dashboard
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/test"
                class="text-primary-orange-100 hover:text-primary-green-100"
                aria-current="page"
                >Test</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="flex items-center order-3">
          <div v-if="auth.isLogin" class="flex items-center gap-4">
            <NuxtLink
              to="/booked"
              class="inline-flex whitespace-nowrap text-my-black hover:text-primary-green-100"
            >
              My Booked
            </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink
              to="/auth/login"
              class="text-md mr-3 text-my-black hover:text-secondary"
            >
              Login
            </NuxtLink>
            <!-- <NuxtLink
              to="/auth/register"
              class="mx-6 headline-small text-my-black hover:text-primary-green-100"
            >
              Register
            </NuxtLink> -->
          </div>
          <TheSidebar></TheSidebar>
        </div>
      </div>
    </nav>
  </header>

  <!-- drawer component -->
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();
function handleLogout() {
  auth.clear(), navigateTo("/");
}
</script>
