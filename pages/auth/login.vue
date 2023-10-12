<template>
  <section class="auth-layout">
    <TheCardAuth title="Login">
      <form class="mt-8 space-y-6" @submit.prevent="onSubmit()">
        <TheFieldText
          id="email"
          v-model="formData.email"
          label="Email"
          placeholder="email@example.com"
          autocomplete="on"
          required
        ></TheFieldText>
        <!-- <div v-if="errorMessage.email" class="text-sm text-red-500">
          {{ errorMessage.email }}
        </div> -->
        <TheFieldText
          id="password"
          v-model="formData.password"
          label="Password"
          placeholder="********"
          required
        ></TheFieldText>
        <!-- <div v-if="errorMessage.password" class="text-sm text-red-500">
          {{ errorMessage.password }}
        </div> -->

        <div v-if="statusMessage" class="text-sm text-red-500">
          {{ statusMessage }}
        </div>
        <div class="flex items-start">
          <div class="flex items-center">
            <input
              id="remember"
              aria-describedby="remember"
              name="remember"
              type="checkbox"
              class="checkbox checkbox-accent checkbox-sm"
            />
          </div>
          <div class="ml-3 text-sm mr-4">
            <label for="remember" class="font-medium text-gray-500"
              >Remember me</label
            >
          </div>
          <NuxtLink
            href="/"
            class="ml-auto text-sm font-medium text-my-black mb-6 hover:text-gray-600"
            >Forget Password?</NuxtLink
          >
        </div>
        <TheButtonAuth class="w-full" colort="bg-primary" colorb="bg-secondary"
          >Login to your account</TheButtonAuth
        >

        <div class="text-sm font-medium text-my-black">
          Not registered yet?
          <NuxtLink
            to="/auth/register"
            class="text-my-black underline hover:text-gray-600"
          >
            Create Account</NuxtLink
          >
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
      console.log(user.value);
      let id = user.value["id"];
      let firstName = user.value["first_name"];
      let lastName = user.value["last_name"];
      let email = user.value["email"];
      let role = user.value["role"];
      auth.setUser(id, firstName, lastName, email, role);
      console.log("Auth user:", auth.user);
      if (role === "ADMIN") {
        await navigateTo("/dashboard");
      } else {
        await navigateTo("/");
      }
    }
  }
}
</script>
