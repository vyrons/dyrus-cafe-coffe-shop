/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        ranade: ["ranade-regular", "sans-serif"],
        novar: ["novar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
