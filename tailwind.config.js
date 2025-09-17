/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#1b1c1f",
        primary: "#AB070F99",
        secondary: "#242629",
      },
    },
  },
  plugins: [],
};
