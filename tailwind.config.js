/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: [
        "Arial",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Arial",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      primary: "Spicy Soup",
      secondary: "Arial",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e8ac96",

          secondary: "#e89086",

          accent: "#f2c66f",

          neutral: "#2e242e",

          "base-100": "#f0eff1",

          info: "#5aa9e2",

          success: "#66ead0",

          warning: "#a3830f",

          error: "#ef6b6b",

          "my-black": "#1f2937",
        },
      },
    ],
    utils: true,
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    require("preline/plugin"),
  ],
  darkMode: "class",
};
