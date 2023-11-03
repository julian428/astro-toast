/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      keyframes: {
        "pop-in-out": {
          "10%, 90%": { opacity: 1 },
        },
      },
      animation: {
        "pop-in-out": "pop-in-out 5s",
      },
    },
  },
  plugins: [require("daisyui")],
};
