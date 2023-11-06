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
          <h1 class="my-4 headline-large text-primary-beige">Edit Profile</h1>
        </div>
        <img
          :src="getImageUrl(user.image_url)"
          alt="User Image"
          class="w-32 h-32 rounded-full"
        />
      </div>
      <div class="lg:col-span-4">
        <div class="w-full p-8 lg:p-16 sm:p-8">
          <h2 class="headline-large text-primary-orange-100">
            User Information
          </h2>
          <form @submit.prevent="updateProfile()">
            <div class="mt-8 space-y-4">
              <div>
                <label class="text-primary-orange-100">Name: </label>
                <span class="text-primary-black"
                  >{{ user.first_name }} {{ user.last_name }}</span
                >
              </div>
              <div>
                <label class="text-primary-orange-100">Email: </label>
                <span class="text-primary-black">{{ user.email }}</span>
              </div>
              <div>
                <label class="text-primary-orange-100">Phone: </label>
                <input
                  v-model="editedProfile.phone_number"
                  type="text"
                  class="text-primary-black"
                />
              </div>
              <div>
                <label class="text-primary-orange-100">Address: </label>
                <input
                  v-model="editedProfile.address"
                  type="text"
                  class="text-primary-black"
                />
              </div>
              <div>
                <label class="text-primary-orange-100"
                  >Upload New Image:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload"
                />
              </div>
              <!-- <div>
                                <v-img v:bind:src=":image"></v-img>
                                <label class="text-primary-orange-100">Upload New Image: </label>
                                <input type="file" accept="image/*" @change="handleImageUpload" />
                            </div> -->
            </div>
            <div class="mt-4">
              <button type="submit" class="btn-edit-profile">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import useMyFetch from "@/composables/useMyFetch";

const auth = useAuthStore().user;

// Fetch user data using the user's email
const { data: user } = await useMyFetch<any>(`profile/${auth.email}`, {});

const editedProfile = reactive({
  phone_number: user.value.phone_number,
  address: user.value.address,
  image: null, // Store the selected image file
});

const handleImageUpload = async (event: any) => {
  const file = event.target.files[0];
  editedProfile.image = file;
  console.log("Image uploaded successfully!", editedProfile.image);
};

const updateProfile = async () => {
  try {
    // Create a FormData object to send the image file and other data
    const formData = new FormData();

    formData.append("phone_number", editedProfile.phone_number);
    formData.append("address", editedProfile.address);

    console.log("formData:", formData.get("phone_number"));
    console.log("formData:", formData.get("address"));

    if (editedProfile.image !== null) {
      formData.append("image", editedProfile.image);
    }

    console.log("formData:", formData.get("image"));

    // Make an API call to update the user's profile with the editedProfile values
    const updatedUserData = await useMyFetch<any>(`profile/${auth.email}`, {
      method: "POST",
      body: formData,
    });

    // Update the user object with the new data
    user.value.phone_number = updatedUserData.data.value.phone_number;
    user.value.address = updatedUserData.data.value.address;
    user.value.image_url = updatedUserData.data.value.image_url;

    console.log("Profile updated successfully!");

    await navigateTo("/profile/show");
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

const getImageUrl = (imagePath: string) => {
  if (imagePath) {
    // Use Laravel's asset function to generate the URL
    const modifiedPath = "http://localhost" + "/storage/" + imagePath;
    console.log(modifiedPath);
    return modifiedPath;
  } else {
    // If imagePath is empty, use a default image path
    return "/images/banner-login.png";
  }
};
</script>
