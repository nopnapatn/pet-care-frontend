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
            ></TheField>
            <TheField
              id="firstName"
              v-model="formData.firstName"
              label="First Name"
              placeholder="John"
              autocomplete="on"
            ></TheField>
            <TheField
              id="lastName"
              v-model="formData.lastName"
              label="Last Name"
              placeholder="Doe"
              autocomplete="on"
            ></TheField>
            <TheField
              id="password"
              v-model="formData.password"
              label="Password"
              placeholder="********"
            ></TheField>
            <TheField
              id="confirmPassword"
              v-model="formData.confirmPassword"
              label="Confirm Password"
              placeholder="********"
            ></TheField>
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
                Login</NuxtLink
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const formData = ref({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
});

async function onSubmit() {
  const config = useRuntimeConfig();
  console.log("submitting data...");
  console.log(formData);
  const { data: response, error } = await useMyFetch<any>("register", {
    method: "POST",
    body: {
      email: formData.value.email,
      first_name: formData.value.firstName,
      last_name: formData.value.lastName,
      password: formData.value.password,
      confirm_password: formData.value.confirmPassword,
    },
  });

  if (response.value !== null) {
    console.log(response.value);
    localStorage.setItem("token", response.value.token);
    localStorage.setItem("user", JSON.stringify(response.value.user));
    await navigateTo("/");
  } else {
    console.log(error);
  }
}
</script>
