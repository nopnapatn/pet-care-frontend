<template>
  <section class="auth-layout">
    <div
      class="bg-primary-white rounded-lg shadow-lg grid lg:grid-cols-7 max-w-4xl"
    >
      <div
        class="flex flex-col justify-between items-center lg:col-span-3 w-full shadow-inner bg-primary-orange-50 rounded-l-lg"
      >
        <div class="h-20"></div>
        <div class="flex flex-col items-center px-16">
          <h1 class="my-4 headline-large text-primary-beige">Welcome!</h1>
          <p class="mb-6 headline-small text-primary-black lg:text-xl">
            Please enter your details.
          </p>
        </div>
        <img src="/images/banner-login.png" alt="" class="" />
      </div>
      <div class="lg:col-span-4">
        <div class="w-full p-8 lg:p-16 sm:p-8">
          <h2 class="headline-large text-primary-orange-100">Register</h2>
          <form class="mt-8 space-y-6" @submit.prevent="onSubmit()">
            <TheField
              id="email"
              v-model="formData.email"
              label="Email"
              placeholder="email@example.com"
              autocomplete="on"
            >
            </TheField>
            <div v-if="errorMessage.email" class="text-sm text-red-500">
              {{ errorMessage.email }}
            </div>
            <TheField
              id="firstName"
              v-model="formData.firstName"
              label="First Name"
              placeholder="John"
              autocomplete="on"
            >
            </TheField>
            <div v-if="errorMessage.firstName" class="text-sm text-red-500">
              {{ errorMessage.firstName }}
            </div>
            <TheField
              id="lastName"
              v-model="formData.lastName"
              label="Last Name"
              placeholder="Doe"
              autocomplete="on"
            >
            </TheField>
            <div v-if="errorMessage.lastName" class="text-red-500">
              {{ errorMessage.lastName }}
            </div>
            <TheField
              id="password"
              v-model="formData.password"
              label="Password"
              placeholder="********"
            >
            </TheField>
            <div v-if="errorMessage.password" class="text-red-500">
              {{ errorMessage.password }}
            </div>
            <TheField
              id="confirmPassword"
              v-model="formData.confirmPassword"
              label="Confirm Password"
              placeholder="********"
            >
            </TheField>

            <div v-if="errorMessage.confirmPassword" class="text-red-500">
              {{ errorMessage.confirmPassword }}
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-primary-green-100 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="font-medium text-gray-500"
                  >Remember this device</label
                >
              </div>
              <a
                href="#"
                class="ml-auto text-sm font-medium text-primary-green-200 hover:underline"
                >Lost Password?</a
              >
            </div>
            <TheButtonAuth
              colort="bg-primary-green-100"
              colorb="bg-primary-green-200"
              >Create your account</TheButtonAuth
            >

            <div class="text-sm font-medium text-primary-black">
              Already have an account?
              <NuxtLink
                to="/auth/login"
                class="text-primary-green-200 hover:underline"
              >
                Login
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

const formData = reactive({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
});

const errorMessage = reactive({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
});

async function onSubmit() {
  errorMessage.email = "";
  errorMessage.firstName = "";
  errorMessage.lastName = "";
  errorMessage.password = "";
  errorMessage.confirmPassword = "";

  if (!formData.email) {
    errorMessage.email = "Email is required.";
  }
  if (!formData.password) {
    errorMessage.password = "Password is required.";
  }
  if (!formData.firstName) {
    errorMessage.firstName = "First name is required.";
  }
  if (!formData.lastName) {
    errorMessage.lastName = "Last name is required.";
  }
  if (!formData.confirmPassword) {
    errorMessage.confirmPassword = "Confirm Password is required.";
  }
  if (formData.password !== formData.confirmPassword) {
    errorMessage.confirmPassword = "Passwords do not match.";
  }

  if (
    errorMessage.email ||
    errorMessage.password ||
    errorMessage.firstName ||
    errorMessage.lastName ||
    errorMessage.confirmPassword
  ) {
    return;
  }

  const { data: response, error } = await useMyFetch<any>("register", {
    method: "POST",
    body: {
      email: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
      password: formData.password,
      confirm_password: formData.confirmPassword,
    },
  });
  if (error.value) {
    console.log(error.value.data["message"]);
    errorMessage.password = error.value.data["message"];
    return;
  }
  if (response.value !== null) {
    const { data: response, error } = await useMyFetch<any>("auth/login", {
      method: "POST",
      body: {
        email: formData.email,
        password: formData.password,
      },
    });
    if (response.value !== null) {
      const { access_token, token_type } = response.value;
      auth.setNewToken(access_token);
      const { data: user, error } = await useMyFetch<any>("auth/me", {
        method: "POST",
      });
      if (user.value !== null) {
        const { name, email } = user.value;
        // auth.setUser(name, email);
        await navigateTo("/test");
      }
    }
  }
}
</script>
