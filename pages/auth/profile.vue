<template>
  <section>
    <div class="flex flex-col pt-20 px-80 gap-4">
      <TheFieldIcon id="email" title="Email" :value="auth.user.email">
        <path
          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
        />
      </TheFieldIcon>
      <TheFieldIcon
        id="name"
        title="Full Name"
        :value="auth.user.firstName + ' ' + auth.user.lastName"
      >
        <path
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
        />
      </TheFieldIcon>
      <TheFieldIcon title="Phone" placeholder="Phone Number">
        <path
          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
        />
      </TheFieldIcon>
      <!-- <TheFieldIcon title="Province, District, Postal Code" placeholder="">
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </TheFieldIcon>
      <TheFieldIcon title="Street Name, Building, House Number" placeholder="">
      </TheFieldIcon> -->
      <div class="flex justify-end">
        <!-- <button
          class="btn btn-outline btn-secondary w-fit self-end text-zinc-50 mr-6"
        >
          Preview
        </button> -->
        <button class="btn btn-secondary w-fit self-end text-zinc-50 mr-6">
          save
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.25em"
            viewBox="0 0 448 512"
            class="fill-zinc-50"
          >
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-col py-20 px-80 gap-4">
      <TheFieldIcon title="Old Password" placeholder="*********">
        <path
          d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
        />
      </TheFieldIcon>
      <TheFieldIcon title="New Password" placeholder="*********">
        <path
          d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"
        />
      </TheFieldIcon>
      <TheFieldIcon title="Confirm New Password" placeholder="*********">
        <path
          d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"
        />
      </TheFieldIcon>
      <button class="btn btn-secondary w-fit self-end text-white mr-6">
        Change
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();
</script>
<!-- <script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import useMyFetch from "@/composables/useMyFetch";

const auth = useAuthStore().user;

// Fetch user data using the user's email
const { data: user } = await useMyFetch<any>(`profile/${auth.email}`, {});

const editedProfile = reactive({
  phone_number: user.value.phone_number,
  // address: user.value.address,
  // image: null, // Store the selected image file
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
    // formData.append("address", editedProfile.address);

    console.log("formData:", formData.get("phone_number"));
    // console.log("formData:", formData.get("address"));

    // if (editedProfile.image !== null) {
    //   formData.append("image", editedProfile.image);
    // }

    // console.log("formData:", formData.get("image"));

    // Make an API call to update the user's profile with the editedProfile values
    const updatedUserData = await useMyFetch<any>(`profile/${auth.email}`, {
      method: "POST",
      body: formData,
    });

    // Update the user object with the new data
    user.value.phone_number = updatedUserData.data.value.phone_number;
    // user.value.address = updatedUserData.data.value.address;
    // user.value.image_url = updatedUserData.data.value.image_url;

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
</script> -->
