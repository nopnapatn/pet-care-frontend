<template>
  <section class="auth-layout">
    <TheCardAuth title="Register">
      <form class="mt-8 space-y-6" @submit.prevent="onSubmit()">
        <TheFieldText
          id="email"
          v-model="formData.email"
          label="Email"
          placeholder="email@example.com"
          autocomplete="on"
          required
        >
        </TheFieldText>
        <!-- <div v-if="errorMessage.email" class="text-sm text-red-500">
          {{ errorMessage.email }}
        </div> -->
        <TheFieldText
          id="firstName"
          v-model="formData.firstName"
          label="First Name"
          placeholder="John"
          autocomplete="on"
          required
        >
        </TheFieldText>
        <!-- <div v-if="errorMessage.firstName" class="text-sm text-red-500">
          {{ errorMessage.firstName }}
        </div> -->
        <TheFieldText
          id="lastName"
          v-model="formData.lastName"
          label="Last Name"
          placeholder="Doe"
          autocomplete="on"
          required
        >
        </TheFieldText>
        <!-- <div v-if="errorMessage.firstName" class="text-sm text-red-500">
          {{ errorMessage.firstName }}
        </div> -->
        <TheFieldText
          id="phoneNumber"
          v-model="formData.phoneNumber"
          label="Phone Number"
          placeholder="Doe"
          autocomplete="on"
          required
        >
        </TheFieldText>
        <!-- <div v-if="errorMessage.lastName" class="text-red-500">
          {{ errorMessage.lastName }}
        </div> -->
        <TheFieldText
          id="password"
          v-model="formData.password"
          label="Password"
          placeholder="********"
          required
        >
        </TheFieldText>
        <!-- <div v-if="errorMessage.password" class="text-red-500">
          {{ errorMessage.password }}
        </div> -->
        <TheFieldText
          id="confirmPassword"
          v-model="formData.confirmPassword"
          label="Confirm Password"
          placeholder="********"
          required
        >
        </TheFieldText>

        <div v-if="errorMessage.confirmPassword" class="text-error text-sm">
          {{ errorMessage.confirmPassword }}
        </div>

        <TheButtonAuth colort="bg-primary" colorb="bg-secondary"
          >Create your account</TheButtonAuth
        >

        <div class="text-sm font-medium text-primary-black">
          Already have an account?
          <NuxtLink
            to="/auth/login"
            class="text-primary-green-200 underline hover:text-gray-600"
          >
            Login
          </NuxtLink>
        </div>
      </form>
    </TheCardAuth>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

const formData = reactive({
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

const errorMessage = reactive({
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

async function onSubmit() {
  errorMessage.email = "";
  errorMessage.firstName = "";
  errorMessage.lastName = "";
  errorMessage.phoneNumber = "";
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
  if (!formData.phoneNumber) {
    errorMessage.phoneNumber = "Phone number is required.";
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
    errorMessage.phoneNumber ||
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
      phone_number: formData.phoneNumber,
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
