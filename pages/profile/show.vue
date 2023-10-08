<template>
    <section class="auth-layout">
        <div class="bg-primary-white rounded-lg shadow-lg grid lg:grid-cols-7 max-w-4xl">
            <div
                class="flex flex-col justify-between items-center lg:col-span-3 w-full shadow-inner bg-primary-orange-50 rounded-l-lg">
                <div class="h-20"></div>
                <div class="flex flex-col items-center px-16">
                    <h1 class="my-4 headline-large text-primary-beige">User Profile</h1>
                </div>
                <img :src="getImageUrl(user.image_url)" alt="User Image" class="w-32 h-32 rounded-full" />
            </div>
            <div class="lg:col-span-4">
                <div class="w-full p-8 lg:p-16 sm:p-8">
                    <h2 class="headline-large text-primary-orange-100">User Information</h2>
                    <div class="mt-8 space-y-4">
                        <div>
                            <label class="text-primary-orange-100">Name: </label>
                            <span class="text-primary-black">{{ user.first_name }} {{ user.last_name }}</span>
                        </div>
                        <div>
                            <label class="text-primary-orange-100">Email: </label>
                            <span class="text-primary-black">{{ user.email }}</span>
                        </div>
                        <div>
                            <label class="text-primary-orange-100">Phone: </label>
                            <span class="text-primary-black">{{ user.phone_number }}</span>
                        </div>
                        <div>
                            <label class="text-primary-orange-100">Address: </label>
                            <span class="text-primary-black">{{ user.address }}</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <router-link to="/profile/edit" class="btn-edit-profile">Edit Profile</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import useMyFetch from "@/composables/useMyFetch"; 

const auth = useAuthStore().user;

const { data: user } = await useMyFetch<any>(
    `profile/${auth.email}`, {}
);

console.log(user);

const getImageUrl = (imagePath: string) => {
  if (imagePath) {
    // Use Laravel's asset function to generate the URL
    const modifiedPath =  'http://localhost' + '/storage/' + imagePath;
    console.log(modifiedPath);
    return modifiedPath;
  } else {
    // If imagePath is empty, use a default image path
    return '/images/banner-login.png';
  }
};

// console.log(user.value);
</script>
  