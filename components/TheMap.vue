<template>
  <GoogleMap
    api-key="AIzaSyD-4j8DVLhtw2OBiELDmKBBvoaIGr717ZU"
    style="width: 100%; height: 250px"
    :center="center"
    :zoom="17"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 13.845493, lng: 100.570106 };

    return { center };
  },
});
</script>
