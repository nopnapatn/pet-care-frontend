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
          <h1 class="my-4 headline-large text-primary-beige">Welcome back!</h1>
          <p class="mb-6 headline-small text-primary-black lg:text-xl">
            Please enter your details.
          </p>
        </div>
        <img src="/images/banner-login.png" alt="" class="" />
      </div>
      <div class="lg:col-span-4">
        <div class="w-full p-8 lg:p-16 sm:p-8">
          <h2 class="headline-large text-primary-orange-100">Login</h2>
          <form class="mt-8 space-y-6" @submit.prevent="onSubmit()">
            <TheField
              id="email"
              v-model="formData.email"
              label="Email"
              placeholder="email@example.com"
              autocomplete="on"
            ></TheField>
            <div v-if="errorMessage.email" class="text-sm text-red-500">
              {{ errorMessage.email }}
            </div>
            <TheField
              id="password"
              v-model="formData.password"
              label="Password"
              placeholder="********"
            ></TheField>
            <div v-if="errorMessage.password" class="text-sm text-red-500">
              {{ errorMessage.password }}
            </div>

            <div v-if="statusMessage" class="text-sm text-red-500">
              {{ statusMessage }}
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
              >Login to your account</TheButtonAuth
            >
            <TheButtonAuth
              colort="bg-primary-orange-50"
              colorb="bg-primary-orange-100"
              >Sign in with google</TheButtonAuth
            >

            <div class="text-sm font-medium text-primary-black">
              Not registered yet?
              <NuxtLink
                to="/auth/register"
                class="text-primary-green-200 hover:underline"
              >
                Create Account</NuxtLink
              >
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
  password: "",
});

const errorMessage = reactive({
  email: "",
  password: "",
});

const statusMessage = ref("");

async function onSubmit() {
  errorMessage.email = "";
  errorMessage.password = "";

  if (!formData.email) {
    errorMessage.email = "Email is required.";
  }
  if (!formData.password) {
    errorMessage.password = "Password is required.";
  }

  if (errorMessage.email || errorMessage.password) {
    return;
  }

  const { data: response, error } = await useMyFetch<any>("auth/login", {
    method: "POST",
    body: formData,
  });

  if (error.value) {
    console.log(error.value.data["message"]);
    errorMessage.password = error.value.data["message"];
    return;
  }
  if (response.value !== null) {
    const { access_token, token_type } = response.value;
    auth.setNewToken(access_token);
    const { data: user, error } = await useMyFetch<any>("auth/me", {
      method: "POST",
    });
    if (user.value !== null) {
      const { name, email } = user.value;
      auth.setUser(name, email);
      await navigateTo("/test");
    }
  }

  // if (error && error.value) {
  //   console.log(error);
  //   console.log(error.value);
  //   const { data } = error.value!;

  //   if (data.errors && data.errors.email) {
  //     errorMessage.email = data.errors.email.join(" "); // Concatenate array elements into a single string
  //   } else {
  //     errorMessage.email = "";
  //   }

  //   if (data.errors && data.errors.password) {
  //     errorMessage.password = data.errors.password.join(" "); // Concatenate array elements into a single string
  //   } else {
  //     errorMessage.password = "";
  //   }

  //   console.log(error.value);

  //   if (JSON.stringify(error.value).includes("401")) {
  //     statusMessage.value = "Wrong email or password, please try again.";
  //   }
  // } else {
  //   console.log(response.value);
  //   localStorage.setItem("token", response.value.token);
  //   localStorage.setItem("user", JSON.stringify(response.value.user));
  //   await navigateTo("/test");
  // }

  // if (response.value !== null) {
  //   console.log(response.value);
  //   localStorage.setItem("token", response.value.token);
  //   localStorage.setItem("user", JSON.stringify(response.value.user));
  //   await navigateTo("/");
  // } else {
  //   errorMessage.value = "User does not exist. Please check your credentials.";
  // }
}
</script>
