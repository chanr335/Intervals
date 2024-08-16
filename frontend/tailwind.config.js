import daisyui from "./node_modules/daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors:{
      // primary: {
      // secondary:{
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["black"],
  },
};
