// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseURL: "http://localhost/api/",
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@formkit/auto-animate/nuxt"],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    // ~/calendar-module/components/event/Update.vue => <EventUpdate />
    { path: "~/calendar-module/components" },

    // ~/user-module/components/account/UserDeleteDialog.vue => <UserDeleteDialog />
    { path: "~/user-module/components", pathPrefix: false },

    // ~/components/special-components/Btn.vue => <SpecialBtn />
    { path: "~/components/special-components", prefix: "Special" },

    // It's important that this comes last if you have overrides you wish to apply
    // to sub-directories of `~/components`.
    //
    // ~/components/Btn.vue => <Btn />
    // ~/components/base/Btn.vue => <BaseBtn />
    "~/components",
  ],
});
