<template>
    <div>
        <div>
            <!-- <form @submit.prevent="onSubmit()">
                <input type="file" @change="onChange" multiple />
                <input type="submit" value="Upload">
            </form> -->
        </div>
    </div>
</template>
<!-- 
<scripti setup lang="ts">

const formData = reactive({
    images: [],
});

async function onSubmit() {
    const { data: response, error } = await useMyFetch<any>(
        "room-types/image-catalogues", {
        method: "POST",
        body: {
            formData,
        }
    });
}

export default {






    //   data: () => ({
    //     images: [], // Use images as an array to store multiple files
    //   }),
    methods: {
        onChange(e) {
            this.images = e.target.files; // Store multiple selected files in the images array
        },
        onSubmit() {
            let payload = new FormData();

            for (let i = 0; i < this.images.length; i++) {
                payload.append('image[]', this.images[i]);
            }

            // Use the useMyFetch function to make the API request
            useMyFetch('/room-types/image-catalogues', {
                method: 'post',
                data: payload,
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the appropriate content type for file uploads
                },
            })
                .then((res) => {
                    console.log("Response", res.data);
                })
                .catch((err) => console.error(err));
        },
    },
};
</script> -->
