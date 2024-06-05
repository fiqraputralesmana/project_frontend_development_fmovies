/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "dashboard-height": "calc(100vh - 25vh)",
      },
    },
  },
  plugins: [],
};
