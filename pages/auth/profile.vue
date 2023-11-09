<template>
  <section>
    <div class="flex flex-col pt-20 px-80 gap-4">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
        <TheFieldIcon id="firstName" title="First Name" placeholder="John" v-model="profileFormData.firstName">
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </TheFieldIcon>
        <TheFieldIcon id="lastName" title="Last Name" placeholder="Doe" v-model="profileFormData.lastName">
        </TheFieldIcon>

        <TheFieldIcon id="phone" title="Phone" placeholder="Phone Number" type="tel" v-model="profileFormData.phone">
          <path
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </TheFieldIcon>
        <div class="flex justify-end">
          <button type="submit" class="btn btn-secondary w-fit self-end text-zinc-50 mr-6">
            save
            <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512" class="fill-zinc-50">
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
    <form @submit.prevent="changePassword" class="flex flex-col gap-4">
      <div class="flex flex-col py-20 px-80 gap-4">
        <TheFieldIcon title="Old Password" placeholder="Password" type="password" v-model="passwordFormData.oldPassword">
          <path
            d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
        </TheFieldIcon>
        <TheFieldIcon title="New Password" placeholder="Password" type="password" v-model="passwordFormData.newPassword">
          <path
            d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" />
        </TheFieldIcon>
        <TheFieldIcon title="Confirm New Password" placeholder="Password" type="password"
          v-model="passwordFormData.confirmPassword">
          <path
            d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" />
        </TheFieldIcon>
        <button type="submit" class="btn btn-secondary w-fit self-end text-white mr-6">
          Change
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

const fetchedUserData = await useMyFetch<any>(`profile/${auth.user.id}`, {});
const userData = fetchedUserData.data.value;

// validate var name
const profileFormData = reactive({
  firstName: userData.firstName || '', // Set a default value or handle null appropriately
  lastName: userData.lastName || '', // Set a default value or handle null appropriately
  phone: userData.phone || '', // Set a default value or handle null appropriately
});

console.log(profileFormData)

const onSubmit = async () => {
  try {
    const response = await useMyFetch(`/profile/${auth.user.id}`, {
      method: 'PUT',
      body: {
        first_name: profileFormData.firstName || '', // Set a default value or handle null appropriately
        last_name: profileFormData.lastName || '', // Set a default value or handle null appropriately
        phone_number: profileFormData.phone || '', // Set a default value or handle null appropriately
      },
    });

    if (response) {
      console.log('Profile updated successfully:', response);
    } else {
      console.error('Failed to update profile');
    }
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

const passwordFormData = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
});

const changePassword = async () => {
  try {
    const response = await useMyFetch(`/profile/${auth.user.id}/change-password`, {
      method: 'PUT',
      body: {
        current_password: passwordFormData.oldPassword,
        new_password: passwordFormData.newPassword,
        confirm_password: passwordFormData.confirmPassword,
      },
    });

    if (response) {
      console.log('Password updated successfully:', response);
    } else {
      console.error('Failed to update password');
    }
  } catch (error) {
    console.error('Error updating password:', error);
  }
};

</script>