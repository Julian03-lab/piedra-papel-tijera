/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "scissors-shadow":
          "0 0 0 12px hsl(39, 89%, 49%), 0 6px 0 12px hsl(39, 89%, 39%), 0 4px 0 2px lightgray inset",
        "paper-shadow":
          "0 0 0 12px hsl(230, 89%, 62%), 0 6px 0 12px hsl(230, 89%, 52%), 0 4px 0 2px lightgray inset",
        "rock-shadow":
          "0 0 0 12px hsl(349, 71%, 52%), 0 6px 0 12px hsl(349, 71%, 42%), 0 4px 0 2px lightgray inset",
        "pressed-shadow":
          "0 0 0 12px hsl(217, 16%, 45%), 0 6px 0 12px hsl(217, 16%, 35%), 0 4px 0 2px lightgray inset",
        "scissors-shadow-lg":
          "0 0 0 24px hsl(39, 89%, 49%), 0 11px 0 24px hsl(39, 89%, 39%), 0 8px 0 2px lightgray inset",
        "paper-shadow-lg":
          "0 0 0 24px hsl(230, 89%, 62%), 0 11px 0 24px hsl(230, 89%, 52%), 0 8px 0 2px lightgray inset",
        "rock-shadow-lg":
          "0 0 0 24px hsl(349, 71%, 52%), 0 11px 0 24px hsl(349, 71%, 42%), 0 8px 0 2px lightgray inset",
        "pressed-shadow-lg":
          "0 0 0 24px hsl(217, 16%, 45%), 0 11px 0 24px hsl(217, 16%, 35%), 0 8px 0 2px lightgray inset",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(hsl(214,47%,23%),hsl(237,49%,15%))",
        "scissors-gradient":
          "linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "paper-gradient":
          "linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "rock-gradient":
          "linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
      },
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
};
