/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(10rem, 1fr))",
      },
      objectPosition: {
        "top-center": "center 15%",
      },
      aspectRatio: {
        poster: "1/1.5",
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
}
